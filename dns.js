const dns = require("node:dns");

const searchedUrl = "google.com";

//const ipv4 = dns.resolve4(searchedUrl, (err, addresses) => {
//  if (err) {
//    console.error("URL not found");
//    return;
//  }
//  console.log({ addresses });
//});

async function bootstrap() {
  console.time("Searching a URL");
  const addresses = await dns.promises.resolve4(searchedUrl);

  const nameServers = await dns.promises.resolveNs(searchedUrl);
  console.log(addresses, "", nameServers);
  console.timeEnd("Searching a URL");

  const ipNs = await dns.promises.resolve4(nameServers[1]);

  const resolver = new dns.Resolver();
  resolver.setServers(ipNs);

  console.time("Searching URL by specific DNS");
  resolver.resolve4(searchedUrl, (error, addressesWithResolver) => {
    if (error) {
      console.error("Couldn't resolve DNS");
      return;
    }
    console.timeEnd("Searching URL by specific DNS");
    console.log(addressesWithResolver);
  });
}

bootstrap();
