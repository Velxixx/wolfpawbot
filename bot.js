const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

let token = config.token
let version = ('On Progress')

 client.login(token)

 client.on("ready", () => {
    console.log("Bot Wolf Paws Online and Ready to Go!");
 
 });

 client.on("message", (message) => {
    if(message.content.startsWith(prefix+"test")) {
        message.channel.send("functioning")

 }});


