const querystring = require("node:querystring");
const urlNode = require("node:url");

const baseUrl = "http://siteviagem.com.br";

const uri = querystring.stringify({
  arrival: "Sao Paulo",
  season: "Autumn",
});

const url = `${baseUrl}/${uri}`;

console.log(url);

const parsedUri = querystring.parse(uri);

console.log(parsedUri);
console.log(urlNode.parse(url));
