<script lang="ts" generics="T">
	import { inline } from '$lib/utils/index.ts';

	interface RepeatableProps extends Props {
		class?: string;
		itemsSnippet?: import('svelte').Snippet<[T]>;
		items?: T[];
	}

	const { children, itemsSnippet, items, class: classes }: RepeatableProps = $props();
</script>

<table style={inline('m-0 w-full border-0 max-w-[620px] border-collapse', classes)}>
	<tbody>
		{#if itemsSnippet && items?.length}
			<tr><td>{@render children?.()}</td></tr>
			{#each items as item}
				<tr><td>{@render itemsSnippet(item)}</td></tr>
			{/each}
		{:else}
			<tr><td>{@render children?.()}</td></tr>
		{/if}
	</tbody>
</table>
