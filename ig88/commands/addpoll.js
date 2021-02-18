module.exports = {
  name: 'addpoll',
  description: 'Gives a person a role',
  args: true,
  allGuilds: true,
  aliases: ["poll", "survey", "react", "createpoll", "makepoll"],
  guildOnly: true,

	execute(message, args) {
        let str = "";
        let i;
        let emojis = []
        for(i = 0; i < args.length; i++){
            if(args[i].match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)){
                emojis.push(args[i]);
                str += "\n" + args[i];
            }
            else{
                str += " " + args[i];
            }
        }
        const sleep = milliseconds => { 
            return new Promise(resolve => setTimeout(resolve, milliseconds)); 
        }; 
//        if(message.author.id == '315672211518128128'){
        str == "" ? str = ">" : "";
        message.channel.send(str)
        .then((botMessage) => {
            for(i = 0; emojis.length > 0; i++){
                botMessage.react(emojis.shift());
                sleep(2000).then(() => { 
                    console.log("Waited") //wait in between posting each emoji
                }); 
            }
        })	
        .catch((error) => {
            console.error(`Error.\n`, error);
            message.reply(`hit a snare. Dunno what happened. Please contact Customer Support. \n ${error}`);
        })
        message.delete();
  },
};