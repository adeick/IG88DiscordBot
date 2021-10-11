module.exports = {
	name: 'user-info',
    description: 'Display info about yourself.',
    args: false,
    allGuilds: true,
    aliases: ['userinfo', 'userhelp', 'user-help'],
    guildOnly: false,
    
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};