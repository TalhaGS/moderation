const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Sunucu Şablon Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}j4j-tema\` : ** Hazır join 4 join sunucu şablonu yollar.**
:white_small_square: **=**\`${client.ayarlar.prefix}public-tema\` : **Hazır karışık public sunucu şablonu yollar.**
:white_small_square: **=**\`${client.ayarlar.prefix}oyun-tema\` :  ** Hazır oyun sunucu şablonu yollar.**
:white_small_square: **=**\`${client.ayarlar.prefix}gif-tema\` :  ** Hazır gif share sunucu şablonu yollar.**
:white_small_square: **=**\`${client.ayarlar.prefix}sunucu-kur\` :  **Klasik oyun & sohbet sunucusu kurar.**


`)
.setImage("https://media.giphy.com/media/lH2Dbxmb7zYngOcMhu/giphy.gif")
.setThumbnail(message.author.avatarURL())
    message.channel.send(yardım)

  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sunucu-şablon-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'sunucu-şablon-sistemi'
};