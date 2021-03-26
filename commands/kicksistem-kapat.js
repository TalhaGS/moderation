const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`kicklog_${message.guild.id}`)) return message.channel.send('Görünüşe Göre kick SistemiKapalı Görünüyor :).')
   

   message.reply('Kicklog Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`kicklog_${message.guild.id}`)
db.delete(`kickyetkilisi_${message.guild.id}`) 


}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 3
}

exports.help = {
 name: 'kicksistem-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};