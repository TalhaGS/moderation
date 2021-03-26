const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Otorol Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}otorol @Verilecek Rol #Log Kanalı \` : **Sunucunuza Giriş Yapan Herkese Belirtilen Rolü Verir.**
:white_small_square: **=**\`${client.ayarlar.prefix}otorolkapat\` : **Önceden Ayarladığınız Otorol Komutunu Deaktif Eder.**

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
  name: "otorol-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'otorol-sistemi'
};  