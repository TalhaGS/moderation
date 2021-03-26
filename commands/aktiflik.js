const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!')
.setDescription(`Aktiflik açmak için **${client.ayarlar.prefix}aktiflik aç** yazabilirsin.`))

if(args[0] === 'aç') {
message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!')
.setDescription('Aktiflik başarıyla açıldı.'));
data.set(`aktiflik.${message.guild.id}`, true);
};

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'aktiflik'
};