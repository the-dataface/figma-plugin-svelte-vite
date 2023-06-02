<!-- 
@component
@name Message
@description A component that send and handles postMessage events by dispatching events
@example ```<Message on:resize={(e) => { console.log('resize!', e.detail); }} />```
-->
<script lang="ts" context="module">
	export const postMessage = (message: PostMessage) =>
		parent.postMessage(message, '*');
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// receive messages
	window.onmessage = async (event: MessageEvent<PostMessage>) => {
		// messages MUST have an associated 'type' to properly dispatch an event
		if (!event.data.pluginMessage.type) return;

		const { type, ...rest } = event.data.pluginMessage;

		dispatch(type, rest);

		return;
	};
</script>
