const { symlink } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const summary = [];

rl.question("What's your name?", (answer) => {
  summary.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
   summary.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      summary.push(answer);
      rl.question("Which meal is your favourite dinner?", (answer) => {
       summary.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          summary.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            summary.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              summary.push(answer);
              console.log(`Here is a short user's summary by the name of ${summary[0]}, who's fav activity is ${summary[1]}, who likes listening to ${summary[2]}, fav dinner is ${summary[3]}, fav thing to eat is ${summary[4]}, fav sport is ${summary[5]}, and superpower is ${summary[6]}` );
              rl.close();
            });
          });
        });
      });
    });
  });
});








