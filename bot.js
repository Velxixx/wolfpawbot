const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./config.json');
const ytdl = require('ytdl-core')

//BOT ON / CONSOLE

 bot.on("ready", async () => {
    console.log(`Logged in as ${bot.user.tag} (${bot.user.id}) on ${bot.guilds.size} servers`);

//STATUS

    let statuses =[ 'w!help || On Progress...',
                   `on ${bot.guilds.size} servers`,
                   `with ${bot.users.size} wolves`
                  ]
    setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      bot.user.setActivity(status, {type: 'STREAMING'}), bot.user.setStatus("dnd")
    }, 15000)
  
   });
   
//BOT MESSAGE / MSG

bot.on('message', async msg => {
    if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
    const args = msg.content.slice(cfg.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping') {
      const then = Date.now();
      msg.channel.send('Pinging...').then(m => {
       m.edit(`Pong! It took ${Date.now() - then}ms to send that message\nHeartbeat ${bot.ping}ms`)
      })
    }

 //HELP

    if(command === 'help') {
      const embed = new Discord.RichEmbed() 
    .setTitle("Help Section")
    .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    .setColor(0xffff00)
    .setDescription("Here are all the commands **__`available`__** for the bot remember to use the **__`prefix`__** **__`w!`__** before executing the **__`command`__**. The ones that are crossed out are not fully implemented yet. ")
    .setFooter(`Requested by ${msg.author.username}`, bot.user.avatarURL)
    .setImage()
    .setThumbnail(msg.author.displayAvatarURL)
    .setTimestamp()
    .setURL("")
    .addField("👋  Social", "||**`instagram`**||  ||**`twitter`**||  ||**`discord`**||", true)
    .addField("🎮  Games", "||**`non yet`**||", true)
    .addField("🔨  Moderation", "**`clear`** `ban` ||**`mute`**||  ||**`tempmute`**||",true)
    .addField("🔀    Random Commands", "||**`wolf`**|| **`spam`**", true)
    .addField("📒  General Info", "**`ping`** **`version`**", true)
    .addField("🎶   Music", "||**`play`**|| ||**`skip`**|| ||**`queue`**|| stop", true)
    msg.channel.send({embed})
     }
    if(command === 'version') {
      var version = ('`On progress`')
      msg.channel.send(version)
    }

 //SPAM

    let words = (['Kermit Has A French Frie'])

 if (command === 'spam') {
 setInterval(function() {
 let word_spam = words[Math.floor(Math.random() * words.length)];
 msg.channel.send(word_spam)
 });

 }

 //CLEAR

 if(command === "clear") {
  if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply("`❌ You don't have the requirements to use this command.`")
  if(!args[0]) return msg.channel.send("`Error! 📌 Please specify the amount of messages to delete`");
  msg.channel.bulkDelete(args[0]).then(() => {
    msg.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(3000));
  });
 }

 //BAN

 if(command === 'ban') {
 const user = msg.mentions.users.first(); 
  if (!user) {
    try {
    
    if(!msg.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('`❌ Invalid User ID`');
         user = msg.guild.members.get(args.slice(0, 1).join(' '));
         user = user.user;
    }catch (error){
        return msg.reply('` 🙋‍ Please specify the person you want to ban!`')
    }
  }
  
  const banReason = args.slice(1).join(' ');
  
    if(user === msg.author) return msg.channel.send("`Really? You can't ban yourself`");
    if(!banReason) return msg.reply('`❌ You forgot to enter a reason for this ban!`');
    if(!msg.guild.member(user).bannable) return msg.reply("`📥 You can't ban a wolf that is superior to you`");
  
  await msg.guild.ban(user)
    
  const banConfirmationEmbed = new Discord.RichEmbed()
      .setColor(0x00ff00)
      .setDescription(`✅ ${user.tag}Has been successfully banned`);
    msg.channel.send({
    embed: banConfirmationEmbed
  
  });
  
  const modlogChannelID = '594640767197380612';
    if (modlogChannelID.length !== 0) {
    if (!bot.channels.get(modlogChannelID )) return undefined;
  const banConfirmationEmbedModlog = new Discord.RichEmbed()
      .setAuthor(`Banned by **${msg.author.username}#${msg.author.discriminator}**`, msg.author.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .setColor(0x00ff00)
      .setTimestamp()
      .setDescription(`**Action**: Ban
        **User**: ${user.username}#${user.discriminator} (${user.id})
        **Reason**: ${banReason}`);
      bot.channels.get(modlogChannelID).send({
          embed: banConfirmationEmbedModlog
  });
  }
 }
 if(command === 'avatar') {
   const embed2 = new Discord.RichEmbed()
   .setThumbnail(msg.author.displayAvatarURL)
   .setColor(0x8b0304)
   msg.channel.send({
     embed: embed2
   })
 }
  if(command === 'shrek') {
    const embedshrek = new Discord.RichEmbed()
    .setTitle("Shrek")
    .setImage("https://66.media.tumblr.com/09c099fa301417ae14e6a12b1a53057f/tumblr_ndquhcyNb81qlviqpo1_500.gif")
    .setDescription([
    "\nSomebody once told me the world is gonna owe me",
    "I ain't the sharpest tool in the shed",
    "She was looking kind of dumb with her finger and her thumb",
    "In the shape of an L on her forehead",
    
    "\nWell the years start coming and they don't stop coming",
    "Fed to the rules and I hit the ground running",
    "Didn't make sense not to live for fun",
    "Your brain gets smart but your head gets dumb",
    "So much to do so much to see",
    "So what's wrong with taking the back streets",
    "You'll never know if you don't go",
    "You'll never shine if you don't glow",
    
    "\nHey now you're an All Star get your game on, go play",
    "Hey now you're a Rock Star get the show on get paid",
    "And all that glitters is gold",
    "Only shooting stars break the mold",
    
    "\nIt's a cool place and they say it gets colder",
    "You're bundled up now, wait 'till you get older",
    "But the meteor men beg to differ",
    "Judging by the hole in the satellite picture",
    
    "\nThe ice we skate is getting pretty thin",
    "The waters getting warm so you might as well swim",
    "My world's on fire how about yours",
    "That's the way I like it and I never get bored",
    
    "\nHey now you're an All Star get your game on, go play",
    "Hey now you're a Rock Star get the show on get paid",
    "And all that glitters is gold",
    "Only shooting stars break the mold",
    
    "\nHey now you're an All Star get your game on, go play",
    "Hey now you're a Rock Star get the show on get paid",
    "And all that glitters is gold",
    "Only shooting stars",
    
   "\nSomebody once asked, could I spare some change for gas",
    "â€œI need to get myself away from this place",
    "I said yep what a concept",
    "I could use a little fuel myself",
    "And we could all use a little change.",
    
    "\nWell the years start coming and they don't stop coming",
    "Fed to the rules and I hit the ground running",
    "Didn't make sense not to live for fun",
    "Your brain gets smart but your head gets dumb",
    "So much to do so much to see",
    "So what's wrong with taking the back streets",
    "You'll never know if you don't go",
    "You'll never shine if you don't glow",
    
    "\nHey now you're an All Star get your game on, go play",
    "Hey now you're a Rock Star get the show on get paid", ])

    msg.channel.send({
      embed: embedshrek
    });

}});
  
  
    bot.login(cfg.token)