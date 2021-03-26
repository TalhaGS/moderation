const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Tag-rol Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}rol-tag [🚀] \` : **Lütfen Başlamadan Önce Tag Ayarlayınız.**
:white_small_square: **=**\`${client.ayarlar.prefix}tag-role [@rolEtiket]\` : ** Sunucunuz da tag alan üyeye verilecek rolü etiketle**
:white_small_square: **=**\`${client.ayarlar.prefix}tag-log [#kanalEtiket]\` :  ** Tag alan & çıkaran üyeleri kanala bilgi olarak gönderir.**
:white_small_square: **=**\`${client.ayarlar.prefix}ban-yetki-role [@üyeEtiket]\` :  ** Yasaklama Yetkilisini Ayarlama**
      \`\`\`    Sıfırlama Komutları İçin \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}tagrole-sil\` : ** Tagın ayarlı olan rolü siler**
:white_small_square: **=**\`${client.ayarlar.prefix}tag-log-kapat [@rolEtiket]\` : ** Ayarladığınız tag kanalı sıfırlar.**
      \`\`\`    Sistem Nasıl Çalışır? \`\`\`
 \`Buradaki herşeyi kurduktan sonra, Tag alan veya cıkartanın sunucunuz da herhangi bir kanala msj yazması durumunda alıp vermektedir. \`

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
  name: "tag-rol-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'tag-rol-sistemi'
};