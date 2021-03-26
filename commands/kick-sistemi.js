const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Kick Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}kicklog-ayarla [#kanal]\` : ** Atılan Kullanıcı Bilgilerini Gönderdiği Kanal.**
:white_small_square: **=**\`${client.ayarlar.prefix}kickyetkilisi-ayarla [@rolEtiket]\` : ** Atma Yetkisine Sahip Kullanıcıyı Belitmenizi Sağlar.**                  
      \`\`\`    Komut Nasıl Kullanılır \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}kick [@ÜyeETİKET] [Sebep]\`

\`\`\`        [ Kapatma Komutları ]        \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}kicksistem-kapat\` : ** Kick Sistemini Kapatır.**   


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
  name: "kick-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'Kick-sistemi'
};