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
	run: (interaction) => Promise.resolve(`Rounds on me, bottoms up!`)
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
}

export const Commands = [
	TokeCommand,
	CheersCommand,
	AussieCommand,
	ManCommand,
];