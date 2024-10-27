# @uraniadev/emailer

An email component library built using Svelte, Tailwind CSS, and `tw-to-css`, inspired by `@react/email`. This package simplifies the creation of responsive, styled emails using Svelte components that can be rendered server-side for optimal email delivery performance.

## Features

- **Component-Based**: Use Svelte components like `Button`, `Container`, and `Heading` to design modular emails.
- **Tailwind CSS Integration**: Apply inline styles via Tailwind utility classes.
- **Server-Side Rendering (SSR)**: Render emails as HTML using the `Emailer` class, compatible with Node-based email clients such as Nodemailer.
- **Customization**: Easily adjust styles and configurations for each email render.

## Installation

Install the package via npm:

```bash
npm install @uraniadev/emailer
```

### Peer Dependencies

Ensure you have the following peer dependency:

- `svelte`: `^5.0.0`

## Usage

### Basic Setup

1. **Create an Email Component**: Develop an email component in Svelte, using provided components such as `Button`, `Container`, and `Heading`.

   ```svelte
   <!-- src/lib/email.svelte -->
   <script>
     import { Button, Container, Heading, Image, Paragraph } from "@uraniadev/emailer";
   </script>

   <Container>
     <Image src="https://example.com/image.jpg" alt="Sample Image" />
     <Heading level={2}>Welcome to Our Service</Heading>
     <Paragraph>
       Thanks for joining! Please click the button below to confirm your email address.
     </Paragraph>
     <Button href="https://example.com/confirm">Confirm Email</Button>
   </Container>
   ```

2. **Render and Send**: Import and use the `Emailer` class to render your component as HTML for email delivery.

   ```typescript
   import Emailer from "@uraniadev/emailer";
   import Email from "./path/to/email.svelte";

   const emailer = new Emailer();
   const html = emailer.render(Email, { prop: "value" });

   sendMail(html); // Send via an email client (e.g., Nodemailer)
   ```

### Utility for Inline Styling

Use `inline` to apply Tailwind utility classes inline:

```typescript
import type { ClassValue } from "clsx";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { twi } from "tw-to-css";

export function inline(...inputs: ClassValue[]) {
  return twi(twMerge(clsx(inputs)));
}

```
It can be used to style components inline

```typescript
import { inline } from "@uraniadev/emailer";

<div style={inline("text-lg text-pink-500 font-bold")}>
  This is a formatted text
</div>
```

### Example Components

#### Button

```svelte
<script lang="ts">
  import { inline } from '$lib/utils';
  interface ButtonProps { href?: string; class?: string; }
</script>

<a href={href || '#'} style={inline("px-4 py-2 mx-4", class)}>
  <slot />
</a>
```

#### Container

```svelte
<script lang="ts">
  import { inline } from '$lib/utils';
  interface ContainerProps { class?: string; }
</script>

<div style={inline("px-4 w-full", class)}>
  <slot />
</div>
```

## Configuration

The `Emailer` class accepts custom configuration for HTML attributes, language, and direction settings:

- **props**: Default attributes for `html`, `body`, and `container` tags.
- **lang**: Language setting for the email (`en` by default).
- **dir**: Text direction (`ltr` by default).

Example:

```typescript
const emailer = new Emailer({
  props: { html: ["style='background: #fff;'"], body: ["style='padding: 20px;'"] },
  lang: "en",
  dir: "ltr",
});
```

## Scripts

- **`dev`**: Start a development server.
- **`build`**: Build the project for production.
- **`package`**: Prepare the package for publishing.
- **`check`**: Run type checking.
- **`format`**: Format code with Prettier.
- **`lint`**: Check code formatting.

Run these scripts via npm, e.g., `npm run dev`.

## License

This project is licensed under the MIT License.

## Contributing

Issues and pull requests are welcome. For major changes, consider opening an issue first to discuss the proposed changes.

---

## Example Usage

```typescript
import Emailer from "@uraniadev/emailer";
import SampleEmail from "./path/to/sample-email.svelte";

const emailer = new Emailer();
const emailHTML = emailer.render(SampleEmail, { prop: "value" });
// Send the generated HTML with a mail client like Nodemailer
```

--- 

## Development

Clone the repository and run `npm install` to set up the project locally.

```bash
git clone https://github.com/urania-dev/emailer.git
cd emailer
npm install
```

---