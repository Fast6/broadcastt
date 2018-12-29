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
client.on('message', message => {
var prefix = "$" // البريفكس
if(message.content.startsWith(prefix +"server")){ // الامر
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.setColor('#000000')
message.channel.sendEmbed(embed)
 
}
});
client.on('message',function(message) {
    let prefix = "$";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});
client.on("message", msg => {
    if(msg.content === 'كس') {
       if(msg.content === 'قحبه') {
        msg.delete();
    msg.reply("لا تسب").then(sb => {
        sb.delete(1600);
    })
    
    }
});


client.login(process.env.BOT_TOKEN);
