const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

const erkekroleID = await data.fetch(`erkek.${message.guild.id}`);
const yetkiliroleID = await data.fetch(`jail.yetkilirole.${message.guild.id}`);
const jailRoleID = await data.fetch(`jail.karantinarole.${message.guild.id}`);
const nn = new Discord.MessageEmbed().setThumbnail();
if(!args[0] || !message.mentions.members.first()) return message.channel.send(nn.setTitle('Bir hata oldu!').setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}));


let member = message.mentions.members.first();
let erkek = message.guild.roles.cache.get(erkekroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let jailled = message.guild.roles.cache.get(jailRoleID);
if(!erkek || !yetkili || jailled) return;

if(!message.member.roles.cache.has(yetkiliroleID)) return message.channel.send(nn.setDescription(`${yetkili} | Rolüne sahip olman gerekiyor.`));
member.roles.remove(jailRoleID);
member.roles.add(erkekroleID);
data.add(`say.erkek.${message.author.id}.${message.guild.id}`, 1);
message.channel.send(new Discord.MessageEmbed()

.setDescription(`${member} **Kullanıcısına ${erkek} rolü verilerek karantinadan çıkartıldı.**`)
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'k-erkek'
};