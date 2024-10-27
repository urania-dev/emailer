import Emailer from "./emailer/index.js";
export { default as Button } from "./comps/button.svelte";
export { default as Card } from "./comps/card.svelte";
export { default as Container } from "./comps/container.svelte";
export { default as Heading } from "./comps/heading.svelte";
export { default as Image } from "./comps/image.svelte";
export { default as Paragraph } from "./comps/paragraph.svelte";
export { default as Repeatable } from "./comps/repeatable.svelte";
export { inline } from "./utils/index.js";
export default Emailer;
/**
 * ### Emailer
 * Create a mail with the unstyled components and save it as a .svelte component.
 * Import said component serverside and instantiate the Emailer class.
 * Render html with emailer.render() and send it with your favorite mail client
 *
 * ```ts
 *  import Emailer from '@uraniadev/emailer';
 *  import Email from './email.svelte'
 *
 *  const emailer = new Emailer({...smtpConfig})
 *
 *  const html = emailer.render(email, {...props})
 *
 *  sendMail(email) // tested on nodemailer
 *
 * ```
 * #### The library comes with an utility to stylize component with tailwind and tw-to-css
 *
 * ```ts
 *  import {inline} from '@uraniadev/emailer'
 *
 *  <div style={inline('text-lg text-pink-500 font-bold')}>This is a formatted text</div>
 *
 * ```
 */
