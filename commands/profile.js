const Discord = require('discord.js');
const data = require('quick.db');

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
  }
  
exports.run = async (client, message, args) => {
const sistem = await data.fetch(`aktiflik.${message.guild.id}`);
if(!sistem) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!')
.setDescription(`**Aktiflik sistemini açman gerekli.\nAçmak istersen:** \`${client.ayarlar.prefix}aktiflik aç\``));

if(!message.mentions.members.first()) {
const datas = await data.fetch(`say.kadın.${message.author.id}.${message.guild.id}`);
const dataa = await data.fetch(`say.erkek.${message.author.id}.${message.guild.id}`);

const embed = new Discord.MessageEmbed()
.setColor('#f1c335')
.setTitle(`${message.author.username} **\`-\`** Aktiflik Bilgi`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setImage('https://media.giphy.com/media/PkWuoeWTF6UvVMI0ta/giphy.gif?width=400&height=94')
.setDescription(`⭐ **T. Kayıt Sayısı:** \`${Number(dataa ? dataa : '0')+Number(datas ? datas : '0')}\`
**Erkek Sayısı:** \`${dataa ? dataa : 'veri yok.'}\`
**Kadın Sayısı:** \`${datas ? datas : 'veri yok.'}\``);
message.channel.send(`<@!${message.author.id}>,`, embed);
} else {
const datas = await data.fetch(`say.kadın.${message.mentions.members.first().id}.${message.guild.id}`);
const dataa = await data.fetch(`say.erkek.${message.mentions.members.first().id}.${message.guild.id}`);

const embed = new Discord.MessageEmbed()
.setColor('#f1c335')
.setTitle(`${message.mentions.members.first().user.username} **\`-\`** Aktiflik Bilgi`)
.setThumbnail(message.mentions.members.first().user.avatarURL() ? message.mentions.members.first().user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setImage('https://media.giphy.com/media/PkWuoeWTF6UvVMI0ta/giphy.gif?width=400&height=94')
.setDescription(`⭐ **T. Kayıt Sayısı:** \`${Number(dataa ? dataa : '0')+Number(datas ? datas : '0')}\`
**Erkek Sayısı:** \`${dataa ? dataa : 'veri yok.'}\`
**Kadın Sayısı:** \`${datas ? datas : 'veri yok.'}\``);
message.channel.send(`<@!${message.mentions.members.first().id}>,`, embed);
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'profile'
};