module.exports = {
	name: 'talk',
	description: 'Repeats whatever you say',
    args: true,
    allGuilds: true,
    aliases: ['speak', 'repeat'],
	execute(message, args) {
        let str = "";
        for(let i = 0; i < args.length; i++){
            str += " " + args[i];
        }
        if(message.author.id == '315672211518128128'){
            message.channel.send(str);	
        // message.channel.send("/promote @Darth_Vader#4942");
        }
        else{
            message.channel.send(str);
        } 
        message.delete();
    },
};