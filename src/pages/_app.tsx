import React from 'react';
import {AppProps} from 'next/app';
import {Provider} from 'jotai';
import {ModalManager} from '../components/modal-manager';

export default function App({Component, pageProps}: AppProps) {
	return (
		<Provider>
			<Component {...pageProps} />
			<ModalManager />
		</Provider>
	);
}
