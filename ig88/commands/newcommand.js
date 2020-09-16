module.exports = {
	name: 'newcommand',
	description: 'Testing Command',
    args: false,
    allGuilds: true,
    aliases: ['test'],
	execute(message, args) {
        message.channel.send("Reporting for duty, sir!");
        message.delete();
    },
};