const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
const rol = message.mentions.roles.first()
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(
    new Discord.MessageEmbed()//Bots For List Yapımı!    
    .setDescription(`***Sunucuyu Yönet* Yetkiniz Yok!**`)
)
if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Rolü Etiketlemediniz`)
)
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**${rol} Adlı Rol Mute Rolü Olarak Ayarlandı**`)
)
db.set(`muterol.${message.guild.id}`, `${rol.id}`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
}

exports.help = {
    name: "muterol"
}