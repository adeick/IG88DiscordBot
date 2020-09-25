// const Users = require('../dbObjects');
// const Discord = require('discord.js');
// const { Op } = require('sequelize');

// //const catchphrase = require('../catchphrase.sqlite');
// const catchphrase = new Discord.Collection();
// const client = new Discord.Client();

// client.once('ready', async () => {
// 	const stored = await Users.findAll();
//     stored.forEach(s => catchphrase.set(s.user_id, s));
// });

// Reflect.defineProperty(catchphrase, 'setSlogan', {
// 	/* eslint-disable-next-line func-name-matching */
// 	value: async function setSlogan(id, slogan) {
//         const user = catchphrase.get(id);
//         if(user){
//             user.slogan = slogan;
//             return user.save();
//         }
//         const newUser = await Users.create({ user_id: id, slogan: slogan});
// 		catchphrase.set(id, newUser);
// 		return newUser;
// 	},
// });

// Reflect.defineProperty(catchphrase, 'getSlogan', {
// 	/* eslint-disable-next-line func-name-matching */
// 	value: function getSlogan(id) {
//         const user = catchphrase.get(id);
//         return user ? user.slogan : "Lorem Ipsum!";
// 	},
// });

module.exports = {
	name: 'catchphrase',
	description: 'Stores a slogan for each user',
    args: true,
    allGuilds: true,
    aliases: ['slogan', 'saying', 'quote'],
	execute(message, args) {
        const target = message.mentions.users.first() || message.author;
        return message.channel.send(`${target} has the catchphrase: *${message.client.catchphrase.get(target.id)}*`);
    },
};
