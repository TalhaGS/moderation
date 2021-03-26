const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Engel Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}küfür kısıt\` : **Sunucu İçerisinde Küfürü Engeller.**
:white_small_square: **=**\`${client.ayarlar.prefix}reklam kısıt\` : **Sunucu İçerisinde Reklamı Engeller.**
:white_small_square: **=**\`${client.ayarlar.prefix}caps kısıt\` : **Sunucu İçerisinde Büyük Harf Kullanımını Kısıtlar.**

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
  name: "engel-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'engel-sistemi'
};