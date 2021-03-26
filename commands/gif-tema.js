const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.gif`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__6__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 6000}));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden gönderdim public sunucunu gönderdim bakar mısın.**`));
data.set(`${message.author.id}.zaman.gif`, Date.now()+ms('6h'));
message.author.send(`> **1 adet public sunucusu kurmak için tema geldi.**

> Güle güle kullan 😇

https://discord.new/7VYCaVZm7YBE`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'public-tema'
};