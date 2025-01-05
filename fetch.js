//const response = fetch("http://localhost:5173").then((response) =>
//  response.text().then((data) => console.log(data)),
//);

async function makeRequest() {
  const response = await fetch("http://localhost:5173/api/sports", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: "karate",
    }),
  });
  const data = await response.text();
  console.log(data);
}

makeRequest();
