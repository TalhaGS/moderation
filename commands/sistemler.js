const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Sistemler Menüsü`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}mute-sistemi\` : **Sunucunuzda Susturma Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}uyarı-sistemi\` : **Sunucunuzda Uyarı Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}ban-sistemi\`:  **Sunucunuzda Yasaklama Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}kick-sistemi\`:  **Sunucunuzda Atılma Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}fake-hesap-sistemi\`:  **Sunucunuzda Yan Hesap Koruma Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}jail-sistemi\` :  **Sunucunuzda Jail Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}kayıt-sistemi\` :  **Sunucunuzda Kayıt Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}tag-rol-sistemi\`: **Sunucunuzda Tag Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}yasak-tag-sistem\` :  **Sunucunuzda Yasaklı Tag Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}toplu-rol-sistemi\` :  **Sunucunuzda Toplu Rol Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}sayaç-sistemi\` :  **Sunucunuzda Sayaç Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}engel-sistemi\` :  **Sunucunuzda Küfür&Reklam Engel Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}otorol-sistemi\` :  **Sunucunuzda Otorol Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}sunucu-şablon-sistemi\` :  **Sunucunuzda Tema Sistemini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}komut-mesaj-sistemi\` : **Sunucunuzda Bot Komuta Karşılık Vermesini Sağlar.**
:white_small_square: **=**\`${client.ayarlar.prefix}oto-isim-sistemi\` : **Sunucunuzda Bot Komuta Karşılık Vermesini Sağlar.**
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
  name: "sistemler",
  description: 'Elite Sistemler komutu',
  usage: 'sistemler'
};