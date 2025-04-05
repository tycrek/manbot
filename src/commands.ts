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
	run: (interaction) => Promise.resolve('https://images.tycrek.com/manhorse.jpg')
};

const BroCommand: Command = {
	name: 'bro',
	description: 'bro',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/brohorse.jpg')
};

const WomanCommand: Command = {
	name: 'woman',
	description: 'woman',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/womanhorse.jpg'),
};

const JuanCommand: Command = {
	name: 'juan',
	description: 'juan',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/juanhorse.JPG'),
};

const HorseCommand: Command = {
	name: 'horse',
	description: 'horse',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/horsehorse.JPG'),
};

const CarlosCommand: Command = {
	name: 'carlos',
	description: 'carlos',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/carloshorse.JPG'),
};

const ACommand: Command = {
	name: 'a',
	description: 'a',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/ahorse.JPG'),
};

const ApacheCommand: Command = {
	name: 'apache',
	description: 'apache',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/nbhorse.jpg')
}

const WideCommand: Command = {
	name: 'wide',
	description: 'wide',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/wideman.jpg')
}

const McCommand: Command = {
	name: 'mc',
	description: 'mc',
	run: (interaction) => Promise.resolve('https://images.tycrek.com/mcman.jpg')
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
		resolve(`https://images.tycrek.com/cheers${type === 'gif' ? '-beer.gif' : 'beer.png'}`);
	})
};

const DedCommand: Command = {
	name: 'ded',
	description: 'there is AUHHGHHA KHUAGHH',
	run: (interaction) => Promise.resolve('https://sylviefox.ca/v/Tom%20Scott%20chokes%20on%20vape.mp4')
};

const BoobsCommand: Command = {
	name: 'boobs',
	description: 'bazonkas!',
	run: (interaction) => Promise.resolve('https://cdn.discordapp.com/emojis/748672345077448824.gif?size=128&quality=lossless')
};

export const Commands: Command[] = [
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
	WideCommand,
	McCommand,
	CatJamCommand,
	BeerCommand,
	DedCommand,
	BoobsCommand,

	{
		name: 'help',
		description: 'get help',
		run: (interaction) => {
			const joiner = (list: string[]) => `\`${list.join('`, `')}\``;
			const coms = {
				party: ['toke', 'cheers', 'beer', 'ded'],
				horses: ['man', 'bro', 'woman', 'juan', 'horse', 'carlos', 'a', 'apache', 'wide', 'mc'],
				other: ['catjam', 'aussie', 'boobs']
			};

			return Promise.resolve(`
## Commands
**party**
	${joiner(coms.party)}
	
**horses**
	${joiner(coms.horses)}
	
**other**
	${joiner(coms.other)}`
			);
		}
	}
];
