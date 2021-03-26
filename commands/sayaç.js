const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`!koruma\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

const erorrEmbed = new Discord.MessageEmbed().setTitle('Bir hata oldu!');
if(!args[0]) return message.channel.send(erorrEmbed.setDescription(`Bir kanal etiketlemeyi unuttunuz.

**Örnek:**
\`\`\`${client.ayarlar.prefix}sayaç #kanaletiket 1000\`\`\``));

if(!message.mentions.channels.first()) return message.channel.send(erorrEmbed.setDescription(`Bir kanal etiketlemeyi unuttunuz.

**Örnek:**
\`\`\`${client.ayarlar.prefix}sayaç #kanaletiket 1000\`\`\``));

if(!args[1]) return message.channel.send(erorrEmbed.setDescription(`Bir sayı girmeyi unuttunuz.

**Örnek:**
\`\`\`${client.ayarlar.prefix}sayaç #kanaletiket 1000\`\`\``));
message.channel.send(erorrEmbed.setTitle('İşte bu kadar!')
.setDescription(`Sayaç kontrol olarak kullanılacak: ${message.mentions.channels.first()} kanalı olarak ayarlandı.`));
data.set(`sayaç.kanal.${message.guild.id}`, message.mentions.channels.first().id);
data.set(`sayaç.sayı.${message.guild.id}`, args[1]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'sayaç'
};