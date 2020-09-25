// const Users = require('../dbObjects');
// const Discord = require('discord.js');

// //const catchphrase = require('../catchphrase.sqlite');
// const catchphrase = new Discord.Collection();
// const client = new Discord.Client();


// client.once('ready', async () => {
// 	const stored = await Users.findAll();
//     stored.forEach(s => catchphrase.set(s.user_id, s));
// });

// Reflect.defineProperty(catchphrase, 'setSlogan', {
// 	/* eslint-disable-next-line func-name-matching */
// 	value: async function setSlogan(id, phrase) {//async
//         const user = await catchphrase.get(id);
//         if(user){
//             user.slogan = phrase;
//             return user.save();
//         }
//         const newUser = await Users.create({ user_id: id, slogan: phrase});
//         catchphrase.set(id, newUser);
// 		return newUser;
// 	},
// });

// Reflect.defineProperty(catchphrase, 'getSlogan', {
// 	/* eslint-disable-next-line func-name-matching */
// 	value: function getSlogan(id) {
//         const user = catchphrase.get(id);
//         return user ? user.slogan : "gibberish that I was unable to understand! (My master is working on it)";
// 	},
// });

module.exports = {
	name: 'setcatchphrase',
	description: 'Sets a slogan for each user',
    args: true,
    allGuilds: true,
    aliases: ['setslogan', 'setsaying', 'setquote', 'setmotto'],
	execute(message, args) {
        let str = args[0];
        for(let i = 1; i < args.length; i++){
            str += " " + args[i];
        }
        message.client.catchphrase.set(message.author.id, str);
        return message.channel.send(`The wise words of ${message.author}...  
        *${message.client.catchphrase.get(message.author.id)}*. Breathtaking.`);
        // message.channel.send(`Trying this: ${catchphrase.setSlogan(message.author.id, str)}`);
        // return message.channel.send(`${message.author.tag} just set their slogan to ${catchphrase.getSlogan(message.author.id)} (not ${str})`);
    },
};