// deno-lint-ignore-file no-explicit-any
import { revampId, revampType } from "./utilities.ts";

const schema = Deno.readTextFileSync("tl/schema.json");

const { constructors } = JSON.parse(schema);
let code = `// deno-lint-ignore-file no-explicit-any

const id = Symbol("id");

const params = Symbol("params");

export abstract class TLObject {  
  protected abstract get [id](): number | symbol;
  protected abstract get [params](): Params | symbol;
}

type Params = [string | number | null | bigint | boolean | Uint8Array | Array<any> | TLObject, string][];

export abstract class Constructor extends TLObject {
}
`;

const skipIds = ["-1132882121", "-1720552011", "1072550713", "481674261"];

const typeMap: Record<string, string> = {
  "int": "number",
  "long": "bigint",
  "bool": "boolean",
  "double": "number",
  "true": "true",
  "string": "string",
  "bytes": "Uint8Array",
};
function convertType(type: string) {
  if (type.startsWith("flags")) {
    type = type.split("?").slice(-1)[0];
  }
  let isVector = false;
  if (type.startsWith("Vector")) {
    isVector = true;
    type = type.split("<")[1].split(">")[0];
  }
  const mapping = typeMap[type.toLowerCase()];
  if (mapping != undefined) {
    type = mapping;
  } else {
    type = `Type${revampType(type)}`;
  }
  if (isVector) {
    return `Array<${type}>`;
  } else {
    return type;
  }
}

function getParamsGetter(params: any[]) {
  let code = `protected get [params](): Params {
    return [\n`;
  for (const param of params) {
    if (param.name.startsWith("flags")) {
      continue;
    }
    const isFlag = param.type.startsWith("flags");
    code += `[this.${param.name} ${
      isFlag ? "?? null" : ""
    }, "${param.type}"],\n`;
  }
  code += "]\n}\n";
  return code;
}

function getPropertiesDeclr(params: any[]) {
  let code = ``;

  for (const param of params) {
    if (param.name.startsWith("flags")) {
      continue;
    }
    const isFlag = param.type.startsWith("flags");
    const type = convertType(param.type);
    code += `${param.name}${isFlag ? "?:" : ":"} ${type}\n`;
  }

  return code.trim();
}

function getConstructor(params: any[]) {
  let code = `constructor(`;

  if (params.length > 0) {
    code += `params: {`;
    for (const param of params) {
      if (param.name.startsWith("flags")) {
        continue;
      }
      const isFlag = param.type.startsWith("flags");
      const type = convertType(param.type);
      code += `${param.name}${isFlag ? "?:" : ":"} ${type}, `;
    }
    code += "}";
  }
  code += ") {\n";
  code += "super()\n";
  for (const param of params) {
    if (param.name.startsWith("flags")) {
      continue;
    }
    code += `this.${param.name} = params.${param.name};\n`;
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

for (const constructor of constructors) {
  if (skipIds.includes(constructor.id)) {
    continue;
  }

  const isAbstract =
    constructor.predicate.toLowerCase() == constructor.type.toLowerCase();

  if (isAbstract) {
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

  code += `
export class ${className} extends ${parent} {
  ${getPropertiesDeclr(constructor.params)}
    
  protected get [id]() {
    return ${id}
  }

  ${getParamsGetter(constructor.params)}

  ${getConstructor(constructor.params)}
}
`;
}

Deno.writeTextFileSync("generated.ts", code);

await new Deno.Command("deno", { args: ["fmt"] }).output();
