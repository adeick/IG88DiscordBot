const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('rolldice')
	.setDescription('Did I ever tell you about the time I got kicked out of the casino?')
	.addIntOption(option =>
		option.setName('sides')
			.setDescription('How many sides does the dice have? (Default 6)')
			.setRequired(false))
    .addIntOption(option =>
        option.setName('number')
            .setDescription('How many dice to roll? (Default 1)')
            .setRequired(false)),
    async execute(interaction) {
        let sides = interaction.options.getString('sides');
        let number = interaction.options.getString('number');
        sides = (sides) ? sides : 6; //set #sides to 6 if null
        number = (number) ? number : 1; //set #dice to 1 if null;
        let sum = 0;
        let str;
        let i;
        for(i = 0; i < number; i++){
            num = 1 + Math.floor(Math.random() * sides);
            sum += num;
            if(num == 1) str += ":one:";
            if(num == 2) str += ":two:";
            if(num == 3) str += ":three:";
            if(num == 4) str += ":four:";
            if(num == 5) str += ":five:";
            if(num == 6) str += ":six:";
            if(num == 7) str += ":seven:";
            if(num == 8) str += ":eight:";
            if(num == 9) str += ":nine:";
            else{
             str += " " + num + " ";   
            }
        }
        str += " \nTotal is " + sum;
        if(str){
            return interaction.reply({ content: str});
        }
        return interaction.reply({ content: "I dropped the dice off the table :|", ephemeral: true });
    },
}