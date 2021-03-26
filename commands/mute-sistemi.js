const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Mute Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}mute [@üyeEtiket]\` : ** Etiketlediğiniz Kişiyi Sunucuda Susturursunuz.**
:white_small_square: **=**\`${client.ayarlar.prefix}unmute [@üyeEtiket]\` :  ** Etiketlediğiniz Kişiyi Sunucuda Susturunu Kaldırırsınız.**
            \`\`\`            Kurulum Komutları \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}mute-yetkili [@rolEtiket]\` : **Muteliyecek yetkili rolünü etiketleyerek aktif yaparsınız**
:white_small_square: **=**\`${client.ayarlar.prefix}muterol [@rolEtiket]\` : **Mutelenecek Kullanıcının Alacağı Rolü etiketleyerek aktif yaparsınız**
:white_small_square: **=**\`${client.ayarlar.prefix}mute-log [#kanalEtiket]\` : **Mute bilgilerinin yazılacağı kanalı etiketleyiniz**

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
  name: "mute-sistemi",
  description: 'Elite Sistemler komutu',
  usage: 'mute-sistemi'
};