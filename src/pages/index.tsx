import {useAtom} from 'jotai';
import {atomActiveModal, modals} from '../state/atoms';

export default function Home() {
	const [, set] = useAtom(atomActiveModal);

	return (
		<div>
			<h1>modals</h1>
			<button
				onClick={() => {
					set(null);
				}}
			>
				shut up
			</button>
			{Object.keys(modals).map(key => {
				return (
					<button
						key={key}
						onClick={() => {
							set(key as keyof typeof modals);
						}}
					>
						{key}
					</button>
				);
			})}
		</div>
	);
}
