<script lang="ts">
	import { inline } from '../utils/index.js';

	interface ButtonProps extends Props {
		class?: string;
		href?: string;
	}

	const { children, href, class: classes }: ButtonProps = $props();
</script>

<a {href}>
	<div style={inline('px-4 py-2 mx-4', classes)}>
		{@render children?.()}
	</div>
</a>
