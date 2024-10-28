<script lang="ts">
  interface PreviewProps {
    content: string;
  }

  let { content }: PreviewProps = $props();
  const spacedContent = $derived(
    content +
      "\xa0\u200C\u200B\u200D\u200E\u200F\uFEFF".repeat(
        150 - content?.trim()?.length || 0
      )
  );
</script>

<div
  style="display:none; height:0; width:0; overflow:hidden; opacity:0; visibility:hidden;"
>
  {spacedContent}
</div>
