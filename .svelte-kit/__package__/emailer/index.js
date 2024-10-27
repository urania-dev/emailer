import { error } from "@sveltejs/kit";
import { inline } from "../utils/index.js";
import nodemailer from "nodemailer";
import { render } from "svelte/server";
export default class Emailer {
    smtp;
    props = {
        html: [`style=${inline("bg-neutral-50 text-neutral-900 p-4")}`],
        body: [`style=${inline("bg-neutral-50 text-neutral-900")}`],
        container: [`style=${inline("max-w-[620px] mx-auto py-4")}`],
    };
    style = "";
    dir = "ltr";
    lang = "en";
    constructor(smtp = {
        host: "smtp.example.com",
        port: 465,
        secure: true,
        auth: {
            user: "user",
            pass: "password",
        },
    }) {
        this.smtp = smtp;
    }
    htmlBoilerplate = (children, props, dir = "ltr", lang = "en", style = "") => {
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
    render = (component, props) => {
        const rendered = render(component, { props });
        const html = this.htmlBoilerplate(rendered.body, this.props, this.dir, this.lang, this.style);
        return html;
    };
    // eslint-disable-next-line ts/no-explicit-any
    sendMail = async (component, props, from = "info@example.com", to = "recipient@example.com", subject = "Mail Subject") => {
        const smtp = nodemailer.createTransport(this.smtp);
        const email = this.render(component, props);
        try {
            return await smtp.sendMail({
                from,
                to,
                subject,
                html: email,
            });
        }
        catch (e) {
            console.error(e);
            throw error(500);
        }
    };
}
