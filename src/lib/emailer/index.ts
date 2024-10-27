import type { Component, ComponentProps } from "svelte";

import { inline } from "$lib/utils/index.js";
import { render } from "svelte/server";

export default class Emailer {
  props: { [key: string]: string[] } = {
    html: [`style=${inline("bg-neutral-50 text-neutral-900 p-4")}`],
    body: [`style=${inline("bg-neutral-50 text-neutral-900")}`],
    container: [`style=${inline("max-w-[620px] mx-auto py-4")}`],
  };

  style = "";
  dir = "ltr";
  lang = "en";


  htmlBoilerplate = (
    children: string,
    props: { [key: string]: string[] },
    dir = "ltr",
    lang = "en",
    style: string = "",
  ) => {
    return `<!doctype html> 
    <html ${props?.html.join(" ")} dir=${dir} lang=${lang}> 
    <head> 
      <style>*{box-sizing:border-box;text-decoration:none;border:0;padding:0;margin:0;}${style}</style>
    </head> 
    <body ${props?.body.join(" ")}> 
      <table ${props?.container.join(" ")}>
        <tbody><tr><td>${children}</td></tr></tbody>
      </table>
    <body> 
    </html>`;
  };

  // eslint-disable-next-line ts/no-explicit-any
  render = <T extends Component<any>>(
    component: T,
    props: ComponentProps<T>,
  ) => {
    const rendered = render(component as Component, { props });

    const html = this.htmlBoilerplate(
      rendered.body,
      this.props,
      this.dir,
      this.lang,
      this.style,
    );
    return html;
  };
}
