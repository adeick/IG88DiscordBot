const Users = require("../models/Users");
const Discord = require('discord.js');

//const catchphrase = require('../catchphrase.sqlite');
const catchphrase = new Discord.Collection();
const client = new Discord.Client();

client.once('ready', async () => {
	const stored = await Users.findAll();
    stored.forEach(s => catchphrase.set(s.user_id, s));
});

Reflect.defineProperty(catchphrase, 'set', {
	/* eslint-disable-next-line func-name-matching */
	value: async function set(id, slogan) {
        const user = catchphrase.get(id);
        if(user){
            user.slogan = slogan;
            return user.save();
        }
        const newUser = await Users.create({ user_id: id, slogan: slogan});
		catchphrase.set(id, newUser);
		return newUser;
	},
});

Reflect.defineProperty(catchphrase, 'get', {
	/* eslint-disable-next-line func-name-matching */
	value: async function get(id) {
        const user = catchphrase.get(id);
        return user ? user.slogan : 0;
	},
});

module.exports = {
	name: 'setcatchphrase',
	description: 'Sets a slogan for each user',
    args: true,
    allGuilds: true,
    aliases: ['setslogan', 'setsaying', 'setquote'],
	execute(message, args) {
        let str = "";
        for(let i = 0; i < args.length; i++){
            str += " " + args[i];
        }
        catchphrase.set(message.author.id, str);
        return message.channel.send(`${message.author.tag} just set their slogan to ${catchphrase.get(message.author.id)}`);
    },
};