const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const fbi = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://media.discordapp.net/attachments/781288209773756426/819963861003665478/giphy.gif")
  .setTitle("FBİ!")
  message.channel.send(fbi)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['fbi-gif',"fbi"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: "fbi",
  description: "FBi gif atar",
  usage:"!fbi"
}