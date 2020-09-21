// const Users = require("../models/Users");

// //const catchphrase = require('../catchphrase.sqlite');
// const catchphrase = new Discord.Collection();
// const client = new Discord.Client();

// client.once('ready', () => {
// 	const stored = await Users.findAll();
//     stored.forEach(s => catchphrase.set(s.user_id, s));
// });

// Reflect.defineProperty(catchphrase, 'set', {
// 	/* eslint-disable-next-line func-name-matching */
// 	value: async function set(id, slogan) {
//         const user = catchphrase.get(id);
//         if(user){
//             user.slogan = slogan;
//             return user.save();
//         }
//         const newUser = await Users.create({ user_id: id, slogan: slogan});
// 		currency.set(id, newUser);
// 		return newUser;
// 	},
// });

// Reflect.defineProperty(catchphrase, 'get', {
// 	/* eslint-disable-next-line func-name-matching */
// 	value: async function get(id) {
//         const user = catchphrase.get(id);
//         return user ? user.slogan : 0;
// 	},
// });

// module.exports = {
// 	name: 'catchphrase',
// 	description: 'Stores a slogan for each user',
//     args: true,
//     allGuilds: true,
//     aliases: ['slogan', 'saying'],
// 	execute(message, args) {
        
//         const target = message.mentions.users.first() || message.author;
//         return message.channel.send(`${target.tag} has the slogan: *${catchphrase.get(target.id)}*`);
        
//     },
// };
