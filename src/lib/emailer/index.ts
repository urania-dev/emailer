import type { Component, ComponentProps } from "svelte";

import { inline } from "../index.js";
import { render } from "svelte/server";

export type HTMLConfig = {
  props: { [key: string]: string[] };
  dir: string;
  lang: string;
  style: string;
};

export default class Emailer {
  props: { [key: string]: string[] } = {
    html: [`style=${inline("bg-neutral-50 text-neutral-900 p-4 dark:bg-neutral-950 dark:text-neutral-50")}`],
    body: [`style=${inline("bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50")}`],
    container: [`style=${inline("max-w-[620px] mx-auto py-4")}`],
  };

  style = "";
  dir = "ltr";
  lang = "en";

  head = "";

  htmlBoilerplate = (children: string, head?: string, options?: HTMLConfig) => {
    const { props, dir, lang, style } = options ||
      { props: this.props, dir: this.dir, lang: this.lang, style: this.style };

    return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" ${props.html.join(" ")}>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }
    * {
      box-sizing: border-box;
      text-decoration: none;
      border: 0;
      padding: 0;
      margin: 0;
    }
    ${style}
  </style>
  ${head || this.head}
</head>
<body xml:lang="${lang}" ${props.body.join(" ")}>
  <div role="article" aria-roledescription="email" aria-label="email name" lang="${lang}" dir="${dir}" style="font-size: medium; font-size: max(16px, 1rem); ${inline("contents")
      }">
      <table ${props?.container.join(" ")}>
        <tbody><tr><td>${children}</td></tr></tbody>
        </table>
  </div>
</body>
</html>`;
  };

  // deno-lint-ignore no-explicit-any
  render = <T extends Component<any>>(
    component: T,
    props?: ComponentProps<T>,
    config?: HTMLConfig,
  ) => {
    const rendered = render(component as Component, { props });
    const html = this.htmlBoilerplate(
      rendered.body,
      rendered.head,
      config,
    );
    return html;
  };
}
