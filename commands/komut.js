const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const errorEmbed = new Discord.MessageEmbed()
.setTitle('Bir hata oldu!')
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png');

if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}komut\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
if(!args[0]) return message.channel.send(errorEmbed.setDescription(`\`${client.ayarlar.prefix}komut ekle\`
\`${client.ayarlar.prefix}komut sil\`
\`${client.ayarlar.prefix}komut tablo\` **yazarak kullanabilirsin.**`));

if(args[0] === 'ekle') {
if(!args[1]) return message.channel.send(errorEmbed.setDescription(`${message.author} **Örnek kullanım:**
\`\`\`${client.ayarlar.prefix}komut ekle tag 🚀\`\`\``));

if(!args[2]) return message.channel.send(errorEmbed.setDescription(`${message.author} **Örnek kullanım:**
\`\`\`${client.ayarlar.prefix}komut ekle tag 🚀\`\`\``));

data.push(`chimped.${message.guild.id}`, { command: args[1], respond: args.slice(2).join(' ') });
message.channel.send(errorEmbed.setTitle('İşte bu kadar!')
.setDescription(`**Komut:** \`${args[1]}\`\n**Komut Cevabı:** \`${args.slice(2).join(' ')}\` **başarıyla kuruldu.**`)
.setThumbnail('')
.setFooter(`Sistemi aktif eden: ${message.author.username}`, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));
};

if(args[0] === 'tablo') {
const chimped = await data.fetch(`chimped.${message.guild.id}`);
if(!chimped) return message.channel.send(new Discord.MessageEmbed()
.setTitle(`Tablo'da herhangi bir komut yok!`));;
var i = 1;
message.channel.send(errorEmbed.setColor('#00001')
.setTitle(message.guild.name+' KOMUTLAR')
.setDescription(chimped.map(a => `${i++}. ${a.command}`).slice(0, 50).join('\n\n')));// 50den fazla göstermez hata vermemesi için slice yerini ayarlayablrsnz tşq bb
}; 

if(args[0] === 'sil') {
if(!args[1]) return message.channel.send(errorEmbed.setDescription(`${message.author} **Örnek kullanım:**
\`\`\`${client.ayarlar.prefix}komut sil [KOMUT]\`\`\``));
const chimped = await data.fetch(`chimped.${message.guild.id}`);
if(!chimped) return message.channel.send(new Discord.MessageEmbed()
.setTitle(`**\`${args[1]}\` Yazdığın komut tablo'da yok!

\`${client.ayarlar.prefix}komut\` tablo yazarak bakabilirsin.**`));
if(!chimped.find(a => a.command === args[1])) return message.channel.send(new Discord.MessageEmbed()
.setTitle(`**\`${args[1]}\` Yazdığın komut tablo'da yok!

\`${client.ayarlar.prefix}komut tablo\` yazarak bakabilirsin.**`));
if(chimped.length == 1) {
data.delete(`chimped.${message.guild.id}`);
} else {
let ex = [];
chimped.forEach(codare => {
if(codare.command === args[1]) return;
ex.push(codare);
data.set(`chimped.${message.guild.id}`, ex);
});
};
message.channel.send(errorEmbed.setTitle('İşte bu kadar!')
.setDescription(`● \`${args[1]}\` **Komutlarınız arasından kaldırıldı.**`)
.setThumbnail('')
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));
};


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'komut'
};