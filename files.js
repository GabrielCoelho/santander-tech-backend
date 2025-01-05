const path = require("node:path");
const fs = require("node:fs");

const filePath = path.join(process.cwd(), "text.txt");
console.log(filePath);
fs.readFile(filePath, {}, (err, data) => {
  if (err) {
    console.log(`Error trying to read file: ${filePath}`);
    return;
  }
  console.log(data.toString());
});
