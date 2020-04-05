const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
	 console.log('Bot ON');
});

client.on('guildMemberAdd', member => {
	console.log('add');
	let embed = new discord.MessageEmbed();
	let nbMember = member.guild.memberCount;
	embed.addField(`**__Nouveau membre__**`, `<@${member.id}> à rejoint **Sopernetwork**`);
	embed.addField(`**__Nombre de membre__**`, `Le nombre de membre est désormais ${nbMember}`);
	console.log(member);
	embed.setThumbnail(`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`);
	member.guild.channels.cache.find(channel => channel.id === '624231358860099585').send(embed);
});

client.on('guildMemberRemove', member => {
	console.log('remove');
	let embed = new discord.MessageEmbed();
	let nbMember = member.guild.memberCount;
	embed.addField(`**__Perte d'un membre__**`, `${member.user.username} à quitté **Sopernetwork**`);
	embed.addField(`**__Nombre de membre__**`, `Le nombre de membre est désormais ${nbMember}`);
	embed.setThumbnail(`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`);
	member.guild.channels.cache.find(channel => channel.id === '624232172156354572').send(embed);
});

client.login('TOKENID');