const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Seviye Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}oto-tag 🚀\` : ** Sunucunuza giren kullanıcıların isminin başına koyar.**
:white_small_square: **=**\`${client.ayarlar.prefix}oto-tag-log [#kanalEtiket]\` : **Sunucuya katılan kullanıcıların bilgilerini yollar.**
:white_small_square: **=**\`${client.ayarlar.prefix}oto-isim [🚀 İsim | Yaş]\` :  ** Otomatik isim koyman için işe yarar.**
      \`\`\`    Kapatma Komutları İçin \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}oto-tag-kapat\` : ** Ayarlı olan tagınızı kapatır.**
:white_small_square: **=**\`${client.ayarlar.prefix}oto-tag-log-kapat\` : ** Ayarlı olan kanalı kapatır.**
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-yeni-üye-role-sil\` : ** Ayarlı olan yeni üye rolünü kapatır.**
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
  name: "oto-isim-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'oto-isim-sistemi'
};