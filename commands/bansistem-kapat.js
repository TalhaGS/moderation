const Discord = require('discord.js');
const db = require('quick.db') 
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`banlog_${message.guild.id}`)) return message.channel.send('Görünüşe Göre Ban Sistemi Zaten Kapalı Görünüyor :).')
   

   message.reply('Ban Sistemi Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`banlog_${message.guild.id}`)
db.delete(`banyetkilisi_${message.guild.id}`) 

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 2
}

exports.help = {
 name: 'bansistem-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};