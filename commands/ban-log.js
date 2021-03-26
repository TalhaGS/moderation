const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let banlogkanal = message.mentions.channels.first()
if (!banlogkanal) return message.channel.send('Lütfen Banlog Kanalını Etiketlermisin?')
   
  db.set(`banlog_${message.guild.id}`, banlogkanal.id)

 
  message.channel.send(`Banlog Kanalı Başarıyla Ayarlandı; **${banlogkanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 2,
kategori:"ban-sistem"
};

exports.help = {
 name: 'ban-log',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'ban-log <#kanal>'
};