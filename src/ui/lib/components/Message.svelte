<!-- 
@component
@name Message
@description A component that send and handles postMessage events by dispatching events
@example ```<Message on:resize={(e) => { console.log('resize!', e.detail); }} />```
@example ```<Message on:init={(e) => { console.log('Plugin initialized!') }}```
/>
-->
<script lang="ts" context="module">
	export const postMessage = (message: MessageData) => {
		parent.postMessage({ pluginMessage: message }, '*');
		return;
	};

	export const notify = (
		notification: string,
		options: NotificationOptions = {}
	) => {
		postMessage({ type: 'notify', notification, options });
		return;
	};
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// receive messages
	window.onmessage = async (event: MessageEvent<MessageData>) => {
		// messages MUST have an associated 'type' to properly dispatch an event
		if (!event.data.pluginMessage.type) return;

		const { type, ...rest } = event.data.pluginMessage;

		dispatch(type, rest);

		return;
	};
</script>
