const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setDescription(`>>> ${client.user} kullanırken lütfen \`@${client.user.username}\` rolünü en yukarıda tutunuz!

**Rollü Davet İçin:** [Buraya tıkla](https://discord.com/api/oauth2/authorize?client_id=823061133865779202&permissions=8&scope=bot)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\`\`\`

**Rolsüz Davet İçin:** [Buraya tıkla](https://discord.com/api/oauth2/authorize?client_id=823061133865779202&permissions=0&scope=bot)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0\`\`\`

**Destek Sunucumuz İçin:** [Buraya tıkla](https://discord.gg/mUUE6dY9Eg)
\`\`\`discord.gg/Codanames Elite\`\`\``));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'davet'
};