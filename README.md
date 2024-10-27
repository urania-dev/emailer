# Emailer Library

The `Emailer` class is a Svelte-based email utility designed to render HTML emails using Svelte components and send them through SMTP. This package draws inspiration from `@react/email` and includes customizable styling and structured HTML boilerplate for consistent, responsive email formatting.

### Library Documentation

---

## Overview

This package provides a library of designet do compose and an utility to render styled HTML emails using Svelte. Inspired by `@react/email`, it allows users to compose modular emails with predefined components that are optimized for email clients. It includes utilities for inline styling and structured rendering, making it easy to create responsive email layouts.

---

### Installation

To install the package, run:

```bash
npm install '@uraniadev/emailer'
```

**Note**: Tailwind CSS should be installed separately as a peer dependency to ensure compatibility with custom Tailwind configurations. Run:

```bash
npm install tailwindcss
```

---

### Usage

To get started, create your email components as `.svelte` files, import them __server-side__, and use the `Emailer` class to render the final HTML output.

#### Basic Example

```typescript
import Emailer from '<your-library-name>';
import EmailComponent from './email.svelte';

// Initialize Emailer
const emailer = new Emailer();

// Render the email
const html = emailer.render(EmailComponent, { /* props */ });

// Send the email
smtp.sendMail(html, { /* SMTP config */ });
```

---

### Classes and Methods

#### `Emailer`

- **Constructor**: Creates an instance of the Emailer.
- **Properties**:
  - `props`: Default inline styles for the email, body, and container.
  - `style`: Optional custom style string.
  - `dir`: Text direction, e.g., "ltr" or "rtl".
  - `lang`: Language of the document.
  
- **Methods**:
  - `htmlBoilerplate(children: string, props: object, dir: string, lang: string, style: string)`: Generates the base HTML boilerplate.
  - `render<T extends Component>(component: T, props: ComponentProps<T>)`: Renders a Svelte component into HTML format.
  - `sendMail(html: string, smtpConfig: object)`: Sends the email using the provided SMTP configuration.

### Available Components

Each component accepts props that extend the base `Props` and support inline styles. Components include:

- **Button**: Styled button with a custom URL.
- **Card**: Basic container with padding and rounded corners.
- **Container**: Wrapper with full-width padding.
- **Heading**: Configurable heading levels (e.g., `<h1>`, `<h2>`).
- **Image**: Image display with alt text.
- **Paragraph**: Text paragraph with spacing.
- **Repeatable**: Iterates and renders an array of items in a table.

---

### Development Dependencies

- **Peer Dependencies**:
  - `"svelte": "^5.0.0"`
  - `"tailwindcss"` (User to install their version to support custom configurations)

- **Dependencies**:
  - `"clsx"`: For dynamic class merging.
  - `"tailwind-merge"`: To handle Tailwind utility classes.
  - `"tw-to-css"`: For converting Tailwind classes to CSS (used for inlining styles).

- **Dev Dependencies**:
  - `"@sveltejs/adapter-auto"`
  - `"@sveltejs/kit"`
  - `"@sveltejs/package"`
  - `"@sveltejs/vite-plugin-svelte"`
  - `"autoprefixer"`
  - `"prettier"` and related plugins
  - `"svelte-check"` and `"typescript"`
  - `"vite"`