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

    if(message.channel.name == "shenanigans"){
        let random = Math.floor(Math.random() * 1000); //0 - 999
        if(random == 0){
            message.channel.send(`Anyone remember the great llama/emu war?`);
        }
    }

    if(target.tag == message.client.user.tag && target != message.author){
        let random = Math.floor(Math.random() * 10); //0 - 9
        if(random == 0){
            message.react('👀');
        }
        if(random == 1){
            message.react('😐');
        }
        if(random == 2){
            message.react('💯');
        }
        if(random == 3){
            message.channel.send("Sorry, I'm still taking awhile to get over the yawning pelicans. *shudders*")
        }
    }

    if(args.includes("fuck") && message.channel.name != "shenanigans" && message.author.tag != "Darth_Vader#4942"){
        let random = Math.floor(Math.random() * 90); //0 - 5
        if(random == 0){
            message.channel.send(`I'm an impressionable young bot and like learning naughty words!`);
        }
        if(random == 1){
            message.channel.send(`Woah! ${message.author} just used a naughty word!`);
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