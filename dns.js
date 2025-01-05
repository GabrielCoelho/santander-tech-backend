const dns = require("node:dns");

const searchedUrl = "google.com";

const ipv4 = dns.resolve4(searchedUrl, (err, addresses) => {
  if (err) {
    console.error("URL not found");
    return;
  }
  console.log({ addresses });
});
