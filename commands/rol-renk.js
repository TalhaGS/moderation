const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}rol-renk\` **kullanmak için,** \`Rolleri Yönet\` **yetkisine sahip olman gerekiyor.**`));

  let role;
  if(!message.mentions.roles.first()) {
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e')
  .setTitle(`**Bir \`ROL ID\` veya \`ROL\` etiketlemeyi unuttunuz.**
  
  **Örnek: \`c!rol-renk 663408945716658xxx WHITE\`**`));
  role = message.guild.roles.cache.get(args[0]);
  if(!role) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e')
  .setTitle(`**Bir \`ROL ID\` veya \`ROL\` etiketlemeyi unuttunuz.**
  
  **Örnek: \`c!rol-renk 663408945716658xxx WHITE\`**`)); 
  } else {
  role = message.mentions.roles.first(); 
  }

  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e')
.setTitle(`**Bir \`Büyük Renk İsmi\` & RENK KOD: \`FFC0CB\` koymayı unuttunuz.**

**Örnek: \`c!rol-renk 663408945716658xxx PURPLE\`**`));

let renk = args[1].replace('mavi', '#6999ff')
.replace('yeşil', '#69ff80')
.replace('mor', '#b852d1')
.replace('pembe', '#ebaac8')
.replace('sarı', '#f5d569')
.replace('kırmızı', '#ff3030')
.replace('gri', '#bdbdbd')
.replace('beyaz', '#fffff0')

.replace('blue', '#6999ff')
.replace('green', '#69ff80')
.replace('purple', '#b852d1')
.replace('pink', '#ebaac8')
.replace('yellow', '#f5d569')
.replace('red', '#ff3030')
.replace('gray', '#bdbdbd')
.replace('white', '#fffff0')

role.setColor(renk);
return message.channel.send(`${message.author},`, new Discord.MessageEmbed().setColor(renk).setTitle('İşte bu kadar!').setDescription(`${role} **__Renk istediğiniz gibi değişti.__**

https://www.w3schools.com/colors/colors_groups.asp **Sayfasından __isim__ veya __renk__ kodlarına bakabilirsin!** 😇`))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'rol-renk'
};