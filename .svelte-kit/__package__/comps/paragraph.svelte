<script lang="ts">
	import { inline } from '../utils/index.js';

	interface ParagraphProps extends Props {
		class?: string;
	}

	const { children, class: classes }: ParagraphProps = $props();
</script>

<p style={inline('leading-relaxed text-base px-4 mt-1 mb-2', classes)}>{@render children?.()}</p>
