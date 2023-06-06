/**
 * Check if the given object is a Svelte component.
 * @param possibleComponent The object to check.
 * @returns {boolean} Whether the object is a Svelte component.
 * @example
 * isSvelteComponent(MyComponent); // true
 */
export default (possibleComponent: any): boolean => {
	return possibleComponent &&
		typeof possibleComponent === 'function' &&
		typeof window !== 'undefined'
		? typeof possibleComponent.prototype.$destroy === 'function' // client-side
		: typeof possibleComponent.render === 'function'; // server-side
};
