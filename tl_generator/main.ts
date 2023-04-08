// deno-lint-ignore-file no-explicit-any
import { parse } from "https://deno.land/x/tl_json@1.1.2/mod.ts";
import { revampId, revampType, toCamelCase } from "./utilities.ts";

const apiContent = Deno.readTextFileSync("tl/api.tl");

const mtProtoContent = Deno.readTextFileSync("tl/mtproto.tl");

const { constructors: mtProtoConstructors, functions: mtProtoFunctions } =
  parse(mtProtoContent);
const { constructors: apiConstructors, functions: apiFunctions } = parse(
  apiContent,
);

for (const constructor of mtProtoConstructors) {
  for (const param of constructor.params) {
    if (param.type == "string") {
      param.type = "bytes";
    }
  }
}

for (const constructor of mtProtoFunctions) {
  for (const param of constructor.params) {
    if (param.type == "string") {
      param.type = "bytes";
    }
  }
}

const constructors = mtProtoConstructors.concat(apiConstructors);
const functions = mtProtoFunctions.concat(apiFunctions);

let code =
  `import { id, params, TLObject, Params, TLObjectConstructor, ParamDesc, paramDesc } from "./1_tl_object.ts";

export abstract class Constructor extends TLObject {
}

// Uknown type
export abstract class TypeX extends Constructor {}
`;

const skipIds = [0x1cb5c415, 0xbc799737, 0x997275b5];

const typeMap: Record<string, string> = {
  "int": "number",
  "long": "bigint",
  "bool": "boolean",
  "double": "number",
  "true": "true",
  "string": "string | Uint8Array",
  "bytes": "Uint8Array",
  "int128": "bigint",
  "int256": "bigint",
};
function convertType(type: string, single = false, prefix = false) {
  if (type.startsWith("flags")) {
    type = type.split("?").slice(-1)[0];
  }
  let isVector = false;
  // toLowerCase because it is sometimes `vector` in mtproto.tl
  if (type.toLowerCase().startsWith("vector")) {
    isVector = true;
    type = type.split("<")[1].split(">")[0];
  }
  const mapping = typeMap[type.toLowerCase()];
  if (mapping != undefined) {
    type = mapping;
    if (single) {
      type = type.split(/\s/)[0];
    }
  } else {
    type = type.replaceAll("!", "");
    type = `Type${revampType(type)}`;
    if (prefix) {
      type = `constructors.${type}`;
    }
  }
  if (isVector) {
    return `Array<${type}>`;
  } else {
    return type;
  }
}

function getParamDescGetter(params: any[], prefix = false) {
  let code = `static get [paramDesc](): ParamDesc {
    return [\n`;
  for (const param of params) {
    if (param.name.startsWith("flags")) {
      continue;
    }
    const name = toCamelCase(param.name);
    code += `["${name}", `;
    let type = convertType(param.type, true, prefix);
    if (type.startsWith("Array")) {
      type = type.split("<")[1].split(">")[0];
      if (
        !type.replace("constructors.", "").startsWith("Type") &&
        type != "Uint8Array"
      ) {
        type = `"${type}"`;
      }
      type = `[${type}]`;
    } else if (
      !type.replace("constructors.", "").startsWith("Type") &&
      type != "Uint8Array"
    ) {
      type = `"${type}"`;
    }
    code += `${type}, `;
    code += `"${param.type}"`;
    code += "],";
  }
  code += "]\n";
  code += "}\n";
  return code;
}

