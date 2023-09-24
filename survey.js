const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (answer, callback) => {
  console.log(`Thank you for your answer: ${answer}`);
})
rl.question("What's an activity you like doing?", (answer, callback) => {
  console.log(`Thank you for your answer: ${answer}`);
})
rl.question("What do you listen to while doing that?", (answer, callback) => {
  console.log(`Thank you your answer: ${answer}`);
});
rl.question("Which meal is your favourite dinner?", (answer, callback) => {
  console.log(`Thank you for your answer: ${answer}`);
});
rl.question("What's your favourite thing to eat for that meal?", (answer, callback) => {
  console.log(`Thank you for your answer: ${answer}`);
});
rl.question("Which sport is your absolute favourite?", (answer, callback) => {
  console.log(`Thank you for your answer: ${answer}`);
});
rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer, callback) => {
  console.log(`Thank you for your answer: ${answer}`);
});

rl.close();

// The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function