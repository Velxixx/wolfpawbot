const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

let token = config.token
let version = ('On Progress')
let prefix = config.prefix
let args = message.content.substring(prefix.lenght).split(" "); 

 client.login(token);

 client.on("ready", () => {
    console.log("Bot Wolf Paws Online and Ready to Go!");
 
 });

   if(message.content.startsWith(prefix+'test')) {
       message.channel.send('Functioning')
   }
 


