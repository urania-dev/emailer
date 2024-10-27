import Emailer from "./emailer/index.js";
export { default as Button } from "./comps/button.svelte";
export { default as Card } from "./comps/card.svelte";
export { default as Container } from "./comps/container.svelte";
export { default as Heading } from "./comps/heading.svelte";
export { default as Image } from "./comps/image.svelte";
export { default as Paragraph } from "./comps/paragraph.svelte";
export { default as Repeatable } from "./comps/repeatable.svelte";
export default Emailer;
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
