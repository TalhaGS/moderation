const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}duyuru | ${client.ayarlar.prefix}yaz\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription(`${message.author} İçerik için yazı yazmayı unuttunuz.`));
message.delete();
return message.channel.send(new Discord.MessageEmbed().setDescription(args[0]));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yaz'],
  permLevel: 0
}

exports.help = {
  name: 'duyuru'
};