import App from './App.svelte';

import './app.postcss';

const app = new App({
	target: document.getElementById('app') as Element,
});

export default app;
