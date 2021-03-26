const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader")(client);

client.ayarlar = { 
"prefix": ".",
"sahip": "613447989972697098",
}

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  const data = require('quick.db');
  console.log('')
  console.log(`${files.length} kadar komut yüklenecek.`)
  files.forEach(async f => {
    let props = require(`./commands/${f}`);
    console.log(`Yüklendi: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log('')

});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === message.guild.owner.id) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g

client.login(ayarlar.token);
const moment = require('moment');
moment.locale('tr');
const { S_IFREG } = require("constants");
const data = require('quick.db');
const logs = require('discord-logs');
logs(client);


client.on('ready', async () => {
client.user.setStatus('online');
console.log(`${client.user.username} ismiyle bağlandım.`);
})

client.on('message', async message => {
if(message.channel.type !== 'text') return;
const datas = await data.fetch(`tag.${message.guild.id}`);
if(message.content.toLowerCase().toString().includes('tag')) {
if(datas) return message.channel.send('`'+datas+'`');
};
});

client.on('message', async message => {
if(message.channel.type !== 'text') return;
if(message.author.bot) return;
if(message.content.startsWith(client.ayarlar.prefix+'afk')) return;
if(message.mentions.members.first()) {
let mention = message.mentions.members.first();
const est = await data.fetch(`kullanıcı.${mention.id}.${message.guild.id}`);
if(est) {
message.channel.send(new Discord.MessageEmbed().setThumbnail(mention.user.avatarURL() ? mention.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setTitle('Tıkladığın Kullanıcı AFK').setDescription(` \n**• __Sebep;__ \`${est}\`**`));
}
}
const stat = await data.fetch(`name.${message.author.id}.${message.guild.id}`);
if(stat) {
message.member.setNickname(stat);
data.delete(`kullanıcı.${message.author.id}.${message.guild.id}`);
data.delete(`name.${message.author.id}.${message.guild.id}`);
message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} **Cihaz üzerine tekrardan hoş geldin!**`));
}
})

client.on('userUpdate', (oldUser, newUser) => {
client.guilds.cache.forEach(async guild => {
if(!guild.members.cache.get(newUser.id)) return;
const tagFetch = await data.fetch(`roltag.${guild.id}`);
const roleFetch = await data.fetch(`tag.role.${guild.id}`);
const logFetch = await data.fetch(`tag.log.${guild.id}`);
if(!tagFetch || !roleFetch || !logFetch) return;
let tag = tagFetch;
let role = guild.roles.cache.get(roleFetch);
let log = guild.channels.cach.eget(logFetch);
if(oldUser.username === newUser.username) return;
if(newUser.username.includes(tag) && !oldUser.username.includes(tag)) {
log.send(new Discord.MessageEmbed()
.setTitle('ELİTE - TAG Alındı.')
.setDescription(`${newUser} **Aramıza hoşgeldin. \`${tag}\` tagını aldığı için ${role} rolü verildi!**`));
guild.members.cache.get(newUser.id).roles.add(role.id);
}
if(oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
log.send(new Discord.MessageEmbed()
.setTitle('ELİTE - TAG Çıkarıldı.')
.setColor('#f1c335')
.setDescription(`${newUser} **Aramızdan ayrıldı. \`${tag}\` tagını çıkardığı için ${role} rolü alındı!**`));
guild.members.cache.get(newUser.id).roles.remove(role.id);
}
})
})


