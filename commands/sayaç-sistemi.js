const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Sayaç Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}sayaç [#kanalEtiket (Sayı Giriniz)]\` : **Sunucun için toplam bir rakam tut.**
:white_small_square: **=**\`${client.ayarlar.prefix}sayaç-kapat\` : **Kurulu olan sayaç sistemi kapatır.**

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
  name: "sayaç-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'sayaç-sistemi'
};