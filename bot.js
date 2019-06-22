const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

let token = config.token

 client.login(token)

 client.on("ready", () => {
    console.log("Bot Wolf Paws Online and Ready to Go!");
 });

 let ping = client.ping
 let prefix = config.prefix
 let version = ('On Progress')

 client.on("message", (message) => {
    if(message.author.bot)
      return;

    if(message.content.toLowerCase() === prefix+'test')
      message.channel.send('Functional!');

 var args = message.content.substring(prefix.length).slit(" ")
 
    switch(args[0]){
      case  prefix+'ping':
        message.reply(ping)
        break;
      case prefix+'social':
       if(args[1] === 'instagram'){
        message.channel.send('https://www.instagram.com/lonewolfdankmemes/')
        break;
      }
      case prefix+'info' : 
       if(args[1] === 'version'){(
        message.channel.send("Version "+version))
        break;
        }
      case prefix+"help":
        var embed = new Discord.RichEmbed()
          .addField("Wolf Command", "Awesome Wolf Pictures")
        message.channel.sendEmbed(embed);
        break;
      }
    });
        

        
    

  


