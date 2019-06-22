const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

let token = config.token
let version = ('On Progress')
let prefix = config.prefix

 client.login(token)

 client.on("ready", () => {
    console.log("Bot Wolf Paws Online and Ready to Go!");
 });

 client.on("message", (message) => {
    if(message.author.bot)
      return;

    if(message.content.toLowerCase() === 'test')
      message.channel.send('functional')
 });


