const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}caps kısıt / kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

if(!args[0]) return message.channel.send(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`caps kısıtmak istersen **${client.ayarlar.prefix}caps kısıt** yazmalısın.`))
if(args[0] === 'kısıt') {
data.set(`caps.${message.guild.id}`, true);
return message.channel.send(nn.setTitle(`İşte bu kadar!`).setDescription('Büyük harf kısıtlaması başarıyla açıldı.')).then(a => a.delete({timeout: 10000}));
} else if(args[0] === 'kapat') {
data.delete(`caps.${message.guild.id}`);
return message.channel.send(nn.setTitle('İşte bu kadar!').setDescription('Büyük harf kısıtlaması başarıyla kapatıldı.')).then(a => a.delete({timeout: 10000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'caps'
};