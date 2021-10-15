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

const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('talk')
	.setDescription('IG finally has to use his Public Speaking notes')
	.addStringOption(option =>
		option.setName('speech')
			.setDescription('The thing you want IG to say')
			.setRequired(true)),
    async execute(interaction) {
        let str = interaction.options.getString('speech', true);
        if(str){
            interaction.channel.send(str);
            await interaction.reply("");
            return interaction.deleteReply();
        }
        return interaction.reply({ content: "You need to give me something to say!", ephemeral: true });
    },
}