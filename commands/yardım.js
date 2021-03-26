const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Elite Bot Hizmetleri`)
.setDescription(`

:white_small_square: **=**\`${client.ayarlar.prefix}moderasyon\`:  **Moderasyon Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}sistemler\`:  **Sunucu Kontol Sistemlerini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}kullanıcı\` :  **Kullanıcı Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}eğlence\`: **Eğlence Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}yapımcım\`:  **Yapımcımın Kim Olduğunu Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}geliştirici\`:  **Geliştirici Seçenekleri Gösterir.**    

`)
.setImage("https://media.giphy.com/media/lH2Dbxmb7zYngOcMhu/giphy.gif")
.setThumbnail(message.author.avatarURL())
    message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 2
};

exports.help = {
  name: "yardım",
  description: 'Elite Yardım komutu',
  usage: 'yardım'
};