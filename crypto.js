const crypt = require("node:crypto");

const key = crypt.randomBytes(12).toString("base64");

console.log(key);
