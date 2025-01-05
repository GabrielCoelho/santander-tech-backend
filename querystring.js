const querystring = require("node:querystring");

const baseUrl = "http://siteviagem.com.br";

const uri = querystring.stringify({
  arrival: "Sao Paulo",
  season: "Autumn",
});

const url = `${baseUrl}/${uri}`;

console.log(url);

const parsedUri = querystring.parse(uri);

console.log(parsedUri);

const uri2 = querystring.escape("São Paulo");

console.log(uri2);

const unescaped = querystring.unescape(uri2);

console.log(unescaped);
