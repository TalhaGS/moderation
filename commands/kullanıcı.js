
const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Elite Bot Hizmetleri`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}afk\` : ** Afk Moda Geçiş Yaparsınız Çıkmak İçin Bir Kanala Yazmanız Gerek.**
:white_small_square: **=**\`${client.ayarlar.prefix}toplamkomut\` : ** Botta ne kadar komut oldunu gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}aile\`:  **Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?.**
:white_small_square: **=**\`${client.ayarlar.prefix}say\`:  **Botta ne kadar komut oldunu gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}avatar\` :  **Bir Başkasının Yada Kendi Avatarınıza bakarsınız.**
:white_small_square: **=**\`${client.ayarlar.prefix}yetkilerim\` :  ** Yetkilerini görürsün.**
:white_small_square: **=**\`${client.ayarlar.prefix}profil\`: **Profilini görürsün.**
:white_small_square: **=**\`${client.ayarlar.prefix}sunucuresmi\`:  **Sunucu resmini gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}ping\`:  **Üyelerin durumlarını görürsün.**
:white_small_square: **=**\`${client.ayarlar.prefix}id\`:  ** Birisinin id'sine Bakarsın.**
:white_small_square: **=**\`${client.ayarlar.prefix}davet\`:  ** Beni Sunucuna Ekle.**
:white_small_square: **=**\`${client.ayarlar.prefix}botbilgi\`:  ** Bot istatistiklerini görürsünüz.**
:white_small_square: **=**\`${client.ayarlar.prefix}bugbildir\`:  ** Yazdığınız bug'u yapımcılarıma bildirir.**
:white_small_square: **=**\`${client.ayarlar.prefix}istek-kod\`:  ** Yazdığınız istek kodu yapımcılarıma bildirir.**

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
  name: "kullanıcı",
  description: 'Xeon Yardım komutu',
  usage: 'kullanıcı'
};