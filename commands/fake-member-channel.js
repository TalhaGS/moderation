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
  if(!args[0] && !database.fetch(`fake-channel.${message.guild.id}`)) return embedCreate('RED', 'Başarısız!', 'Bir kanal etiketlemeli, yada IDsini girmelisin.');
  if(args[0] && database.fetch(`fake-channel.${message.guild.id}`)) {
    database.delete(`fake-channel.${message.guild.id}`);
    return embedCreate('GREEN', 'Başarılı!', 'Fake üye kanalı sıfırlandı.');
  };

  let channel = message.guild.channels.cache.get(args[0]);
  if(!channel) {
    if(message.mentions.channels.first()) {
      channel = message.mentions.channels.first();
    };
  };

  if(!channel) return embedCreate('RED', 'Başarısız!', 'Belirttiğin kanalı bu sunucuda bulamıyorum.');

  database.set(`fake-channel.${message.guild.id}`, channel.id);
  return embedCreate('GREEN', 'Başarılı!', `Fake kanalı **#${channel.name}** olarak ayarlandı.`);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fake-üye-kanalı'],
  permLevel: 2
};
 
exports.help = {
  name: 'fakeüyekanalı'
};