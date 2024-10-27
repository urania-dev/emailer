import { a as p, c as s } from "../chunks/disclose-version.IDoPSmpq.js";
import {
  a as c,
  b as f,
  c as u,
  d as h,
  E as i,
  e as _,
  f as v,
  h as m,
  n as d,
  p as l,
} from "../chunks/runtime.C2nfTmKA.js";
function y(t, a, ...n) {
  var e = t, o = d, r;
  f(() => {
    o !== (o = a()) && (r && (h(r), r = null), r = c(() => o(e, ...n)));
  }, i), m && (e = u);
}
function T(t, a) {
  l(a, !0);
  var n = s(), e = v(n);
  y(e, () => a.children), p(t, n), _();
}
export { T as component };
