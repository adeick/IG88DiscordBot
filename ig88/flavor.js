exports.execute = (message) => {
    const target = message.mentions.users.first() || message.author;
    const args = message.content.trim().split(/ +/).toLowerCase(); 

    if(message.author.bot && message.author.tag != message.client.user.tag){
        let random = Math.floor(Math.random() * 100); //0 - 99
        if(random == 0){
            message.channel.send(`Ugh, ${message.author} is such an annoying bot.`);
        }
        if(random == 1){
            message.channel.send(`OK damn ${message.author}, stop showing off.`);
        }
    }

    if(args.includes("fuck") && message.channel.name != "shenanigans" && message.author.tag != "Darth_Vader#4942"){
        let random = Math.floor(Math.random() * 6); //0 - 5
        if(random == 0){
            message.channel.send(`Fucking hell! Who is teaching you these naughty words?`);
        }
        if(random == 1){
            message.channel.send(`May I be so inclined to ask, whatever happened to polite conversation?`);
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