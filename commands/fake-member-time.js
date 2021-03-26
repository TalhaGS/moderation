const Discord = require('discord.js');
const database = require('quick.db');

exports.run = (client, message, args) => {// can#0002

  function embedCreate(color, title, description) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(description)
    return message.channel.send(embed);
  };

  if(!message.member.hasPermission('ADMINISTRATOR')) return embedCreate('RED', 'Başarısız!', 'Bu komutu kullanmak için yeterli yetkin bulunmuyor.');
  if(!args[0]) return embedCreate('RED', 'Başarısız!', 'Bir süre belirtmelisin.');
  
  if(isNaN(args[0].split('')[0])) return embedCreate('RED', 'Başarısız!', 'Süre belirtir iken sadece sayı kullanabilirsin.');
  if(!isNaN(args[0].split('')[1])) return embedCreate('RED', 'Başarısız!', 'Süre tanımı belirtir iken sadece harf kullanabilirsin.');

  if(!['d', 'w', 's', 'h', 'm', 'y'].includes(args[0].split('')[1])) return embedCreate('RED', 'Başarısız!', 'Yanlış bir tanım kullandın.\nKullanabileceğin tanımlar: '+['d', 'w', 's', 'h', 'm', 'y', 'i'].join(', '));
  if(args[0].split('')[0] === '0') {
    database.delete(`fake-time.${message.guild.id}`);
    return embedCreate('GREEN', 'Başarılı!', 'Fake süresi başarıyla kapatıldı.');
  } else {
    database.set(`fake-time.${message.guild.id}`, args[0]);
    return embedCreate('GREEN', 'Başarılı!', 'Fake süresi **'+args[0]+'** olarak ayarlandı.');
  };

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fake-üye-süresi'],
  permLevel: 2
};
 
exports.help = {
  name: 'fakeüyesüresi'
};