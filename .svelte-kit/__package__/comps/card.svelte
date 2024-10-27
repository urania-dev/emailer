<script lang="ts">
	import { inline } from '../utils/index.js';

	interface CardProps extends Props {
		class?: string;
	}

	const { children, class: classes }: CardProps = $props();
</script>

<div style={inline('bg-neutral-200 p-4 rounded w-full', classes)}>
	{@render children?.()}
</div>
