<script lang="ts">
	import { inline } from '../utils/index.js';

	interface HeadingProps extends Props {
		class?: string;
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	}

	const { children, class: classes, level = 2 }: HeadingProps = $props();
</script>

{@html `<h${level} style=${inline(`px-4 mb-4 mt-2`, classes)}>`}
{@render children?.()}
{@html `</h${level}>`}
