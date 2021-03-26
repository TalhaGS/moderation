const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Komut Mesaj Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}komut ekle  \` : ** Oluşturmak istediğin komut ismini ve cevabı girmen gerekir.**
:white_small_square: **=**\`${client.ayarlar.prefix}komut tablo\` : ** Oluşturulan komutları buradan görebilirsiniz.**            
:white_small_square: **=**\`${client.ayarlar.prefix}komut sil\` : ** Komut ismini girerek istediğiniz komutunuzu silebilirsiniz.**   

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
  name: "komut-mesaj-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'komut-mesaj-sistemi'
}; 