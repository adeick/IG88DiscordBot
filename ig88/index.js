const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
//const Sequelize = require('sequelize');


//const timer = require('./timer');  //https://nodejs.org/api/modules.html#modules_module_exports

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const welcome = require('./welcome.js');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//const CatchPhrase = require('./models/CatchPhrase')(sequelize, Sequelize.DataTypes);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; //if message doesn't start with prefix or was sent by a bot

	const args = message.content.slice(prefix.length).trim().split(/ +/); //turn words into parameters/arguments
	const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName)
                    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
                
    if (!command) return; //command doesn't exist

	if(message.channel.type === 'text'){
		if(!command.allGuilds){
			if(!command.guilds.includes(message.guild.name)){
				return message.channel.send("This command is not enabled on this server!")
			} //command not enabled on this server
		}
	}
	else if(message.channel.type === 'dm'){
		if(command.guildOnly){
			return message.channel.send("You can't use this command in DMs!")
		}
	}
	
	
	try {
        if(command.args && !args){
            message.reply('you need to add an argument!');
        }
		command.execute(message, args);
	} 
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
		if(message.author.id == '315672211518128128'){ //me
            message.author.createDM().then(channel => {
				channel.send(error.toString()); //This doesn't work
			});
        }

        return message.author.send(error)
	}
});

client.on('guildMemberAdd', member => {
	welcome.execute(member);
});

client.login(token);

// timer.on('ring', () => {
// 	const message = timer.
// 	console.log('ring has rung');
// });
