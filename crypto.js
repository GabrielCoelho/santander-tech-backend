const crypt = require("node:crypto");

const key = crypt.randomBytes(12).toString("hex");

console.log(key);

const uuid = crypt.randomUUID();
console.log(uuid);
