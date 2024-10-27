<script lang="ts">
	import { inline } from '$lib/utils/index.ts';

	interface ContainerProps extends Props {
		class?: string;
	}

	const { children, class: classes }: ContainerProps = $props();
</script>

<div style={inline('px-4 w-full', classes)}>
	{@render children?.()}
</div>
