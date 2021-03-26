const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`!koruma\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

const erorrEmbed = new Discord.MessageEmbed().setTitle('Bir hata oldu!').setColor('#00001');
message.channel.send(erorrEmbed.setTitle('İşte bu kadar!')
.setDescription('Sayaç başarıyla kapatıldı.'));
data.delete(`sayaç.kanal.${message.guild.id}`, message.mentions.channels.first());
data.delete(`sayaç.sayı.${message.guild.id}`, args[1]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'sayaç-kapat'
};