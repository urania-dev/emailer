import { B as push, E as pop } from "../../chunks/index.js";
function Layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export { Layout as default };
