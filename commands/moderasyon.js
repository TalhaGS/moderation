const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Elite Bot Hizmetleri`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}sa aç / kapat\` : ** (sa) Yazan Kullanıcılara Cevap Verir.**
:white_small_square: **=**\`${client.ayarlar.prefix}isim @Üye [Yeni İsim]\` : **Etiketlediğiniz Kişinin Kullanıcı Adını Değiştirir.**
:white_small_square: **=**\`${client.ayarlar.prefix}sil [0-100]\`:  **Belirtilen Sayıda Mesajı Temizler.**
:white_small_square: **=**\`${client.ayarlar.prefix}taç\`:  **Sunucu Sahibini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}rolver @üye @rol\`:  **Etiketlenen Üyeye Rol Tahsis Eder.**
:white_small_square: **=**\`${client.ayarlar.prefix}rolal @üye @rol\`:  **Tahsis Edilen Rolü Geri Alır.**
:white_small_square: **=**\`${client.ayarlar.prefix}duyuru\` :  **Kullanılan Kanalda Duyuru Yazmanızı Sağlar.**
:white_small_square: **=**\`${client.ayarlar.prefix}yavaşmod\` :  ** Bulunduğunuz Kanalda Süre Kısıtı Ekler**
:white_small_square: **=**\`${client.ayarlar.prefix}forceban\`: **Sunucuda Veyahut Olmayan Birkişiyi ID ile Banlamanıza Yarar.**
:white_small_square: **=**\`${client.ayarlar.prefix}sunucu-bilgi\`:  **Sunucu Bilgilerinizi Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}üyedurum\`:  **Üyelerin durumlarını görürsün.**
:white_small_square: **=**\`${client.ayarlar.prefix}çekiliş\`:  **Çekiliş başlatırsınız.**
:white_small_square: **=**\`${client.ayarlar.prefix}oylama\`:  **Oylama Başlatırsınız**
:white_small_square: **=**\`${client.ayarlar.prefix}snipe\`:  **Belirttiğiniz miktarda son silinen mesajları mesajın gönderilme tarihine göre içeriğiyle ve gönderenin ismiyle beraber sıralar..**

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
  name: "moderasyon",
  description: 'Elite Yardım komutu',
  usage: 'moderasyon'
};