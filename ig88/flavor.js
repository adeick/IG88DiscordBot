exports.execute = (message) => {
    const target = message.mentions.users.first() || message.author;
    let args = message.content.toLowerCase().trim().split(/ +/); 

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
        // let str = message.content; 
        // message.channel.send(message.content);
        // message.channel.send(str);
        // message.channel.send(args[0] + "%%%" + args[1]);
        if(args[0].match(/ig/i)){ 
            args.shift();
        }
        if(args[0].match(/how/i)){ 
            if(args[1].match(/many/i) || args[1].match(/much/i)){
                let random = Math.floor(Math.random() * 3); //0 - 2
                let messages = ["A lot.",
                                "Not much",
                                "Just the right amount"];
                message.channel.send(messages[random]);
            }
            else {
                // How... (not How many/much)
                let random = Math.floor(Math.random() * 4); //0 - 3
                let messages = ["Could be better, honestly",
                                "Great!",
                                "Beats me, I get more confused the more I wonder about it.",
                                "Do you really want to know?"];
                message.channel.send(messages[random]);   
            }
        }
        else if(args[0].match(/why/i)){
            let random = Math.floor(Math.random() * 4); //0 - 3
            let messages = ["You're asking the wrong bot.",
                            "It's a long story, I don't want to get into it",
                            "I wonder this as well sometimes",
                            "I think you're asking the wrong question."];
            message.channel.send(messages[random]);
        }
        else if(args[0].match(/who/i)){
            let random = Math.floor(Math.random() * 4); //0 - 3
            let messages = ["Not me",
                            "@Darth_Vader#4942",
                            "Couldn't tell ya",
                            "¯\\_(ツ)_/¯"];
            message.channel.send(messages[random]);
        }
        else if(args[0].match(/where/i)){
            let random = Math.floor(Math.random() * 4); //0 - 3
            let messages = ["Right over there",
                            "Down by the bay",
                            "Home",
                            "¯\\_(ツ)_/¯"];
            message.channel.send(messages[random]);
        }
        else if(args[0].match(/when/i)){
            if(args[1].match(/will/i) || args[1].match(/would/i)){
                let random = Math.floor(Math.random() * 4); //0 - 3
                let messages = ["In a loooong loooong time",
                                "NEVER! STOP ASKING",
                                "Let's do tomorrow",
                                "Maybe a week?"];
                message.channel.send(messages[random]);
            }
            else{
                let random = Math.floor(Math.random() * 4); //0 - 3
                let messages = ["It was the summer of '05...",
                                "Yesterday",
                                "It was awhile back, I can't remember exactly",
                                "Like, maybe a week ago"];
                message.channel.send(messages[random]);
            }
        }
        else if(args[args.length-1].match(/?/)){
            //question
            let random = Math.floor(Math.random() * 5); //0 - 3
            let messages = ["I could be wrong, but I don't think so.",
                            "Let me check, but I'm pretty sure no.",
                            "Absolutely. ^^",
                            "Well yes, but actually no",
                            "Why are you asking me?"];
            message.channel.send(messages[random]);
        }
        else{
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