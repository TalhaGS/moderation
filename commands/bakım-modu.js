const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== '613447989972697098') return;

function gönderkardesim(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(content)
.setTimestamp()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await database.fetch(client.user.id);
if(durum == true) {

await database.delete(client.user.id);
return gönderkardesim('Bakım artık sona erdi. \n Gerekli Güncellemeler Yapılmıştır Bot Sistemi Tekrar Aktif.');

} else {

await database.set(client.user.id, true);
database.set(client.user.id+':)', { 
author: message.author,
time: Date.now() 
});

return gönderkardesim('Bakım modu açıldı.\n Gerekli Güncellemer Yapıldıktan Sonra Tekrar Aktif Hale Gelicektir Esenlikle Kalmanız Dileğiyle.');
};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu'
};