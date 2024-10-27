import Emailer from "$lib/emailer/index.js";

export { default as Button } from "$lib/comps/button.svelte";
export { default as Card } from "$lib/comps/card.svelte";
export { default as Container } from "$lib/comps/container.svelte";
export { default as Heading } from "$lib/comps/heading.svelte";
export { default as Image } from "$lib/comps/image.svelte";
export { default as Paragraph } from "$lib/comps/paragraph.svelte";
export { default as Repeatable } from "$lib/comps/repeatable.svelte";

export default Emailer;

// Example
/**
 * Create a mail with the unstyled components and save it as a .svelte component.
 * Import said component serverside and instantiate the Emailer class.
 * Render html with emailer.render() or render and send it with emailer.sendMail()
 *
 *  ```
 *  import Emailer from '@uraniadev/emailer';
 *  import Email from './email.svelte'
 *
 *  const emailer = new Emailer({...smtpConfig})
 *
 *  const html = emailer.render(email, {...props})
 *
 *  const log = emailer.sendMail(email, {...props})
 *
 * ```
 */
