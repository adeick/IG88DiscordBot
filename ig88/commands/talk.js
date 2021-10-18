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
            await interaction.reply({ content: "..."});
            return interaction.deleteReply();
        }
        return interaction.reply({ content: "You need to give me something to say!", ephemeral: true });
    },
}