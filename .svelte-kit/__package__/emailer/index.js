import { inline } from "../utils/index.js";
import { render } from "svelte/server";
export default class Emailer {
    props = {
        html: [`style=${inline("bg-neutral-50 text-neutral-900 p-4")}`],
        body: [`style=${inline("bg-neutral-50 text-neutral-900")}`],
        container: [`style=${inline("max-w-[620px] mx-auto py-4")}`],
    };
    style = "";
    dir = "ltr";
    lang = "en";
    head = "";
    htmlBoilerplate = (children, head, options) => {
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
    // eslint-disable-next-line ts/no-explicit-any
    render = (component, props, config) => {
        const rendered = render(component, { props });
        console.log("==>", rendered);
        const html = this.htmlBoilerplate(rendered.body, rendered.head, config);
        return html;
    };
}
