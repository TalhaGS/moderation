const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Yasaklı Tag Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-tag [🚀] \` : **Yasaklı tagınızı yada simgenizi koyarak aktif edersiniz.**
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-tag-role [@rolEtiket]\` : **Yasaklı tag da bulunan kullanıcıya rolü verir.**
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-yeni-üye-role [@rolEtiket]\` :  ** Sunucunuza katılan yeni üye rolünü ayarlayınız.**
      \`\`\`    Sıfırlama Komutları İçin \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-tag-role-sil\` : ** Ayarlamış olduğunuz yasaklı tag rolünü siler.**
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-tag-kapat\` : ** Ayarlı bulunan yasaklı tagınızı kapatır.**
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
  name: "yasak-tag-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'yasak-tag-sistemi'
};