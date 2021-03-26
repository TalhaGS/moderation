const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Uyarı Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}uyarı ekle\` : **Kullanıcıya Uyarı Eklemenizi Sağlar.**
:white_small_square: **=**\`${client.ayarlar.prefix}uyarı sil\` : **Kullanıcının Uyarısını Silmenizi Sağlar.**
:white_small_square: **=**\`${client.ayarlar.prefix}uyarı bilgi\`:  **Kullanıcının Uyarı Bilgisini Sağlar.**

`)
.setImage("https://media.giphy.com/media/lH2Dbxmb7zYngOcMhu/giphy.gif")
.setThumbnail(message.author.avatarURL())
    message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "uyarı-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'uyarı-sistemi'
};