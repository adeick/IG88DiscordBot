module.exports = {
	name: 'vader',
	description: 'Welcome to the dark side',
	args: false,
	allGuilds: true,
	aliases: ['darth', 'sith'],
	guildOnly: false,
	
	execute(message, args) {
		message.channel.send("Welcome to the dark side");
	},
};