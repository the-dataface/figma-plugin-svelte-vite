type Targets =
	| string
	| NodeListOf<HTMLElement>
	| HTMLCollection
	| HTMLElement[];
type Nodes = HTMLElement[] | undefined;
type KeythroughOptions = {
	/**
	 * Identify the targets to keythrough. Can be a css selector string, a node list of items to navigate through, or a single node. Targets **must** be a child of the node to which the action is applied.
	 */
	targets: Targets;
};

/**
 * @name keythrough
 * @description A svelte action that allows you to navigate through a list of items using the arrow keys, built with menubars in mind.
 * @param {HTMLElement} node - the element to apply the action to
 * @param {Targets} targets - a css selector string or a node list of items to navigate through
 * @see {@link https://svelte.dev/docs#template-syntax-element-directives-use-action Use Action}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role Menubar keyboard interactions}
 * @example <div use:keythrough={{query: '.item'}}>...</div>
 */
export default (
	node: HTMLElement,
	{ targets }: KeythroughOptions = { targets: node.children }
) => {
	// collect nodes
	let nodes = getNodes(node, targets) as Nodes;

	// check that nodes exist
	if (!nodes?.length) return;

	// create a map of nodes to their index in the node list
	const indexedNodes = new Map([...(nodes || [])].map((el, i) => [el, i]));

	// shortcuts for DRY
	const focusFirstMenuItem = () => nodes?.[0]?.focus();
	const focusLastMenuItem = () => nodes?.[nodes.length - 1]?.focus();

	const onkeydown = (e: KeyboardEvent) => {
		if (!nodes?.length) return;

		const index = indexedNodes?.get(e.target as HTMLAnchorElement);
		if (index === undefined) return;

		switch (e.key) {
			case 'ArrowUp':
			case 'ArrowLeft': {
				if (index === 0) return focusLastMenuItem();
				const prev = nodes?.[index - 1];
				if (prev) prev.focus();
				return;
			}

			case 'ArrowDown':
			case 'ArrowRight': {
				if (index === nodes?.length - 1) return focusFirstMenuItem();
				const next = nodes?.[index + 1];
				if (next) next.focus();
				return;
			}

			case 'Home':
				focusFirstMenuItem();
				return;

			case 'End':
				focusLastMenuItem();
				return;

			default:
				return;
		}
	};

	node.addEventListener('keydown', onkeydown);

	return {
		update({ targets }: { targets: Targets }) {
			nodes = getNodes(node, targets) as Nodes;
		},
		destroy() {
			node.removeEventListener('keydown', onkeydown);
		},
	};
};

/**
 * @name getNodes
 * @param {HTMLElement} node - the element to apply the action to
 * @param {Targets} targets - a css selector string or a node list of items to navigate through
 * @returns {Nodes} - a node list of elements or undefined, if malformed query
 */
const getNodes = (node: HTMLElement, targets: Targets) => {
	let nodes;
	// collect items based on query passed in
	if (Array.isArray(targets)) nodes = targets; // array of nodes, as-is
	else if (typeof targets === 'string')
		nodes = node.querySelectorAll(targets); // css selector string
	else if (targets instanceof NodeList || targets instanceof HTMLCollection)
		nodes = [...targets]; // node list already passed in
	else nodes = undefined;

	return nodes;
};
