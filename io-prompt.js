const rl = require("readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptPromise = {
  question: (question) =>
    new Promise((resolve, reject) => {
      try {
        prompt.question(question, (answer) => resolve(answer));
      } catch (error) {
        reject(error);
      }
    }),
  close: () => prompt.close(),
};

async function askUser() {
  const number = await promptPromise.question("Insert a number: ");
  console.log(`Doubling your number: ${parseInt(number) * 2}`);
  const color = await promptPromise.question("What is your favorite color: ");
  console.log(`Your favorite color is: ${color}`);
  promptPromise.close();
}

askUser();
//prompt.question("Input a number: ", (answer) => {
//  console.log(`Doubling the number: ${parseInt(answer) * 2}`);
//  prompt.question("Input a color name: ", (answer) => {
//    console.log(`Your favorite color is: ${answer}`);
//    prompt.close();
//  });
//});
