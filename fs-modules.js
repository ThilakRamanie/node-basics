const fs = require("fs");

const a = fs.readFileSync("./samplesTxt/a.txt", "utf8");
const b = fs.readFileSync("./samplesTxt/b.txt", "utf8");
console.log(a);

fs.writeFileSync("./samplesTxt/a.txt", `appended : ${a},${b}`, { flag: "a" });
