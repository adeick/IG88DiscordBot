module.exports = {
	name: 'addrole',
	description: 'Gives a person a role',
  args: false,
  allGuilds: false,
  guilds: ['Easy Coding'],
  aliases: [],
  guildOnly: true,

	execute(message, args) {
        let member = message.mentions.members.first(); //Finds the first mentioned user
        
        if(!member || member.guild.name === "Easy Coding"){
            message.channel.send(`Found ${member}`);
            member.roles.add('734679694590476338'); //Awesome
            message.channel.send("Added an awesome role!");
        }
        else{
            message.channel.send('Could not find the person.');
        }
    
  },
};