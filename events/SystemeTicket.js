const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Selectionner pour supprimé le ticket !')
					.addOptions([
						{
							label: '🗑️ Supprimé le ticket',
							description: 'Supprime le salon',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = "1021140521588113448"
        let roleStaff = interaction.guild.roles.cache.get('1021142563652108338')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: 'Vous avez déja un ticket d\'ouvert sur le serveur.', ephemeral: true})
            if (interaction.values[0] == "achat") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour faire un Partenariat')
                    .setDescription('Veuillez bien détailler votre Partenariat un administrateur du serveur viendra pour prendre en charge.')
                    .setFooter('Ticket')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })

            } else if (interaction.values[0] == "question") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour une question')
                    .setDescription('Veuillez bien détailler ce que votre question un administrateur du serveur viendra pour prendre en charge.')
                    .setFooter('Ticket')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "VIP") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour un VIP')
                    .setDescription('Veuillez bien détailler votre VIP un administrateur du serveur viendra pour prendre en charge.')
                    .setFooter('Ticket')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })
            
               
            
            }
        }
    }
}