client.on('roleDelete', async role => {
  const sistem = await data.fetch(`korumalar.${role.guild.id}`);
  if(!sistem) return;
  
  let guild = role.guild;
  const entry = await guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_ROLES')) return member.roles.remove(s.id);
  })
  });
  
  client.on('roleUpdate', async (oldRole, newRole) => {
  const sistem = await data.fetch(`korumalar.${newRole.guild.id}`);
  if(!sistem) return;
  
  let guild = newRole.guild;
  const entry = await guild.fetchAuditLogs({ type: "ROLE_UPDATE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(oldRole.permissions.has('ADMINISTRATOR') && newRole.permissions.has('ADMINISTRATOR')) {
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('ADMINISTRATOR')) return member.roles.remove(s.id);
  })
  }
  });
  
  client.on('guildBanAdd', async member => {
  const sistem = await data.fetch(`korumalar.${member.guild.id}`);
  if(!sistem) return;
  
  let guild = member.guild;
  const entry = await guild.fetchAuditLogs({ type: "MEMBER_BAN_ADD" }).then(audit => audit.entries.first());
  let yetkili = entry.executor;
  
  if(yetkili.id == guild.owner.user.id) return;
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('BAN_MEMBERS')) return yetkili.roles.remove(s.id);
  })
  guild.members.unban(member.id);
  })
  
  client.on('channelDelete', async channel => {
  const sistem = await data.fetch(`korumalar.${channel.guild.id}`);
  if(!sistem) return;
  
  let guild = channel.guild;
  const entry = await guild.fetchAuditLogs({ type: "CHANNEL_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_CHANNELS')) return yetkili.roles.remove(s.id);
  })
  
  channel.clone({ name: channel.name });
  })
  
  client.on('emojiDelete', async emoji => {
  const sistem = await data.fetch(`korumalar.${emoji.guild.id}`);
  if(!sistem) return;
  
  let guild = emoji.guild;
  const entry = await guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_EMOJIS')) return yetkili.roles.remove(s.id);
  })
  
  guild.emojis.create(emoji.url, emoji.name);
  })

  client.on('guildMemberAdd', async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await data.fetch(`sayaç.kanal.${guild.id}`);
  if(!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await data.fetch(`sayaç.sayı.${guild.id}`);
  if(!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if(!sayı) return;
  let rol;
  const otoRole = await data.fetch(`oto.role.${guild.id}`);
  if(otoRole) {
  rol = `>>> **Sunucuya katılan kullanıcıya ${guild.roles.cache.get(otoRole)} rolü direk verildi!**`
  } else {
  rol = ''
  }
  if(guild.memberCount >= sayı) {
  data.delete(`sayaç.sayı.${guild.id}`);
  data.delete(`sayaç.kanal.${guild.id}`);
  channel.send(`> \`${user.tag}\` **az önce katıldı... yoksa katılmadı mı?**
  
  > **Toplam da** \`${guild.memberCount}\` **Kişi olduk! Sayaç tamamlandı! 🎉**
  
  ${rol}`)
  } else {
  channel.send(`> \`${user.tag}\` **az önce katıldı... yoksa katılmadı mı?**
  
  > **Toplam da** \`${guild.memberCount}\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı-Number(guild.memberCount)}\` **Kullanıcı kaldı!**
  
  ${rol}`)
  }
  
})

client.on('guildMemberRemove', async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await data.fetch(`sayaç.kanal.${guild.id}`);
  if(!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await data.fetch(`sayaç.sayı.${guild.id}`);
  if(!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if(!sayı) return;
  const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/766636339361480727/766636500891729930/giphy.gif');
  channel.send(`> \`${user.tag}\` **Gittiğini fark ettim Aaaaaa!**
  
  > **Toplam da** \`${guild.memberCount}\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı-Number(guild.memberCount)}\` **Kullanıcı kaldı!**`, attachment)
  
})


client.on('message', message => {
  if(message.channel.type !== 'text') return;
  let mesaj = message.content.toLocaleLowerCase();
if(mesaj.includes('cloudup')) message.react('🤫');
})

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
  const küfür = await data.fetch(`küfür.${message.guild.id}`);
  if(!küfür) return;
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "siker", "sik", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  const uyarılar = [
  'İt is Haram bRo! 🤥',
  'Az düzgün konuş günaha girme! 🤧',
  'Aaaa ayıp dostum! 🥴',
  'Vayy ahlaksız çocuk! 🙀',
  'Tövbesteyşin! 🤫'];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Küfür Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  })
  
  });
  
  client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await data.fetch(`reklam.${message.guild.id}`);
  if(!reklam) return;
  const blacklist = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
  const uyarılar = [
  'Kesinlikle yapma bunu okey? ♿',
  'Seni gidi çakal seni hıı! 🍌',
  'Ooo sanırım kendisini uyanık sandı? 🐍',
  'Şşş reklam kötü bir şey dostum! 🎭',
  'Haddini bil ya da çık git sunucudan! ⚰️'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(blacklist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Reklam Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  
  });

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.length >= 5) {

const caps = await data.fetch(`caps.${message.guild.id}`);
if(!caps) return;

let kontrol = message.content.toUpperCase()
if(message.content === kontrol) {

if(message.member.permissions.has('BAN_MEMBERS')) return;
if(message.mentions.users.first()) return;

return message.delete();

}}});


