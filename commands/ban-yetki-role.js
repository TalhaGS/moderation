const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let banyetkilirol = message.mentions.roles.first()
  if (!banyetkilirol) return message.channel.send('Lütfen yetkili rolünü etiketlermisin?')
   
  db.set(`banyetkilisi_${message.guild.id}`, banyetkilirol.id)
  message.channel.send(`Yetkili Rolü Başarıyla Ayarlandı; **${banyetkilirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 2,
  kategori:"ban-sistem"
};

exports.help = {
 name: 'ban-yetki-role',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'ban-yetki-role <@rol>'
};