const Discord = require("discord.js");
const client = new Discord.Client();


client.login(config.BOT_TOKEN);

const prefix = "+";


client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;  
    const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();   
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`); 
  }
  if (command === "cat") {
message.reply(`https://media.giphy.com/media/ExN8bEghwc8Ced5Yss/giphy.gif`)
  }
  if (command === "cat2") {
    message.reply(`data:image/jpeg;base64,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`)
      }                      
      if (command === "trashcan") {
message.reply(`https://www.trashcanswarehouse.com/assets/images/product-photos/witt/wcd24cl.jpg`)
  }
  if (command === "trashcan2") {
    message.reply(`https://marinedebris.noaa.gov/sites/default/files/styles/max-width600/public/IMG_1187_0.JPG?itok=iFHb98S3`)
      }
      if (command === "help") {
        message.reply(`+ is prefix
        Do rock paper or scissors after prefix for fun
        cat, cat2, trashcan, trashcan2`)
          }
      
        if (command === "rock") {
        var rockpaperscissors = ["Rock", "Paper", "Scissors"];
        var rps = Math.floor(Math.random() * rockpaperscissors.length);
        message.channel.send(rockpaperscissors[rps]);
      }
      if (command === "paper") {
        var rockpaperscissors = ["Rock", "Paper", "Scissors"];
        var rps = Math.floor(Math.random() * rockpaperscissors.length);
        message.channel.send(rockpaperscissors[rps]);
      }
      if (command === "scissors") {
        var rockpaperscissors = ["Rock", "Paper", "Scissors"];
        var rps = Math.floor(Math.random() * rockpaperscissors.length);
        message.channel.send(rockpaperscissors[rps]);
      }
      
      
      client.on('message', message => {
        // If message is i win
        if (message.content === 'i win') {
          // Send no you dont back
          message.channel.send('no you dont');
        }
      });
      client.on('message', message => {
        // If message is i win
        if (message.content === 'ok sorry') {
          // Send no you dont back
          message.channel.send('its ok m8');
        }
      });
      client.on('message', message => {
        // If message is i win
        if (message.content === 'you are cringey') {
          // Send no you dont back
          message.channel.send('no u');
        }
      });
      
});                                      

