import {
	autoPlacement,
	autoUpdate,
	computePosition,
	offset,
	shift,
	type ComputePositionConfig,
	arrow,
} from '@floating-ui/dom';
import uid from '$ui/lib/utils/uid';

interface PositionOptions {
	/** positioning strategy for floating div. Absolute or fixed */
	strategy?: ComputePositionConfig['strategy'];
	placement?: ComputePositionConfig['placement'];
	middleware?: ComputePositionConfig['middleware'];
}

interface ActionOptions {
	node: HTMLElement;
	options: {
		/** the content to show in the tooltip */
		content: string | undefined | false;
		/** the id of the tooltip */
		id?: string;
	} & PositionOptions;
}

export default (
	node: HTMLElement,
	{ content, id = `tooltip-${uid()}`, ...options }: ActionOptions['options']
) => {
	if (!content) return;

	// create new floating el div
	const floating = document.createElement('div');
	floating.classList.add(
		'tooltip',
		'py-1.5',
		'px-2',
		'z-50',
		'rounded-sm',
		'leading-none',
		'bg-figma-color-bg-inverse',
		'text-figma-color-text-oninverse',
		'rounded-sm',
		'text-xs',
		'font-medium'
	);
	floating.id = 'tooltip';
	floating.innerHTML = content;

	// add arrow
	const arrowEl = document.createElement('div');
	arrowEl.classList.add(
		'arrow',
		'bg-figma-color-bg-inverse',
		'w-2.5',
		'h-2.5',
		'transform',
		'rotate-45',
		'absolute',
		'z-50'
	);
	floating.appendChild(arrowEl);

	node.dataset.tooltipState = 'closed';

	const createTooltip = () => {
		document.body.appendChild(floating);
		node.setAttribute('aria-describedby', id);
		node.dataset.tooltipState = 'open';
	};

	const destroyTooltip = () => {
		floating.remove();
		node.removeAttribute('aria-describedby');
		node.dataset.tooltipState = 'closed';
	};

	const defaultOptions: Partial<PositionOptions> = {
		strategy: 'fixed',
		placement: 'top',
		middleware: [offset(6), shift(), arrow({ element: arrowEl })],
	};

	const getOptions = (initOptions: PositionOptions): PositionOptions => ({
		...defaultOptions,
		...(initOptions || {}),
	});

	// mixin default options
	options = getOptions(options);

	node.addEventListener('mouseenter', createTooltip);
	node.addEventListener('mouseleave', destroyTooltip);

	const updatePosition = () => {
		computePosition(node, floating, options).then(
			({ x, y, middlewareData }) => {
				Object.assign(floating.style, {
					top: `${y}px`,
					right: null,
					bottom: null,
					left: `${x}px`,
					position: options.strategy,
					maxWidth: null,
				});

				if (middlewareData.arrow) {
					const { x, y } = middlewareData.arrow;
					Object.assign(arrowEl.style, {
						left: x != null ? `${x}px` : '',
						top: y != null ? `${y}px` : '',
					});
				}
			}
		);
	};

	updatePosition();

	const cleanUp = autoUpdate(node, floating, updatePosition);

	return {
		destroy() {
			cleanUp();
			destroyTooltip();
			node.removeEventListener('mouseenter', createTooltip);
			node.removeEventListener('mouseleave', destroyTooltip);
		},
	};
};
