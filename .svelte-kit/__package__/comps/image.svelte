<script lang="ts">
	import { inline } from '../utils/index.ts';

	interface ImageProps extends Props {
		src: string;
		alt?: string;
		class?: string;
	}

	const { class: classes, src, alt = 'picture placeholder' }: ImageProps = $props();
</script>

<div style={inline('w-full flex overflow-clip', classes)}>
	<img {src} {alt} style={inline('object-cover w-full h-full')} />
</div>
