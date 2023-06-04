/**
 * @function
 * @name outclick
 * @description Dispatch event on click outside of node
 * @param {Element} node - the node to which the outclick should be applied
 * @param {Function} cb - the callback to be called on outclick
 * @see {@link https://svelte.dev/tutorial/actions|Svelte docs}
 * @example
 * ```svelte
 * <div use:outclick={() => alert('Beep Boop')}>Hello World.</div>
 * ```
 */
export default (node: Element, cb: Function) => {
	const handleClick = (event: MouseEvent) => {
		if (
			node &&
			!node.contains(event.target as Node) &&
			!event.defaultPrevented
		) {
			cb(node);
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
	};
};
