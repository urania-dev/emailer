import {
  A as I,
  a as z,
  B as $,
  C,
  c as p,
  D as A,
  e as Z,
  F as D,
  G as P,
  H as Y,
  h as S,
  I as E,
  i as x,
  J as B,
  j as ee,
  K as W,
  k as ne,
  L as T,
  M as y,
  N as q,
  n as N,
  O as F,
  P as G,
  p as X,
  Q as J,
  R as K,
  S as Q,
  U as re,
  V as te,
  W as se,
  w as U,
  x as j,
  y as V,
} from "./runtime.C2nfTmKA.js";
import { b as ae } from "./disclose-version.IDoPSmpq.js";
const ie = new Set(), L = new Set();
function g(e) {
  var O;
  var r = this,
    s = r.ownerDocument,
    n = e.type,
    u = ((O = e.composedPath) == null ? void 0 : O.call(e)) || [],
    t = u[0] || e.target,
    c = 0,
    b = e.__root;
  if (b) {
    var d = u.indexOf(b);
    if (d !== -1 && (r === document || r === window)) {
      e.__root = r;
      return;
    }
    var l = u.indexOf(r);
    if (l === -1) return;
    d <= l && (c = d);
  }
  if (t = u[c] || e.target, t !== r) {
    C(e, "currentTarget", {
      configurable: !0,
      get() {
        return t || s;
      },
    });
    var m = Y, o = V;
    A(null), D(null);
    try {
      for (var a, i = []; t !== null;) {
        var f = t.assignedSlot || t.parentNode || t.host || null;
        try {
          var _ = t["__" + n];
          if (_ !== void 0 && !t.disabled) {
            if (P(_)) {
              var [H, ...M] = _;
              H.apply(t, [e, ...M]);
            } else _.call(t, e);
          }
        } catch (v) {
          a ? i.push(v) : a = v;
        }
        if (e.cancelBubble || f === r || f === null) break;
        t = f;
      }
      if (a) {
        for (let v of i) {
          queueMicrotask(() => {
            throw v;
          });
        }
        throw a;
      }
    } finally {
      e.__root = r, delete e.currentTarget, A(m), D(o);
    }
  }
}
const ue = ["touchstart", "touchmove"];
function oe(e) {
  return ue.includes(e);
}
function _e(e, r) {
  var s = r == null ? "" : typeof r == "object" ? r + "" : r;
  s !== (e.__t ?? (e.__t = e.nodeValue)) &&
    (e.__t = s, e.nodeValue = s == null ? "" : s + "");
}
function fe(e, r) {
  return k(e, r);
}
function be(e, r) {
  E(), r.intro = r.intro ?? !1;
  const s = r.target, n = S, u = p;
  try {
    for (var t = j(s); t && (t.nodeType !== 8 || t.data !== B);) t = W(t);
    if (!t) throw T;
    y(!0), I(t), $();
    const c = k(e, { ...r, anchor: t });
    if (p === null || p.nodeType !== 8 || p.data !== q) throw F(), T;
    return y(!1), c;
  } catch (c) {
    if (c === T) return r.recover === !1 && G(), E(), J(s), y(!1), fe(e, r);
    throw c;
  } finally {
    y(n), I(u);
  }
}
const h = new Map();
function k(
  e,
  { target: r, anchor: s, props: n = {}, events: u, context: t, intro: c = !0 },
) {
  E();
  var b = new Set(),
    d = (o) => {
      for (var a = 0; a < o.length; a++) {
        var i = o[a];
        if (!b.has(i)) {
          b.add(i);
          var f = oe(i);
          r.addEventListener(i, g, { passive: f });
          var _ = h.get(i);
          _ === void 0
            ? (document.addEventListener(i, g, { passive: f }), h.set(i, 1))
            : h.set(i, _ + 1);
        }
      }
    };
  d(K(ie)), L.add(d);
  var l = void 0,
    m = Q(() => {
      var o = s ?? r.appendChild(U());
      return z(() => {
        if (t) {
          X({});
          var a = x;
          a.c = t;
        }
        u && (n.$$events = u),
          S && ae(o, null),
          l = e(o, n) || {},
          S && (V.nodes_end = p),
          t && Z();
      }),
        () => {
          var f;
          for (var a of b) {
            r.removeEventListener(a, g);
            var i = h.get(a);
            --i === 0
              ? (document.removeEventListener(a, g), h.delete(a))
              : h.set(a, i);
          }
          L.delete(d),
            R.delete(l),
            o !== s && ((f = o.parentNode) == null || f.removeChild(o));
        };
    });
  return R.set(l, m), l;
}
let R = new WeakMap();
function he(e) {
  const r = R.get(e);
  r && r();
}
function ce(e, r, s) {
  if (e == null) return r(void 0), N;
  const n = ee(() => e.subscribe(r, s));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
let w = !1;
function pe(e, r, s) {
  const n = s[r] ??
    (s[r] = { store: null, source: te(void 0), unsubscribe: N });
  if (n.store !== e) {
    if (n.unsubscribe(), n.store = e ?? null, e == null) {
      n.source.v = void 0, n.unsubscribe = N;
    } else {
      var u = !0;
      n.unsubscribe = ce(e, (t) => {
        u ? n.source.v = t : se(n.source, t);
      }), u = !1;
    }
  }
  return ne(n.source);
}
function ve() {
  const e = {};
  return re(() => {
    for (var r in e) e[r].unsubscribe();
  }),
    e;
}
function ye(e) {
  var r = w;
  try {
    return w = !1, [e(), w];
  } finally {
    w = r;
  }
}
export { _e as a, be as h, fe as m, he as u, pe as b, ve as s, ye as c };
