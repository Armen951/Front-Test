import { RefObject, useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => {
	useEffect(() => {
		const listener = (e: TouchEvent | MouseEvent) => {
			if (!ref.current || ref.current.contains(e.target as Node) || null) {
				return;
			}
			handler(e);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};

export default useOutsideClick;
