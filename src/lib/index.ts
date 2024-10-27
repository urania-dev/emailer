import Emailer from "$lib/emailer/index.js";

export { default as Button } from "$lib/comps/button.svelte";
export { default as Card } from "$lib/comps/card.svelte";
export { default as Container } from "$lib/comps/container.svelte";
export { default as Heading } from "$lib/comps/heading.svelte";
export { default as Image } from "$lib/comps/image.svelte";
export { default as Paragraph } from "$lib/comps/paragraph.svelte";
export { default as Repeatable } from "$lib/comps/repeatable.svelte";

export { inline } from "$lib/utils/index.js";

export default Emailer;

// Example
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
