const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (bot, message, args) => {
message.delete();

const pinkcode = new Discord.MessageEmbed()

    .setColor("RED")
    .setDescription(
      `Sunucunun tacı şuanda , kurucu olan bu şerefsizde.<@${message.guild.owner.id}>`
    )
    .setFooter(`Komutu kullanan: ${message.author.tag}`);

return message.channel.send(pinkcode).then(msg => {
msg.delete(30000);
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu','tac','sahip'],
  permLevel: 2
};

exports.help = {
  name: "taç",
  description: "",
  usage: ""
};