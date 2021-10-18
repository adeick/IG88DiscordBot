const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createpoll')
		.setDescription('IG wants to know your thoughts. Is a hot dog a sandwich?')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('What do you want to ask?')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('emojis')
                .setDescription('Which emoji responses do you want to add?')
                .setRequired(true)
                .addChoice('Thumbs', "👍 👎")),
	async execute(interaction) {
        const q = interaction.options.getString('question', true);
        const e = interaction.options.getString('emojis', true);
        let i;
        let args = e.trim().split(/ +/);
        let emojiValid = e && args.length > 1;
          for(i = 0; i < e.length; i++){
              if(args[i].length > 2){
                  console.log("Perhaps no space?")
              }
              if(args[i].match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)){
                  console.log("Emoji Found, index " + i)
              }
              else{
                  emojiValid = false;
              }
          }

        if(q && emojiValid){
            const msg = interaction.channel.send(q)

            await interaction.reply({ content: msg});
            interaction.fetchReply().then((botMsg) => {
                for(let i = 0; i < args.length; i++){
                    botMsg.react(args[i]);
                }
            })
            .catch(console.error);
        }
        else if(q){
            return interaction.reply({ content: "Emoji string not valid.", ephemeral: true });            
        }
        else if(emojiValid){
            return interaction.reply({ content: "What are you trying to ask?", ephemeral: true });
        }
        return interaction.reply({ content: "You need to give me something to say!", ephemeral: true });
	},
};