const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["http://img7.mynet.com/galeri/2015/09/21/045010176/5527583-600x653.jpg", "http://www.yenimeram.com.tr/wp-content/uploads/2015/10/31/ekim-ayinin-en-komik-sosyal-medya-capsleri-28.jpg", "https://images.bursadabugun.com/galeriler/2016/04/06/30374-interneti-sallayan-cezmi-kalorifer-paylasimlari-57053310a240b.jpg", "https://cdn.bolgegundem.com/d/gallery/91_1.jpg", "http://cdn.cezmikalorifer.com/wp-content/uploads/2018/03/1.jpg", "https://images.bursadabugun.com/galeriler/2016/04/06/30374-interneti-sallayan-cezmi-kalorifer-paylasimlari-5705330839c5b.jpg","https://www.kamupersoneli.net/images/album/1_12.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNrbRDCfBf69ytCtU8nTX41UgPBU3FlHLsXzZfXNfnYBIoj5X0Q", "http://img7.mynet.com/galeri/2016/05/05/101708530/7061825-406x330.jpg", "https://images.bursadabugun.com/galeriler/2018/01/16/44965-efsane-haline-gelmis-komik-tweetler-5a5dece7689a6.jpg"," https://img7.mynet.com/galeri/2015/09/21/044943548/7655796-600x788.jpg", "http://img7.mynet.com/galeri/2015/04/29/041826296/10-528x512.jpg", "https://i.pinimg.com/originals/ea/cb/2c/eacb2ce0401a7ed6fd4a3b8b7fd30889.jpg", "https://www.sonhaberler.com/images/album/0x0-interneti-sallayan-komik-paylasimlar-1505753992468.png", "https://images.bursadabugun.com/galeriler/2016/04/06/30374-interneti-sallayan-cezmi-kalorifer-paylasimlari-5705330f03bb1.jpg","https://img-s1.onedio.com/id-572ba0d014f61d1e65820a86/rev-0/w-635/listing/f-jpg-webp/s-92b4d4689583456cb2da5bff0a738d43f3f71a78.webp","http://d.kamuhabermerkezi.com/gallery/13216_3.jpg", "https://d.neoldu.com/gallery/3427_27.jpg"];


    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("Komik Paylaşımlar:")
        .setColor("PURPLE")
        .setFooter(`${message.author.username} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['vine'],
    permLevel: 2
};

exports.help = {
    name: 'vine',
    description: 'Rastgele komik paylaşımlar atar.',
    usage: 'kp'
};