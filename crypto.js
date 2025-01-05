const crypt = require("node:crypto");

const key = crypt.randomBytes(12).toString("hex");

console.log(key);

const uuid = crypt.randomUUID();
console.log(uuid);

const { privateKey, publicKey } = crypt.generateKeyPairSync("rsa-pss", {
  modulusLength: 2048,
});

console.log(privateKey);
console.log(publicKey);
