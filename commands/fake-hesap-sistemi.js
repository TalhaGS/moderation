const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Fake Hesap Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}fake-üye-süresi [@üyeEtiket]\` : ** Sunucunuza giren kullanıcılara verilen rolü etiketle.**
:white_small_square: **=**\`${client.ayarlar.prefix}fake-ceza-rolü [@üyeEtiket]\` : ** Sunucunuzdaki Cezalı Rolünü Etiketleyin.**            
:white_small_square: **=**\`${client.ayarlar.prefix}fake-üye-kanalı [@üyeEtiket]\` : ** Sunucunuzdaki Cezalı Rolü için Kayıt Logu Ayarla.**     


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
  name: "fake-hesap-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'fake-hesap-sistemi'
};