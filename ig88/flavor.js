exports.execute = (message) => {
    const target = message.mentions.users.first() || message.author;
    const args = message.content.toLowerCase().trim().split(/ +/); 

    if(message.author.bot && message.author.tag != message.client.user.tag){
        let random = Math.floor(Math.random() * 100); //0 - 99
        if(random == 0){
            message.channel.send(`Ugh, ${message.author} is such an annoying bot.`);
        }
        if(random == 1){
            message.channel.send(`Damn, ${message.author}. Talk about a bot with a few screws loose. 😐`);
        }
    }

    if(args.includes("fuck") && message.channel.name != "shenanigans" && message.author.tag != "Darth_Vader#4942"){
        let random = Math.floor(Math.random() * 6); //0 - 5
        if(random == 0){
            message.channel.send(`If I was a moderation bot, I would tell you to watch your language. Luckily, I'm not. Carry on. :)`);
        }
        if(random == 1){
            message.channel.send(`Woah! ${message.author} just used a naught word!`);
        }
    }

    if(message.author.tag == "ricochetzghost#3463" && message.channel.name == "shenanigans"){
        let random = Math.floor(Math.random() * 100); //0 - 99
        if(random == 0){
            message.channel.send(`Ya know, ${message.author}, I was really looking forward to that Gambit storytime. 😐`);
        }
    }

    if(message.author.tag == "Ezzy#0565" && target.tag == "Lola#7815" && message.channel.name == "shenanigans"){
        message.react('👀');
    }
  };