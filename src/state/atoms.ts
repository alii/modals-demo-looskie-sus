import {atom} from 'jotai';

export const modals = {
	stupid: {
		fucking: 'modal',
	},
	fuck: {
		fucking: 'fuck this modal',
	},
};

export const atomActiveModal = atom<keyof typeof modals | null>(null);
