const Discord = require("discord.js");

exports.run = function(client, message) {
  const pinkcodeetiketlenenkisi = message.mentions.users.first();

  if (!pinkcodeetiketlenenkisi)
    return message.channel.send(
      "**Lütfen Yumruk Atmak İçin Birini Etiketleyin**"
    );

  const pinkcodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${pinkcodeetiketlenenkisi}` +
        `**${message.author.username}  Sana Yumruk Attı**`
    )
    .setImage(
      "https://media1.tenor.com/images/c7dece5cdd4cee237e232e0c5d955042/tenor.gif?itemid=4902914"
    );

  return message.channel.send(pinkcodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yumrukat"],
  permLevel: 0
};

exports.help = {
  name: "yumruk-at",
  description: " Yumruk Atarsınız işte ",
  usage: "yumruk-at"
};
