const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./config.json')

  bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag} (${bot.user.id}) on ${bot.guilds.size} servers`);
   });

  bot.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
    const args = msg.content.slice(cfg.prefix.length).split(' ')
    const command = args.shift().toLowerCase();
    if(command === 'ping') {
      const then = Date.now();
      msg.channel.send('Pinging...').then(m => {
        m.edit(`Pong! It took ${Date.now() - then}ms to send that message\nHeartbeat ${bot.ping}ms`)
      })
    }
    if(command === 'help') {
      const embed = new Discord.RichEmbed(1) 
    .setTitle("Help Section")
    .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    .setColor(0xffff00)
    .setDescription("Here are all the commands **__`available`__** for the bot remember to use the **__`prefix`__** **__`!w`__** before executing the **__`command`__**.")
    .setFooter("", bot.user.avatarURL)
    .setImage()
    .setThumbnail(msg.author.displayAvatarURL)
    .setTimestamp()
    .setURL("")
    .addField("Social", "**`instagram`**  **`twitter`**  **`discord`**", true)
    .addField("Games", "**`non yet`**", true)
    .addField("Moderation", "**`ban`**  **`mute`**  **`tempmute`**",true)
    .addField("Random Commands", "**`wolf`**", true)
    .addField("General Info", "**`ping`** **`version`**")
    msg.channel.send({embed})
    console.log(`----Command Executed----\nArgs ${args}\nCommand: ${command}`)
    }
    if(command === 'version') {
      var version = ('`On progress`')
      msg.channel.send(version)
    }
  });
  
    bot.login(cfg.token)




  
        

        
    

  


