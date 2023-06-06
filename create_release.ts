import $ from "https://deno.land/x/dax@0.31.1/mod.ts";

const v = Deno.args[0];

const content = Deno.readTextFileSync("constants.ts");

Deno.writeTextFileSync("constants.ts", content.replace(/(MTKruto )[0-9]+.[0-9]+.[0-9]+(";\n)/, `$1${v}$2`));

await $`git add constants.ts`;
await $`git commit -m "Change version constant"`;
await $`git tag ${v} -m ${v}`;
await $`git push`;
await $`git push origin ${v}`;
