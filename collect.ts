const lines = Deno.readTextFileSync("api.tl").split("\n");

let i = 0;
for (const line of lines) {
  if (!line.includes("pts:int") && !line.includes("pts_count:int") && /^update[a-zA-Z]/.test(line)) {
    console.log(line);
    // prompt();
    // console.clear();
    i++;
  }
}

console.log(i);
