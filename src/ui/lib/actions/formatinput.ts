export interface FormatInputOptions {
	/** The input element */
	node: HTMLInputElement;
	/** The formatting function, with the value passed as string */
	format: (node: HTMLInputElement) => string;
}

/**
 * @name formatinput
 * @description Format an input whenever the value changes
 * @param {FormatInputOptions['node']} node - The element to apply the action to
 * @param {FormatInputOptions['format']} formatFunction - The format function to apply to the input value
 * @see {@link https://svelte.dev/docs#template-syntax-element-directives-use-action Use Action}
 * @example <div use:format={(value) => value + ' hello world!'}>...</div>
 */
export default (
	node: FormatInputOptions['node'],
	formatFunction: FormatInputOptions['format'] = (value) => `${value ?? ''}`
) => {
	const updateValue = () => {
		const { value } = node;
		if (value === undefined) return;
		node.value = formatFunction(node);
	};

	node.addEventListener('change', updateValue);
	node.addEventListener('paste', updateValue);

	// Format on intial hydration
	updateValue();

	return {
		destroy() {
			node.removeEventListener('change', updateValue);
			node.removeEventListener('paste', updateValue);
		},
	};
};

export const formatAngle = (node: HTMLInputElement) => {
	// default to 0 if the value is not a number
	if (isNaN(+node.value)) {
		node.dataset.value = `${0}`;
		return `0°`;
	} else if (+node.value > 360) {
		node.dataset.value = `${360}`;
		return `${360}°`;
	} else if (+node.value < -360) {
		node.dataset.value = `${-360}`;
		return `${-360}°`;
	}

	// else return the new value with a degree symbol
	node.dataset.value = node.value;
	return `${node.value}°`;
};

export const formatPercent = (node: HTMLInputElement) => {
	// default to 100 if the value is not a number
	if (isNaN(+node.value)) {
		node.dataset.value = `${100}`;
		return `100%`;
	}

	// else return the new value with a percent symbol
	node.dataset.value = node.value;
	return `${node.value}%`;
};
