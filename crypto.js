const crypt = require("node:crypto");

const key = crypt.randomBytes(12);

console.log(key);
