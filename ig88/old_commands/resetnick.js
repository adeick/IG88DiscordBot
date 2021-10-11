module.exports = {
	name: 'resetnick',
	description: 'Changes my name back to IG-88',
  args: false,
  allGuilds: true,
  aliases: [],
  guildOnly: true,

	execute(message, args) {
    //
    let bot = message.guild.members.cache.find(user => user.id === '571091206470107146');
    bot.setNickname("IG-88, the 'Assassin' Droid");
    message.channel.send("It will be done");
  },
};