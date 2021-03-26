const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database/db.json');
const db = low(adapter)
const moment = require('moment');

exports.run = async (client, message, args) => {
    try {
        let argSec = args[0];
        let argB = args[1];
        let arg = args.slice(2).join(" ").toString().trim();
        let ac = ["aç", "oluştur", "tut", "kaydet", "save"];
        let kapa = ["kapat", "sil", "delete", "del", "remove"];
        let oren = ["bak", "look", "find", "ara", "nevar", "bul"];
        if (ac.includes(argSec)) {
            if (!arg) return send(new Discord.MessageEmbed().setDescription("Birşeyler gir :d"));
            if (db.get("not").find({author: message.author.id, not: arg}).value()) {
                send("zaten var :/")
            }
            db.get("not").push({author: message.author.id, not: arg, name: argB, zaman: `${moment(Date.now()).add("h", "3").locale("tr").format("DD:MM:YYYY | HH:MM:SS")}`}).write();
            send("kaydettim")
        }
        if (kapa.includes(argSec)) {
            if (!argB) return send("adını gir")
            db.get("not").remove({author: message.author.id, name: argB}).write()
            send("sildim")
        }
        if (oren.includes(argSec)) {
            if (!db.get("not").find({author: message.author.id, name: argB}).value()) return send("böle bişi yko")
            let veri = db.get("not").find({author: message.author.id, name: argB}).value()
            send(new Discord.MessageEmbed().addField("not:", `> ${veri.not}`, true).addField("zaman:", `> ${veri.zaman}`, true).setFooter(veri.name))
        }
    } catch (error) {
        message.channel.send(error, { code: "js" });
    };
    function send(yazi) {
        message.channel.send(yazi);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};
 
exports.help = {
    name: 'nore',
    description: 'nore',
    usage: 'nore  '
};