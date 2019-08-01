import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: "",
		series: [20, 42]
	}
});

export default app;