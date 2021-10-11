const { prefix } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Provides a list of command or info about a single command',
    args: false,
    allGuilds: true,
    aliases: ['commands'],
    guildOnly: false,

    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if(!args.length) {
            //show all commands

            // var embed = new Discord.RichEmbed()
            // .setColor('RANDOM')
            // .setTitle('Command List')
            // commands.each(command => embed.addField('**' + command.name + '**', ''));
            // message.author.send(embed);

            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            return message.author.send(data, {split: true})
            .then(() => {
                if(message.channel.type === 'dm') return;
                message.reply('I\'ve sent you a DM with commands!');
            })
            .catch(error => {
                console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                message.reply('looks like you\'ve disabled DMs. Do you want to talk or not?');
            });
        }
        else{
            //info on one command
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if(!command){
                return message.reply('I couldn\'t find a command with that name :/');
            }

            data.push(`**Name:** ${command.name}`);

            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if(message.channel.type === 'text'){
                if (command.allGuilds){
                    data.push(`Available in all servers`);
                } 
                else{
                    if(command.guilds.includes(message.guild.name)){
                        data.push('Command enabled in this server.')
                    }
                    else{
                        data.push('Command disabled in this server.')
                    }
                }
            }
            

            message.channel.send(data, { split: true});
        }
    }
}