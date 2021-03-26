const Emran = require('discord.js');

exports.run = async (client, message, args) => {
  	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

      if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Emran.MessageEmbed().setDescription('Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name == args.slice(1).join(' '));
if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanabilmek için "\`Rolleri Yönet\`" yetkisine sahip olmalısın.');
if (!member) return message.channel.send('Lütfen bir kullanıcıyı etiketleyin.');
if (!role) return message.channel.send(' Rol bulunamadı.');
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
  return message.channel.send(`Verilecek rol sizin rolünüzün üstünde bu yüzden rolü **veremiyorum!**`);
  }

  try{
await (member.roles.add(role.id))
 message.channel.send(new Emran.MessageEmbed().setDescription(`${member} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi!`)  .setFooter('Bu komutu kullanan yetkili ' + message.author.tag, message.author.avatarURL).setColor('#D2EE07'));
    
  } catch (e) {
    console.log(e);
    message.channel.send('Hata oluştu!');
  }
  //codare
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver'],
  permLevel: 2
};

exports.help = {
  name: 'rol-ver',
  description: 'Belirttiğiniz kullanıcıya belirttiğiniz rolü verir.',
  usage: 'rol-ver'
};