const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2F2ivyan7.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudup-oyular.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudupp-oyunn.gif']
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username+' oyunlar', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setThumbnail(images.random())
.setColor('#cbfd54').setDescription(`1️⃣ \`${client.ayarlar.prefix}kaçcm\`

2️⃣ \`${client.ayarlar.prefix}karıştır\`

3️⃣ \`${client.ayarlar.prefix}öp\`

4️⃣ \`${client.ayarlar.prefix}kare\`

5️⃣ \`${client.ayarlar.prefix}tokat\`

6️⃣ \`${client.ayarlar.prefix}soda\`

7️⃣ \`${client.ayarlar.prefix}aşk\`

8️⃣ \`${client.ayarlar.prefix}fal\`
`).addField('❕ Yavaş kullanım!', '**Oyun komutlarının bazıların da yavaş kullanım vardır.**'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oyunlar'
};