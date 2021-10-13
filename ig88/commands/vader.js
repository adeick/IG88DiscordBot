const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vader')
		.setDescription('**Imperial March Soundtrack**'),
	async execute(interaction) {
		await interaction.reply('The force is strong with this one');
	},
};