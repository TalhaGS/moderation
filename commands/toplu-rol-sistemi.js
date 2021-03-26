const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Toplu Rol Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}toplu-rol-al\` : **Sunucunuzda ki üyelerin üzerinde olan ROL ID girerek hepsinden rolü kaldırır.**
:white_small_square: **=**\`${client.ayarlar.prefix}toplu-rol-ver\` : **Sunucunuzda ki üyelerinize bir ROL ID girerek hepsine o rolü verir.**
`)
.setImage("https://media.giphy.com/media/lH2Dbxmb7zYngOcMhu/giphy.gif")
.setThumbnail(message.author.avatarURL())
    message.channel.send(yardım)

  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "toplu-rol-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'toplu-rol-sistemi'
};