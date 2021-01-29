module.exports = {
  name: 'addpoll',
  description: 'Gives a person a role',
  args: true,
  allGuilds: true,
  aliases: ["poll", "survey", "react"],
  guildOnly: true,

	execute(message, args) {
        let str = "";
        let i;
        for(i = 0; i < args.length; i++){
            if(args[i].match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)){
                break;
            }
            else{
                str += " " + args[i];
            }
        }
//        if(message.author.id == '315672211518128128'){
        const botMessage = message.channel.send(str)
        .then(() => {
            for(i = i; i < args.length; i++){
                botMessage.react(args[i]);
            }
        })	
        .catch((error) => {
            console.error(`Error.\n`, error);
            message.reply(`hit a snare. Dunno what happened. Please contact Customer Support. \n ${error}`);
        })
        message.delete();
  },
};