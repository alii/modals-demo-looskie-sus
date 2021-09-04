import {useAtom} from 'jotai';
import {atomActiveModal, modals} from '../state/atoms';

export function ModalManager() {
	const [activeModal, setActive] = useAtom(atomActiveModal);

	if (!activeModal) {
		return null;
	}

	const modal = modals[activeModal];

	return (
		<div
			style={{
				position: 'fixed',
				zIndex: 10,
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: 'red',
			}}
		>
			<button
				onClick={() => {
					setActive(null);
				}}
			>
				close dum{' '}
			</button>
			{modal.fucking}
		</div>
	);
}
