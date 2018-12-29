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
        msg.delete();
    msg.reply("اخلاقك يا حلو").then(sb => {
        sb.delete(1600);
    })
    
    }
});
client.on("message", msg => {
    if(msg.content === 'قحبه') {
        msg.delete();
    msg.reply("اخلاقك يا حلو").then(sb => {
        sb.delete(1600);
    })
    
    }
})
client.on("message", msg => {
    if(msg.content === 'زب') {
        msg.delete();
    msg.reply("اخلاقك يا حلو").then(sb => {
        sb.delete(1600);
    })
    
    }
})
client.on("message", msg => {
    if(msg.content === 'شرموطه') {
        msg.delete();
    msg.reply("اخلاقك يا حلو").then(sb => {
        sb.delete(1600);
    })
    
    }
})
client.on("message", msg => {
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;

let p = "!";
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);

if(cmd === `${p}ban`){
    let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!bUser) return msg.channel.send("Can't find user!");
let breason = args.join(" ").slice(22);
if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("No can do pal!");
if(bUser.hasPermission("BAN_MEMBERS")) return msg.channel.send("That person can't be banned");

let banembed = new Discord.RichEmbed()
.setDescription("~ban~")
.setColor("BLACK")
.addField("banned User", `${bUser} with ID: ${bUser.id}`)
.addField("banned By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
.addField("banned In", msg.channel)
.addField("Time", msg.createdAt)
.addField("Reason", breason)

let banChannel = msg.guild.channels.find("name","cmd");
if(!banChannel) return msg.channel.send("Can't find `اسم الروم` channel.");

msg.guild.member(bUser).ban(breason);
banChannel.send(banembed)
    return;
}


});
client.on('message', m3a4x => {
  if (m3a4x.content.startsWith('$mute')) {
if (!m3a4x.member.hasPermission("MOVE_MEMBERS")) return m3a4x.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = m3a4x.mentions.users.first()
let mas = m3a4x.author
if(!men) return m3a4x.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
m3a4x.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("#36393e")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${m3a4x.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(m3a4x.guild.name, m3a4x.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${m3a4x.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
m3a4x.channel.sendEmbed(Embed11).then(m3a4x => {m3a4x.delete(20000)})
    }
})
 
 
client.on('message', m3a4x => {
  if (m3a4x.content.startsWith('$unmute')) {
if (!m3a4x.member.hasPermission("MOVE_MEMBERS")) return m3a4x.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = m3a4x.mentions.users.first()
 let mas = m3a4x.author
 if(!men) return m3a4x.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
 m3a4x.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("#36393e")
.setDescription(`**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${m3a4x.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(m3a4x.guild.name, m3a4x.guild.iconURL)
.setDescription(`          <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${m3a4x.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
m3a4x.channel.sendEmbed(Embed11).then(m3a4x => {m3a4x.delete(20000)})
    }
})

client.login(process.env.BOT_TOKEN);
