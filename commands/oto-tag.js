const Discord = require('discord.js');
const data = require('quick.db');

exports.run = (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}oto-tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
if(!args[0]) return message.channel.send(nn.setTitle('Bir hata oldu!').setDescription(`Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`).setImage('https://media.giphy.com/media/VFHqMbqAqzioOxzLhY/giphy.gif')).then(a => a.delete({timeout: 10000}));

data.set(`ototag.${message.guild.id}`, args[0]);
message.channel.send(nn.setTitle(`İşte bu kadar!`).setDescription(`Sunucuya giren kullanıcıya \`${args[0]}\` olarak verilecek.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'oto-tag'
};