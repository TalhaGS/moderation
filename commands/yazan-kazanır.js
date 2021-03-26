const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const { stripIndents } = require("common-tags");
exports.run = (client, msg, args) => {

   
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}




  var xs = 0
    const slots = [1,2,3,4,5,6,7,8,9,"q","w","e","r","t","y","u","ı","o","p","ğ","ü","a","s","d","f","g","h","j","k","l","ş","i","z","x","c","v","b","n","m","ö","ç","!","?","Q","W","E","R","T","Y","U","I","O","P","Ğ","Ü","A","S","D","F","G","H","H","J","K","L","Ş","İ","Z","X","C","V","B","N","N","M","Ö","Ç",];
  var item  = slots[Math.floor(Math.random() * slots.length)];
  var item2 = slots[Math.floor(Math.random() * slots.length)];
  var item3 = slots[Math.floor(Math.random() * slots.length)];
  var item4 = slots[Math.floor(Math.random() * slots.length)];
  var item5 = slots[Math.floor(Math.random() * slots.length)];
  msg.channel.send("Biraz sonra yazılacak kelimeyi ilk yazan kazanır")
  .then((msg)=>{
  sleep(1000)
  msg.channel.send("Kelime 3 saniye sonra gelecek hazırlanın!")
    .then((msg)=>{
  sleep(3000)
  msg.channel.send("Kelime ; "+item+item2+item3+item4+item5)
   
  })
    })

  var kelime = item+item2+item3+item4+item5

  if(xs==0){
  client.on("message",msg =>{
    if(xs==0){
     
 
    if(msg.content==kelime){
      if(xs==0){
      msg.channel.send("Tebrikler "+msg.author+" ilk yazan kişi")
      }
      xs=xs+1
    }
    else{
     
    }
     }
  });
  }


  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazan-kazanır"],
  permLevel: 0
};

var use = "yazan-kazanır"

exports.help = {
  name: use,
  description: use,
  usage: use
};