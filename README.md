# Email Component Library

This is a library for creating structured and styled HTML emails, intended as a
transitional resource. Designed for convenience, it allows developers to build
and customize emails quickly while encouraging best practices by illustrating
the internal composition of emails through self-contained components. Inspired
by Resend's [@react/email](https://react.email/).

This library takes a similar approach to the one applied by pilcrow's to
[The Copenhagen Book](https://thecopenhagenbook.com): this library is intended
as a learning tool and a starting point. As developers become comfortable with
the email structure and utilities provided, they are encouraged to transition
toward standalone solutions.

---

## Installation

To install the package, run:

```bash
npm install @uraniadev/emailer
```

## Quick Start

This library provides a set of unstyled, modular email components (e.g.,
`Button`, `Container`, `Heading`) built with Svelte and styled with Tailwind
CSS. Components use `inline` styling through `tw-to-css` to ensure email
compatibility.

### Example Usage

Create an email using the provided components:

```svelte
<!-- src/lib/email.svelte -->
<script>
  import { Button, Container, Heading, Image, Paragraph } from "@uraniadev/emailer";
</script>

<Container>
  <Image src="https://example.org/image-url.jpg" />
  <Heading level={2}>Lorem ipsum dolor sit</Heading>
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Maiores veritatis earum, perspiciatis pariatur exercitationem
    illum eligendi amet,deserunt provident ipsum dolore! 
    Voluptas mollitia earum temporibus, hic consequatur 
    aperiam recusandae.
  </Paragraph>
  <Button href="https://www.example.com">Deserunt</Button>
</Container>
```

Then render this email in your server-side script:

```typescript
import Emailer from "@uraniadev/emailer";
import Email from "./email.svelte";

const emailer = new Emailer();

const html = emailer.render(Email, {/* props */});
sendMail(html); // Use your preferred email-sending method
```

### Utility Function: Inline Styling with `tw-to-css`

This library includes an `inline` utility that merges Tailwind styles with
`tw-to-css` to create compatible inline styles for emails:

```typescript
import { inline } from "@uraniadev/emailer";

<p style={inline("text-lg text-pink-500 font-bold")}>
  This is a formatted text
</p>;
```

```typescript
// inline() inherith shadcn cn an apply tw-to-css inline:

import type { ClassValue } from "clsx";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { twi } from "tw-to-css";

export function inline(...inputs: ClassValue[]) {
  return twi(twMerge(clsx(inputs)));
}
```

## Components

### `Button`

A link-styled button that accepts `class` and `href` attributes.

```svelte
<Button class="bg-blue-500 text-white" href="https://example.com">Click Me</Button>
```

### `Card`

A general-purpose card component for grouping content sections.

```svelte
<Card class="shadow-lg">This is a card</Card>
```

### `Container`

A wrapper to align email content and provide consistent padding.

```svelte
<Container class="max-w-lg">Content goes here</Container>
```

### `Heading`

A responsive heading element allowing level-based customization.

```svelte
<Heading level={2}>This is a Heading</Heading>
```

### `Image`

An image wrapper with optional classes.

```svelte
<Image src="https://example.com/image.jpg" alt="Image description" />
```

### `Paragraph`

For general text blocks, styled for readability.

```svelte
<Paragraph>This is a paragraph of text</Paragraph>
```

### `Repeatable`

Generates repeated content, such as lists, from an array. `itemsSnippet` can be
use to stylize the repeated item

```svelte
<Repeatable items={[1, 2, 3]}>
    {#snippet itemsSnippet(item)}
    <Container>
        <Paragraph>{item.name}</Paragraph>
    </Container>
    {/snippet}
</Repeatable>
```

## API: Emailer Class

`Emailer` is the primary class used to render emails, taking in a Svelte
component and outputting an HTML template. It can be customized by passing
configuration options for `props`, `lang`, `dir`, and `style`.

```typescript
class Emailer {
  render<T extends Component<any>>(
    component: T,
    props?: ComponentProps<T>,
    config?: HTMLConfig,
  ): string;
}
```

## HTML Boilerplate

The `htmlBoilerplate` function in the `Emailer` class generates the complete
HTML structure for email content, applying essential styles and configuration
for better rendering across email clients. This function wraps the main content
(`children`) in an HTML template, ensuring consistency and compatibility.

#### Properties

- **props**: A set of default styling properties for the `html`, `body`, and
  `container` elements, configurable via the `HTMLConfig` type. Each property is
  an array of style strings, providing styles like background color, text color,
  and padding.
- **dir**: Defines text direction, with the default set to "ltr"
  (left-to-right). This can be adjusted based on the email's language
  requirements.
- **lang**: Specifies the language of the email content, set to "en" by default
  for English.
- **style**: A global style string that applies custom styling to the entire
  HTML document, offering flexibility to embed CSS directly within the `<style>`
  tag.

#### Usage in `render` function

The `Emailer.render()` method uses `htmlBoilerplate` to wrap the rendered body
of a Svelte component (provided in `render` as `component`). The function also
accepts:

- **head**: Optional custom content or metadata for the `<head>` section.
- **config**: An optional `HTMLConfig` object to override the default
  properties, styles, direction, or language settings.

Together, these properties and `htmlBoilerplate` facilitate the creation of
highly customizable, visually consistent email templates with minimal setup.

```typescript
htmlBoilerplate = (children: string, head?: string, options?: HTMLConfig) => {
  const { props, dir, lang, style } = options ||
    { props: this.props, dir: this.dir, lang: this.lang, style: this.style };
  return `<!doctype html> 
    <html ${props?.html.join(" ")} dir=${dir} lang=${lang}> 
    <head> 
      <style>*{box-sizing:border-box;text-decoration:none;border:0;padding:0;margin:0;}${style}</style>
      ${head || this.head}
    </head> 
    <body ${props?.body.join(" ")}> 
      <table ${props?.container.join(" ")}>
        <tbody><tr><td>${children}</td></tr></tbody>
      </table>
    <body> 
    </html>`;
};
```

---

> **Note**: This library is intended as a learning tool and a starting point. As
> developers become comfortable with the email structure and utilities provided,
> they are encouraged to transition toward standalone solutions.
