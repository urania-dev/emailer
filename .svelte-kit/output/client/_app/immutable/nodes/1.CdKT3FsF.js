import { a as d, t as v } from "../chunks/disclose-version.IDoPSmpq.js";
import {
  e as w,
  f as E,
  g as p,
  i as $,
  j as x,
  k as _,
  l as k,
  m as y,
  o as j,
  p as q,
  q as l,
  r as u,
  s as g,
  t as S,
  u as h,
  v as z,
} from "../chunks/runtime.C2nfTmKA.js";
import { a as b, b as B, s as A } from "../chunks/store.BT5g8edJ.js";
import { s as C } from "../chunks/entry.CHZ625qw.js";
function D(s = !1) {
  const e = $, t = e.l.u;
  if (!t) return;
  let n = () => y(e.s);
  if (s) {
    let a = 0, r = {};
    const f = j(() => {
      let i = !1;
      const c = e.s;
      for (const o in c) c[o] !== r[o] && (r[o] = c[o], i = !0);
      return i && a++, a;
    });
    n = () => _(f);
  }
  t.b.length && h(() => {
    m(e, n), u(t.b);
  }),
    p(() => {
      const a = x(() => t.m.map(k));
      return () => {
        for (const r of a) typeof r == "function" && r();
      };
    }),
    t.a.length && p(() => {
      m(e, n), u(t.a);
    });
}
function m(s, e) {
  if (s.l.s) { for (const t of s.l.s) _(t); }
  e();
}
const F = () => {
    const s = C;
    return {
      page: { subscribe: s.page.subscribe },
      navigating: { subscribe: s.navigating.subscribe },
      updated: s.updated,
    };
  },
  G = {
    subscribe(s) {
      return F().page.subscribe(s);
    },
  };
var H = v("<h1> </h1> <p> </p>", 1);
function M(s, e) {
  q(e, !1);
  const t = A(), n = () => B(G, "$page", t);
  D();
  var a = H(), r = E(a), f = l(r, !0);
  g(r);
  var i = z(r, 2), c = l(i, !0);
  g(i),
    S(() => {
      var o;
      b(f, n().status), b(c, (o = n().error) == null ? void 0 : o.message);
    }),
    d(s, a),
    w();
}
export { M as component };
