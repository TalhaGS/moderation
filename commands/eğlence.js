const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Elit Bot Hizmetleri`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}zar\` : **Zar atmaya ne dersin benim,rekorum 5 gecebilirmisin?**
:white_small_square: **=**\`${client.ayarlar.prefix}kasaaç\`:  **CsGo kasası açmaya ne dersin?*
:white_small_square: **=**\`${client.ayarlar.prefix}emojiyazı\`:  **Emojili yazı yazmaya ne dersin?.**
:white_small_square: **=**\`${client.ayarlar.prefix}espiri\` :  **Sana güzel bi espiri yapmama ne dersin?.**
:white_small_square: **=**\`${client.ayarlar.prefix}sor\` :  **Bana soru sormaya ne dersin.**
:white_small_square: **=**\`${client.ayarlar.prefix}ara112\`: **İhtiyacın oldunda kullan ;)**
:white_small_square: **=**\`${client.ayarlar.prefix}vine\`:  **Raskele komik paylaşımları görmeye ne dersin..!**
:white_small_square: **=**\`${client.ayarlar.prefix}adamasmaca\`:  **Birlikte bir oyun oynamaya ne dersin**
:white_small_square: **=**\`${client.ayarlar.prefix}balıktut\`:  **Birlikte balık tutmaya ne dersin :D?.**
:white_small_square: **=**\`${client.ayarlar.prefix}tersyazı\`:  **Bir Yazıyı Bot Ters Yazar.**
:white_small_square: **=**\`${client.ayarlar.prefix}fbi\`:  **Bot FBi Gif Atar.**
:white_small_square: **=**\`${client.ayarlar.prefix}token\`:  **Tokenimi Öğrenmek İstemezmisin?**
:white_small_square: **=**\`${client.ayarlar.prefix}duello\`:  **Düello Atarsınwasted.**
:white_small_square: **=**\`${client.ayarlar.prefix}yumrukat\`:  **istediğin kişinin gafasına yumruk atar.**
:white_small_square: **=**\`${client.ayarlar.prefix}yazan-kazanır\`:  **Yazan karanır oyununu oynadıktan sonra tekrar oynamaya ne dersin?**
:white_small_square: **=**\`${client.ayarlar.prefix}kapaklaf\`:  **Birine güzel bi söz sözlemeye ne dersin?.**
:white_small_square: **=**\`${client.ayarlar.prefix}kralol\`:  **Kral olmaya ne dersin?.**
:white_small_square: **=**\`${client.ayarlar.prefix}kaçcm\`:  **Benimki 68 Cm Ya Senin ?.**
:white_small_square: **=**\`${client.ayarlar.prefix}aşkölçer\`:  **Bot Etiketlediğiniz Kişinin Kendi Çapında Sevgisini Ölçer.**
:white_small_square: **=**\`${client.ayarlar.prefix}fal\`:  **Fala İnanma Falsızda Kalma.**
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
  name: "eğlence",
  description: 'Elite Yardım komutu',
  usage: 'eğlence'
};