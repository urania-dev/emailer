<script>
	import { enhance } from '$app/forms';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<form method="post" use:enhance>
	<button class="rounded bg-neutral-800 p-2 font-bold text-white">Send test email</button>
</form>
