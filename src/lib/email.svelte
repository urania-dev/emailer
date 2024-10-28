<script lang=ts>
  import { env } from "$env/dynamic/public";
  import { Button, Container, Heading, Image, Paragraph, Repeatable, Preview } from "$lib/index.js";

  let {items} : { items: { name: string }[] } = $props()
</script>

<Preview content="📧 This is your new formatted email service!" />

<Container>

  <Image
    src={env.PUBLIC_IMAGE_URL}
  />
  <Heading level={2}>Lorem ipsum dolor sit</Heading>

  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veritatis
    earum perspiciatis pariatur exercitationem illum eligendi amet,
    deserunt provident ipsum dolore! Voluptas mollitia earum temporibus, hic
    consequatur aperiam recusandae.
  </Paragraph>
  <Button class="ms-auto" href="https://www.google.com">Deserunt</Button>

  <Repeatable {items}>
		{#snippet itemsSnippet(item: (typeof items)[0])}
			<Paragraph>{item.name}</Paragraph>
		{/snippet}
	</Repeatable>
</Container>
