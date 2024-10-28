<script lang="ts">
	import { inline } from '$lib/utils/index.js';

	interface ButtonProps extends Props {
		class?: string;
		href?: string;
	}

	const { children, href, class: classes }: ButtonProps = $props();
</script>

<a href={href||'#'}>
	<div style={inline('px-4 py-2 mx-4 text-center', classes)}>
		{@render children?.()}
	</div>
</a>
