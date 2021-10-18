const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('rolldice')
	.setDescription('🎲🎲 Did I ever tell you about the time I got kicked out of the casino?')
	.addIntegerOption(option =>
		option.setName('sides')
			.setDescription('How many sides does the dice have? (Default 6)')
			.setRequired(false))
    .addIntegerOption(option =>
        option.setName('number')
            .setDescription('How many dice to roll? (Default 1)')
            .setRequired(false)),
    async execute(interaction) {
        let sides = interaction.options.getInteger('sides');
        let number = interaction.options.getInteger('number');
        sides = (sides) ? sides : 6; //set #sides to 6 if null
        number = (number) ? number : 1; //set #dice to 1 if null;
        let sum = 0;
        let str = "";
        let i;
        for(i = 0; i < number; i++){
            num = 1 + Math.floor(Math.random() * sides);
            sum += num;
            if(num == 1) str += ":one:";
            else if(num == 2) str += ":two:";
            else if(num == 3) str += ":three:";
            else if(num == 4) str += ":four:";
            else if(num == 5) str += ":five:";
            else if(num == 6) str += ":six:";
            else if(num == 7) str += ":seven:";
            else if(num == 8) str += ":eight:";
            else if(num == 9) str += ":nine:";
            else{
             str += " " + num + " ";   
            }
        }
        if(number > 1){
            str += " \nTotal: " + sum;
        }
        if(str){
            return interaction.reply({ content: str});
        }
        return interaction.reply({ content: "I dropped the dice off the table :|", ephemeral: true });
    },
}