client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'sa') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} **ve aleyküm selam, Hoş Geldin!**`));
}});

client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemTagData = await data.fetch(`yasaklı.tag.${guild.id}`);
const systemRoleData = await data.fetch(`yasaklı.tag.role.${guild.id}`);
if(!systemRoleData || !systemTagData) return; 

const systemTag = String(systemTagData);
const systemRole = guild.roles.cache.get(systemRoleData);

let userUsername = user.username;
if(!userUsername.includes(systemTag)) return;
member.roles.cache.forEach(role => member.roles.remove(role.id));
await member.roles.add(systemRole.id);
member.send(new Discord.MessageEmbed()
.setTitle('Yasaklı TAG Kullanıyorsun!')
.setColor('#9c5cb2')
.setDescription(`> \`${guild.name}\` *Sunucusu için yasaklı tagdasınız.*`)
.addField('• Bilgilendirme', '**Sunucu içerisinde ki yetkililere ulaşarak yasaklı tag dan cıkmanızı sağlayabilirsiniz!'));
});

client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemTagData = await data.fetch(`ototag.${guild.id}`);
const systemChannelData = await data.fetch(`ototag.log.${guild.id}`);
const systemNameData = await data.fetch(`otoisim.${guild.id}`);
if(!systemNameData) return;

let systemChannel;
if(systemChannelData) systemChannel = guild.channels.cache.get(systemChannelData);

let systemTag;
if(systemTagData) systemTag = String(systemTagData);

let replacedName;
if(systemTag) {
replacedName = systemNameData.replace('+kullanıcı', user.username).replace('+tag', systemTag);
} else {
replacedName = systemNameData.replace('+kullanıcı', user.username);
};

member.setNickname(replacedName);
if(systemChannel) systemChannel.send(`${member} giriş yaptı. Değişiklik: ${user.username} -> ${replacedName}`);
});


client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemRoleData = await data.fetch(`fake.role.${guild.id}`);
if(!systemRoleData) return;

if(user.createdAt.getTime() <= 432000000) {
member.roles.set([]);
member.roles.set([systemRoleData]);
member.user.send(new Discord.MessageEmbed()
.setTitle('Yeni Hesap Kullanıyorsun!')
.setDescription(`>>> \`${guild.name}\` __Sunucusu için, Yeni hesap olduğunuzu tespit ettim. **5 Gün** içerisinde olan hesapları cezalıya atıyorum!__`)
.addField('• Bilgilendirme', '**Sunucu içerisinde ki yetkililere bildirmelisiniz.**')
.setColor('#351742'));
};
});

client.on('roleDelete', async role => {
    const data = await require('quick.db').fetch(`codework-mute.${role.guild.id}`);
    if(data && data === role.id) require('quick.db').delete(`codework-mute.${role.guild.id}`); 
    });

client.on('guildMemberAdd', async(member) => {
  let mute = db.fetch(`muterol_${member.guild.id}`);
  let mutelimi = db.fetch(`
  li_${member.guild.id + member.id}`)
  if (!mutelimi) return;
  if (mutelimi == "muteli") {
  member.roles.add(mute)
   member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
       const modlog = db.fetch(`modlogKK_${member.guild.id}`)
    if (!modlog) return;
     db.delete(`muteli_${member.guild.id + member.id}`)
        const embed = new Discord.MessageEmbed()
      .setThumbnail(member.avatarURL())
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Eylem:', '**Mute**')
      .addField('Kullanıcı:', `${member} (${member.id})`)
      .addField('Yetkili:', `${client.user} (${client.user.id})`)
      .addField('Süre', "Sonsuz")
      .addField('Sebep', "Muteliyken Sunucudan Çıkmak.")
     member.guild.channels.cache.get(modlog).send(embed);
  }
  })

client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.MessageEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("Elite", client.user.avatarURL());

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.cache.get(member.guild.id).channels.cache.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.roles.add(role)

});

