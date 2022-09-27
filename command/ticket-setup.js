const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Sélectionnez le type de ticket à créer.')
					.addOptions([
						{
							label: '📝 Partenariat',
							description: 'Ouvrez un ticket pour faire un Partenariat. ',
							value: 'achat',
						},
						{
							label: '📌 Question',
							description: 'Ouvrir un ticket pour faire une question. ',
							value: 'question',
						},
						{
							label: '🚨 Plainte',
							description: 'Ouvrir un ticket pour faire une plainte. ',
							value: 'plainte',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Ouvrir un ticket',
                description: '**Quelle est la raison de votre ticket ?**\nVeuillez choisir le type de ticket que vous souhaitez ouvrir.',
                color: "RED", 
                footer: {text: 'Ticket'}
            }],
            components: [row]
        })
    }
}
