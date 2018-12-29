const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', msg => {
  if (msg.content === 'رابط') {
          msg.react("💜")
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
   .setTitle(`تفضل يا قلبي 🌹`)
   .setDescription(` 
https://discord.gg/wK3zjxC **| Superme BotsList**
https://discord.gg/DtdzSHu **| Superme Shop.**
https://discord.gg/QAsfMqQ **| Superme Codes.**
`)
.setFooter(`${msg.guild.name}™`)



msg.channel.sendEmbed(embed);      
  }   
 });
client.login(process.env.BOT_TOKEN);
