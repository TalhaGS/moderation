const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();

exports.run = async (client, message, args) => {
 if(!message.member.roles.cache.has(db.fetch(`banyetkilisi_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
   }
  
   const codework = await db.fetch(`banlog_${message.guild.id}`)
   if(codework == null) return message.channel.send('Lütfen BanLog Kanalı Ayarla!');
  
  let member = message.member
  let guild = message.guild
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let banlogkanalı = await db.fetch(`banlog_${member.guild.id}`);
  let banlog = member.guild.channels.cache.find(name => banlogkanalı);
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.');
  if (reason.length < 1) return message.reply('Ban sebebini yazmalısın.');

  if (!message.guild.member(user).bannable) return message.reply('Yetkili Kişileri Banlayamam.');
  message.guild.members.ban(user);
  message.channel.send(`${message.author} Ban İşlemi Başarılı!`)

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Yapılan İşlem:','Ban')
    .addField('Banlanan:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Banlayan:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Ban Sebebi', reason);
  message.guild.channels.cache.get(db.fetch(`banlog_${message.guild.id}`)).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
}