const Discord = require('discord.js')
const bot = new Discord.Client();

var PREFIX = ('>')

bot.on('ready', function() {
    bot.user.setStatus("Streaming");
    console.log("[+] Connecté")
});

bot.login('NjU4MTAxOTY2OTE5OTU4NTM4.Xf64OA.rVePiljHPehNrN_m6XX9BBe4iL4');

bot.on('message', message => {

    if(message.content === PREFIX + "help"){
        message.channel.send(
            {
                "embed": {
                    "color": 4751549,
                    "description": "✅ **Codé par Ae Zio-Tech#3660** \n\n\n __**Commandes :**__\n\n - **>help** : Afficher un message help \n\n - **>liens** : Afficher la liste des liens"
                }
            }
        )
    }

    if(message.content === PREFIX + "liens"){
        message.channel.send(
            {
                "embed": {
                    "color": 4751549,
                    "description": "**Liens utiles :**\n\n__Notre serveur :__ http://discord.gg/NTtBuau"
                }
            }
        );
    }
});