//////////////////////////////////////////////////////////////////////////////////////////////
client.on("ready",() => {
console.log("Bot Hazır");
var randomMesajlar = ["Elite Bot" ,".yardım",]
setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);}, 3 * 10000);
client.user.setStatus("online");
})
////////////////////////////////////////////////////////////////////
client.on('guildMemberAdd', async member => {// can#0002

  const database = require('quick.db');
  if(member.user.bot) return;
  
  const kanal = member.guild.channels.cache.get(await database.fetch(`fake-channel.${member.guild.id}`) || 0);
  const zaman = await database.fetch(`fake-time.${member.guild.id}`);
  const rol = member.guild.roles.cache.get(await database.fetch(`fake-role.${member.guild.id}`) || 0);
  if(!kanal || !zaman || !rol) return;

  if(member.user.createdAt.getTime() < require('ms')(zaman)) {

    member.roles.add(rol.id);
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Fake Tetikleyici')
    .setDescription(`**${member.user.tag}** Fake sistemine takıldı!`);
    return kanal.send(embed);

  } else return;

});
/////////
client.on('ready', async () => {// Can°B#1308
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function destructMS(milli) {
    if (isNaN(milli) || milli < 0) {
      return null;
    }
  
    var d, h, m, s;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var yazi;
    if (d !== 0) yazi = `${d} gün`;
    if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
    if (h !== 0 && !yazi) yazi = `${h} saat`;
    if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
    if (m !== 0 && !yazi) yazi = `${m} dakika`;
    if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
    if (s !== 0 && !yazi) yazi = `${s} saniye`;
    if (yazi) return yazi;
    if (!yazi) return `1 saniye`;
  };
client.on('guilds.forEach' , async guild => {
const asd = await data.fetch(`..başladı.${guild.id}`);
if(asd) {
const interval = setInterval(async function(){
const kalanzaman = asd.süre - Date.now()   
const c = await guild.channels.get(asd.channel).fetchMessage(asd.message);
if (kalanzaman <= 0) {
clearInterval(interval)
await sleep(50)
const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}`)
.setTimestamp(asd.süre)
  .setTitle(`Çekiliş bitti!`)
c.edit(embed)
data.delete(`çk.${c.id}`)
data.delete(`ödü.${c.id}`)
data.delete(`ma.${c.id}`)
const asdd = await c.reactions.get('🎉').fetchUsers({limit: c.reactions.get('🎉').count})
guild.channels.get(asd.channel).send(`Tebrikler, ${asdd.random()}! Bizden ${asd.ödül} kazandın.
Ödülünü alabilmek için: ${asd.host1} kişisine ulaş.`)
data.delete(`..başladı.${guild.id}`);
} else {
const kalanzamanyazi = destructMS(kalanzaman)
const embed2 = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
embed2.setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}
Kalan zaman: ${kalanzamanyazi}

Katılmak için 🎉 tepkisine tıklayın.`)
c.edit(embed2)
                }
}, 5000)
}
})
})
/////////////////////////////
client.on('guildDelete', guild => {

let arda = new Discord.MessageEmbed()

.setColor("RED")
.setTitle("BOT ATILDI")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('824901528422055937').send(arda);

});


client.on('guildCreate', guild => {

let arda = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle("Bot Eklendi")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('824901528422055937').send(arda);

});

///////////////////////
client.on("message", msg => {
var dm = client.channels.cache.get("824901528422055937")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});
/////////////////////////////////
///Snipe
client.on('messageDelete', async message => {
  if(message.author.bot || !message.content) return;
  require('quick.db').push(message.guild.id, {
    author: message.author,
    authorTAG: message.author.tag,
    authorID: message.author.id,
    authorUSERNAME: message.author.username,
    authorDISCRIMINATOR: message.author.discriminator,
    messageID: message.id,
    messageCHANNEL: message.channel,
    messageCHANNELID: message.channel.id,
    messageCONTENT: message.content,
    messageCREATEDAT: message.createdAt
  });
});
/////////////////
//ses girme
client.on("ready", () => {
  client.channels.cache.get("824309264469196861").join();   
}) 
// ////////////////
//sahip geldi
client.on("guildMemberAdd", member => {
  if (member.id !== '544175919237955598') return;
  let channels = member.guild.channels.cache.filter(channel => channel.permissionsFor(client.user.id).has("SEND_MESSAGES") && channel.type === "text");
  if (!channels) return;
  let ch = channels.random();
  ch.send(`Açılın! Sahibim ${member.user.tag} sunucuya katıldı!`);
  member.send("Hoş geldin sahip!");
  return;
});
//////////////

