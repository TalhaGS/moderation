const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(client.user.username)
.setThumbnail('https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fe4d668d1400a3a4541f861cb383074e6.gif')
.addField('• Uptime', '```'+moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")+'```', true)
.addField('• Server', '```'+client.guilds.cache.size+'```', true)
.addField('• Users', '```'+client.users.cache.filter(a => !a.bot).size+'```', true)
.addField('• Ping', '```'+client.ws.ping.toFixed(0)+'```', true)
.addField('• Server Shards', '```0```', true));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}

exports.help = {
  name: 'up'
};