function getParamsGetter(params: any[], prefix = false) {
  let code = `protected get [params](): Params {
    return [\n`;
  for (const param of params) {
    if (param.name.startsWith("flags")) {
      continue;
    }
    const isFlag = param.type.startsWith("flags");
    let type = convertType(param.type, true, prefix);
    if (type.startsWith("Array")) {
      type = type.split("<")[1].split(">")[0];
      if (
        !type.replace("constructors.", "").startsWith("Type") &&
        type != "Uint8Array"
      ) {
        type = `"${type}"`;
      }
      type = `[${type}]`;
    } else if (
      !type.replace("constructors.", "").startsWith("Type") &&
      type != "Uint8Array"
    ) {
      type = `"${type}"`;
    }
    const name = toCamelCase(param.name);
    code += `[this.${name} ${
      isFlag ? "?? null" : ""
    }, ${type}, "${param.type}"],\n`;
  }
  code += "]\n}\n";
  return code;
}

function getPropertiesDeclr(params: any[], prefix = false) {
  let code = ``;

  for (const param of params) {
    if (param.name.startsWith("flags")) {
      continue;
    }

    const isFlag = param.type.startsWith("flags");
    const name = toCamelCase(param.name);
    const type = convertType(param.type, false, prefix);
    code += `${name}${isFlag ? "?:" : ":"} ${type}\n`;
  }

  return code.trim();
}

function getConstructor(params: any[], prefix = false) {
  let code = `constructor(`;

  if (params.length > 0) {
    code += `params: {`;
    for (const param of params) {
      if (param.name.startsWith("flags")) {
        continue;
      }

      const isFlag = param.type.startsWith("flags");
      const name = toCamelCase(param.name);
      const type = convertType(param.type, false, prefix);
      code += `${name}${isFlag ? "?:" : ":"} ${type}, `;
    }
    code += "}";
  }
  code += ") {\n";
  code += "super()\n";
  for (const param of params) {
    if (param.name.startsWith("flags")) {
      continue;
    }
    const name = toCamelCase(param.name);
    code += `this.${name} = params.${name};\n`;
  }
  code += "}\n";
  return code;
}

const types = new Set<string>();
for (const constructor of constructors) {
  if (skipIds.includes(constructor.id)) {
    continue;
  }

  const className = `Type${revampType(constructor.type)}`;

  if (!types.has(className)) {
    code += `
export abstract class ${className} extends Constructor {
}
`;
    types.add(className);
  }
}

const entries = new Array<[string, string]>();
for (const constructor of constructors) {
  if (skipIds.includes(constructor.id)) {
    continue;
  }

  let parent: string;
  if (constructor.predicate.toLowerCase() == constructor.type.toLowerCase()) {
    parent = "Constructor";
  } else {
    parent = `Type${revampType(constructor.type)}`;
  }

  const id = revampId(constructor.id);
  const className = revampType(constructor.predicate);
  entries.push([id, className]);

  code += `
export class ${className} extends ${parent} {
  ${getPropertiesDeclr(constructor.params)}
    
  protected get [id]() {
    return ${id}
  }

  ${getParamDescGetter(constructor.params)}

  ${getParamsGetter(constructor.params)}

  ${getConstructor(constructor.params)}
}
`;
}

code += `
export const map = new Map<number, TLObjectConstructor>([
`;

for (const [id, className] of entries) {
  code += `[${id}, ${className}],\n`;
}

code += `// deno-lint-ignore no-explicit-any
] as const as any);
`;

Deno.writeTextFileSync("tl/2_constructors.ts", code);

code =
  `import { id, params, TLObject, Params, paramDesc, ParamDesc } from "./1_tl_object.ts";
import * as constructors from "./2_constructors.ts";

export abstract class Function extends TLObject {
}
`;

for (const function_ of functions) {
  const className = revampType(function_.func);
  const id = revampId(function_.id);

  code += `
export class ${className} extends Function {
  ${getPropertiesDeclr(function_.params, true)}

  protected get [id]() {
    return ${id}
  }

  ${getParamDescGetter(function_.params, true)}

  ${getParamsGetter(function_.params, true)}

  ${getConstructor(function_.params, true)}
}
  `;
}

Deno.writeTextFileSync("tl/3_functions.ts", code);

await new Deno.Command("deno", { args: ["fmt"] }).output();
