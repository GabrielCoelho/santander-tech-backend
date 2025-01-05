const crypt = require("node:crypto");

const key = crypt.randomBytes(12).toString("ascii");

console.log(key);
