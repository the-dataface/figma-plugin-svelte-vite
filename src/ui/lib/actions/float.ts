import {
	autoPlacement,
	autoUpdate,
	computePosition,
	offset,
	shift,
	type ComputePositionConfig,
} from '@floating-ui/dom';

interface PositionOptions {
	/** positioning strategy for floating div. Absolute or fixed */
	strategy?: ComputePositionConfig['strategy'];
	placement?: ComputePositionConfig['placement'];
	middleware?: ComputePositionConfig['middleware'];
}

interface ActionOptions {
	node: HTMLElement;
	options: {
		/** target ID or element. if ID, element will be grabbed. Will fail immediately if is not a valid element */
		target: string | HTMLElement;
		/** hide the floating element */
		hide?: boolean;
	} & PositionOptions;
}

const defaultOptions: Partial<PositionOptions> = {
	strategy: 'fixed',
	placement: 'bottom',
	middleware: [offset(15), shift(), autoPlacement()],
};

export default (
	node: HTMLElement,
	{ target, hide = false, ...options }: ActionOptions['options']
) => {
	if (typeof target === 'string') {
		const targetEl = document.getElementById(target);
		if (!targetEl) return;
		target = targetEl;
	}

	// now check to make sure its an element
	if (!(target instanceof HTMLElement) || typeof target === 'string') return;

	const getOptions = (initOptions: PositionOptions): PositionOptions => ({
		...defaultOptions,
		...(initOptions || {}),
	});

	// mixin default options
	options = getOptions(options);

	const updatePosition = () => {
		computePosition(target as HTMLElement, node, options).then(({ x, y }) => {
			Object.assign(node.style, {
				top: `${y}px`,
				right: null,
				bottom: null,
				left: `${x}px`,
				position: options.strategy,
				maxWidth: null,
				visibility: hide ? 'hidden' : 'visible',
			});
		});
	};

	updatePosition();

	const cleanUp = autoUpdate(target, node, updatePosition);

	return {
		destroy() {
			cleanUp();
		},
		update({ hide = false, ...options }: ActionOptions['options']) {
			node.style.visibility = hide ? 'hidden' : 'visible';
		},
	};
};
