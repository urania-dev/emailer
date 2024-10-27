import { env } from "$env/dynamic/private";
import Email from "$lib/email.svelte";
import type { Actions } from "@sveltejs/kit";
import Emailer from "@uraniadev/emailer";
import nodemailer, { type TransportOptions } from 'nodemailer'
export const actions: Actions = {
    default: async () => {

        const emailer = new Emailer()

        const smtp = nodemailer.createTransport({
            host: env.SMTP_HOST,
            port: env.SMTP_PORT,
            tls: true,
            auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS
            }
        } as TransportOptions)

        const items = [{
            name: 'item 1',
        }, {
            name: 'item 2'
        }]

        try {
            await smtp.verify()
            const html = emailer.render(Email, {
                items
            })
            console.log(html)
            await smtp.sendMail({
                html,
                to: "mirko.isaia@gmail.com",
                from: env.SMTP_USER,
                subject: 'Test'
            })

        } catch (error) {
            console.error(error)
        }
    }
}