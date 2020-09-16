module.exports = {
	name: 'drawwinner',
	description: 'Draws winners',
  args: true,
  allGuilds: false,
  guilds: ['Legion of Honor', 'Easy Coding'],
  aliases: ['draw', 'lottery'],
  guildOnly: false,

	execute(message, args) {

    let number = args.shift();
    number = Math.floor(number);
    if(number > 0){
      if(args.length <= number){
        message.channel.send("It doesn't look like we have any losers... so what exactly do you want me to do?");
        return;
      }
      let person = message.mentions.members.first();
      let winner = [];
      for(let i = 0; i < number; i++){
        let random = Math.floor(Math.random() * args.length);  
        winner.push(args.splice(random, 1)); // adds argument[random] to winner and removes it from argument
      }  
      if(winner.length == 1){
        message.channel.send("And the winner is.... **" + winner[0] + "**!");
      }
      else{
      let str = "";
      for(let i = 0; i < winner.length - 1; i++){
        str += "**" + winner[i] + "**, ";
      }
       message.channel.send("We got some winners! Congratulations to " + str + "and **" + winner[winner.length - 1] + "**!"); 
      }  
    }
    else{
      message.channel.send("Whoops, " + message.author + 
                           "!\nYou need to start with a number. For example, \n"
                           + "**/drawwinner 1 DarthVader UglyBarbarian IronMan**");
    }
  },
};