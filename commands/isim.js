const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}isim\` **kullanmak için,** \`Kullanıcı Adlarını Yönet\` **yetkisine sahip olman gerekiyor.**`));
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}))
if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Kullanıcı Adı koyarak dener misin?`)).then(a => a.delete({timeout: 10000}))
const datas = await data.fetch(`tagg.${message.guild.id}`);
let isim;
if(datas) isim = `${datas} ${args[1]}`; 
if(!datas) isim = `${args[1]}`; 
message.mentions.members.first().setNickname(isim);
return message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setColor('#000001').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setDescription(`${message.mentions.members.first()} **Başarıyla İsim Değiştirildi.**`+'\n\n```'+`${isim} Başarıyla İsim Değiştirildi.`+'```\n\n'))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'isim'
};