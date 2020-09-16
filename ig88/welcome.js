exports.execute = (member) => {
    let welcomeChannel;
	let welcomeMessage;
        if(member.guild.id === '680873269477244967'){ //Shiar Imperial Guard
			member.roles.add('708750443110596629');  //Active Alliance
			welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'game-discussion');
			welcomeMessage = `Hello, ${member}. Welcome to the Sh'iar. Your journey awaits.`;
        }
        else if(member.guild.name === "Legion of Honor"){
            member.roles.add('572836677744197632'); //Jedi Padawan
			welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'the-lounge');
			welcomeMessage = `Looks like we've found a new recruit! Will everyone please welcome ${member}!`;
        }
        else if(member.guild.name === "Easy Coding"){
            member.roles.add('734679694590476338'); //Awesome
			welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'bot');
			welcomeMessage = `Well, hello ${member} and welcome back to the realm of mystery...`;
        }

        if(!welcomeChannel) return;

		welcomeChannel.send(welcomeMessage);
  };