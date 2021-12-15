const path = require("path");

const filePath = path.join("/contents", "subfolder", "error");
console.log(filePath);
console.log(path.basename(filePath));

console.log(path.resolve(__dirname, filePath));
