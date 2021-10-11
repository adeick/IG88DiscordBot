module.exports = {
	name: 'id',
	description: 'Print ID of user, channel, guild, and all roles',
    args: false,
    allGuilds: true,
    aliases: ['getid'],
	execute(message, args) {
   if(message.author.id === '315672211518128128'){ //me
      let person = message.mentions.members.first();
        if(!(person)){
          person = message.member;
        }
      let allRoles = person.roles.cache.array();
      for(let i = 0; i < allRoles.length; i++){
        if(allRoles[i].name != '@everyone'){
            message.channel.send(allRoles[i].name + ": " + allRoles[i].id + "\n");
        }
      }
      message.channel.send(person.displayName + " ID#: " + person.id + "\n");
      message.channel.send(message.channel.name + " ID#: " + message.channel.id);
      message.channel.send(message.guild.name + " ID#: " + message.guild.id);

    }
  },
};