const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Elite Bot Hizmetleri`)
.setDescription(`

:white_small_square: **=**\`${client.ayarlar.prefix}bakım\` : ** Botu Bakıma Alır.**

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
  name: "geliştirici",
  description: 'Elite Yardım komutu',
  usage: 'geliştirici'
};