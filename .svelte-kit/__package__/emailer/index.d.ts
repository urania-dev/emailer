import type { Component, ComponentProps } from "svelte";
export default class Emailer {
    smtp: {
        host: string;
        port: number;
        secure: boolean;
        auth: {
            user: string;
            pass: string;
        };
    };
    props: {
        [key: string]: string[];
    };
    style: string;
    dir: string;
    lang: string;
    constructor(smtp?: {
        host: string;
        port: number;
        secure: boolean;
        auth: {
            user: string;
            pass: string;
        };
    });
    htmlBoilerplate: (children: string, props: {
        [key: string]: string[];
    }, dir?: string, lang?: string, style?: string) => string;
    render: <T extends Component<any>>(component: T, props: ComponentProps<T>) => string;
    sendMail: <T extends Component<any>>(component: T, props: ComponentProps<T>, from?: string, to?: string, subject?: string) => Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
}
