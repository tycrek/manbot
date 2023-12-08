import { Command } from './interactions';
import { ApplicationCommandOptionType } from './enums';

const TokeCommand: Command = {
	name: 'toke',
	description: 'Time for a toke',
	run: (interaction) => Promise.resolve(`It's 4:20 somewhere, toke up!`)
};

const CheersCommand: Command = {
	name: 'cheers',
	description: 'Time for a drink',
	run: (interaction) => Promise.resolve(`WINE TIME, bottoms up!`)
};

const AussieCommand: Command = {
	name: 'aussie',
	description: 'OI OI OI',
	run: (interaction) => Promise.resolve(`aussie aussie aussie`)
};

const ManCommand: Command = {
	name: 'man',
	description: 'man',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/manhorse')
};

const BroCommand: Command = {
	name: 'bro',
	description: 'bro',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/brohorse')
};

const WomanCommand: Command = {
	name: 'woman',
	description: 'woman',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/womanhorse'),
};

const JuanCommand: Command = {
	name: 'juan',
	description: 'juan',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/juanhorse'),
};

const HorseCommand: Command = {
	name: 'horse',
	description: 'horse',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/horsehorse'),
};

const CarlosCommand: Command = {
	name: 'carlos',
	description: 'carlos',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/carloshorse'),
};

const ACommand: Command = {
	name: 'a',
	description: 'a',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/ahorse'),
};

const ApacheCommand: Command = {
	name: 'apache',
	description: 'apache',
	run: (interaction) => Promise.resolve('https://i.tycrek.dev/nbhorse')
}

const CatJamCommand: Command = {
	name: 'catjam',
	description: 'boppin',
	run: (interaction) => Promise.resolve('https://cdn.discordapp.com/emojis/743135957729017877.gif')
};

const BeerCommand: Command = {
	name: 'beer',
	description: 'aye',
	options: [
		{
			name: 'type',
			description: 'PNG or GIF?',
			required: false,
			type: ApplicationCommandOptionType.STRING,
			choices: [
				{
					name: 'PNG',
					value: 'type_png'
				},
				{
					name: 'GIF',
					value: 'type_gif'
				}
			]
		}
	],
	run: (i) => new Promise((resolve, reject) => {
		const type: 'png' | 'gif' = (i.data.options && i.data.options[0] ? i.data.options[0]?.value : 'type_gif').replace('type_', '') as any;
		resolve(`https://i.tycrek.dev/cheers${type === 'gif' ? '-beer.gif' : 'beer.png'}`);
	})
};

const DedCommand: Command = {
	name: 'ded',
	description: 'there is AUHHGHHA KHUAGHH',
	run: (interaction) => Promise.resolve('https://jmoore.dev/v/Tom%20Scott%20chokes%20on%20vape.mp4')
};

export const Commands = [
	TokeCommand,
	CheersCommand,
	AussieCommand,
	ManCommand,
	BroCommand,
	WomanCommand,
	JuanCommand,
	HorseCommand,
	CarlosCommand,
	ACommand,
	ApacheCommand,
	CatJamCommand,
	BeerCommand,
	DedCommand,
];