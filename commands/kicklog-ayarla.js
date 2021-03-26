const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kicklogkanal = message.mentions.channels.first()
if (!kicklogkanal) return message.channel.send('Lütfen Banlog Kanalını Etiketlermisin?')
   
  db.set(`kicklog_${message.guild.id}`, kicklogkanal.id)

 
  message.channel.send(`KickLog Kanalı Başarıyla Ayarlandı; **${kicklogkanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kicklog-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kicklog-kanal <#kanal>'
};