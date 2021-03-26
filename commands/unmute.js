const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
//Bots For List Yapımı!    
const muterol =  db.fetch(`muterol.${message.guild.id}`)
const mutekanal = db.fetch(`mutelog.${message.guild.id}`)
const muteyetkili = db.fetch(`muteyetkili.${message.guild.id}`)
const log = message.guild.channels.cache.get(mutekanal)
const üye = message.mentions.members.first()
if(!muterol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Mute Rolü Ayarlanmamış!`)
)
if(!mutekanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Mute Logu Ayarlanmamış!`)
)
if(!muteyetkili) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Mute Yetkilisi Ayarlanmamış`)
)
if(!message.member.hasPermission("MANAGE_ROLES") && !message.member.roles.cache.has(muteyetkili)) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`***Rolleri Yönet* Yetkisi Yok veya *<@&${muteyetkili}>* Rolü Yok**`)
)
if(!üye) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Üyeyi Belirt`)
)
if(message.member.roles.highest.position <= üye.roles.highest.position) return message.channel.send(`${üye} senden üstün veya aynı rolde!`).then(x => x.delete({ timeout: 5000 }));
üye.roles.remove(muterol).catch(error => {
    message.channel.send('**Mute Rolünü Veremiyorum Alabilmem İçin Yetkimi Mute Rolünün Üstüne Çekin**');
    return
})

message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**${üye} Adlı Kişi Başarıyla Mutesi Açıldı**`)
)

log.send(
    new Discord.MessageEmbed()
    .setDescription(`**${üye} Adlı Kişi ${message.author} Adlı Kişi Tarafından Mutesi Açıldı!**`)
).catch(error => {
    message.channel.send(`** ${mutelog} Bu Kanala Mesaj Atamıyorum!**`);
    return
})

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
}

exports.help = {
    name: "unmute"
}
