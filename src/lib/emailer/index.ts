import type { Component, ComponentProps } from "svelte";

import { error } from "@sveltejs/kit";
import { inline } from "$lib/utils/index.js";
import nodemailer from "nodemailer";
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

  constructor(
    public smtp = {
      host: "smtp.example.com",
      port: 465,
      secure: true,
      auth: {
        user: "user",
        pass: "password",
      },
    },
  ) { }

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

  // eslint-disable-next-line ts/no-explicit-any
  sendMail = async <T extends Component<any>>(
    component: T,
    props: ComponentProps<T>,
    from = "info@example.com",
    to = "recipient@example.com",
    subject = "Mail Subject",
  ) => {
    const smtp = nodemailer.createTransport(this.smtp);
    const email = this.render(component, props);

    try {
      return await smtp.sendMail({
        from,
        to,
        subject,
        html: email,
      });
    } catch (e) {
      console.error(e);
      throw error(500);
    }
  };
}
