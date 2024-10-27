var Tn = Array.isArray,
  mn = Array.from,
  An = Object.defineProperty,
  ot = Object.getOwnPropertyDescriptor,
  Ht = Object.getOwnPropertyDescriptors,
  gn = Object.prototype,
  Rn = Array.prototype,
  Ut = Object.getPrototypeOf;
const Sn = () => {};
function xn(t) {
  return t();
}
function Bt(t) {
  for (var n = 0; n < t.length; n++) t[n]();
}
const T = 2,
  _t = 4,
  M = 8,
  tt = 16,
  y = 32,
  G = 64,
  x = 128,
  B = 256,
  p = 512,
  R = 1024,
  j = 2048,
  I = 4096,
  Y = 8192,
  Vt = 16384,
  ct = 32768,
  Dn = 65536,
  Kt = 1 << 18,
  vt = 1 << 19,
  ut = Symbol("$state");
function pt(t) {
  return t === this.v;
}
function $t(t, n) {
  return t != t
    ? n == n
    : t !== n || t !== null && typeof t == "object" || typeof t == "function";
}
function ht(t) {
  return !$t(t, this.v);
}
function Gt(t) {
  throw new Error("effect_in_teardown");
}
function Zt() {
  throw new Error("effect_in_unowned_derived");
}
function Wt(t) {
  throw new Error("effect_orphan");
}
function zt() {
  throw new Error("effect_update_depth_exceeded");
}
function kn() {
  throw new Error("hydration_failed");
}
function On(t) {
  throw new Error("props_invalid_value");
}
function In() {
  throw new Error("state_descriptors_fixed");
}
function Nn() {
  throw new Error("state_prototype_fixed");
}
function Jt() {
  throw new Error("state_unsafe_local_read");
}
function Qt() {
  throw new Error("state_unsafe_mutation");
}
function nt(t) {
  return { f: 0, v: t, reactions: null, equals: pt, version: 0 };
}
function Pn(t) {
  return Xt(nt(t));
}
function bn(t, n = !1) {
  var e;
  const r = nt(t);
  return n || (r.equals = ht),
    f !== null && f.l !== null && ((e = f.l).s ?? (e.s = [])).push(r),
    r;
}
function Xt(t) {
  return a !== null && a.f & T && (d === null ? vn([t]) : d.push(t)), t;
}
function Cn(t, n) {
  return a !== null && st() && a.f & (T | tt) &&
    (d === null || !d.includes(t)) && Qt(),
    tn(t, n);
}
function tn(t, n) {
  return t.equals(n) ||
    (t.v = n,
      t.version = Ft(),
      dt(t, R),
      st() && u !== null && u.f & p && !(u.f & y) &&
      (_ !== null && _.includes(t)
        ? (E(u, R), W(u))
        : g === null
        ? pn([t])
        : g.push(t))),
    n;
}
function dt(t, n) {
  var r = t.reactions;
  if (r !== null) {
    for (var e = st(), s = r.length, l = 0; l < s; l++) {
      var o = r[l], i = o.f;
      i & R || !e && o === u ||
        (E(o, n), i & (p | x) && (i & T ? dt(o, j) : W(o)));
    }
  }
}
const Fn = 1,
  qn = 2,
  Ln = 4,
  Mn = 8,
  jn = 16,
  Yn = 1,
  Hn = 2,
  nn = "[",
  rn = "[!",
  en = "]",
  yt = {},
  Un = Symbol();
function Et(t) {
  console.warn("hydration_mismatch");
}
let N = !1;
function Bn(t) {
  N = t;
}
let m;
function F(t) {
  if (t === null) throw Et(), yt;
  return m = t;
}
function Vn() {
  return F(P(m));
}
function Kn(t) {
  if (N) {
    if (P(m) !== null) throw Et(), yt;
    m = t;
  }
}
function $n() {
  for (var t = 0, n = m;;) {
    if (n.nodeType === 8) {
      var r = n.data;
      if (r === en) {
        if (t === 0) return n;
        t -= 1;
      } else (r === nn || r === rn) && (t += 1);
    }
    var e = P(n);
    n.remove(), n = e;
  }
}
var at, wt, Tt;
function Gn() {
  if (at === void 0) {
    at = window;
    var t = Element.prototype, n = Node.prototype;
    wt = ot(n, "firstChild").get,
      Tt = ot(n, "nextSibling").get,
      t.__click = void 0,
      t.__className = "",
      t.__attributes = null,
      t.__styles = null,
      t.__e = void 0,
      Text.prototype.__t = void 0;
  }
}
function z(t = "") {
  return document.createTextNode(t);
}
function J(t) {
  return wt.call(t);
}
function P(t) {
  return Tt.call(t);
}
function Zn(t, n) {
  if (!N) return J(t);
  var r = J(m);
  if (r === null) r = m.appendChild(z());
  else if (n && r.nodeType !== 3) {
    var e = z();
    return r == null || r.before(e), F(e), e;
  }
  return F(r), r;
}
function Wn(t, n) {
  if (!N) {
    var r = J(t);
    return r instanceof Comment && r.data === "" ? P(r) : r;
  }
  return m;
}
function zn(t, n = 1, r = !1) {
  let e = N ? m : t;
  for (; n--;) e = P(e);
  if (!N) return e;
  var s = e.nodeType;
  if (r && s !== 3) {
    var l = z();
    return e == null || e.before(l), F(l), l;
  }
  return F(e), e;
}
function Jn(t) {
  t.textContent = "";
}
function sn(t) {
  var n = T | R;
  u === null ? n |= x : u.f |= vt;
  const r = {
    children: null,
    ctx: f,
    deps: null,
    equals: pt,
    f: n,
    fn: t,
    reactions: null,
    v: null,
    version: 0,
    parent: u,
  };
  if (a !== null && a.f & T) {
    var e = a;
    (e.children ?? (e.children = [])).push(r);
  }
  return r;
}
function Qn(t) {
  const n = sn(t);
  return n.equals = ht, n;
}
function mt(t) {
  var n = t.children;
  if (n !== null) {
    t.children = null;
    for (var r = 0; r < n.length; r += 1) {
      var e = n[r];
      e.f & T ? rt(e) : C(e);
    }
  }
}
function At(t) {
  var n, r = u;
  $(t.parent);
  try {
    mt(t), n = qt(t);
  } finally {
    $(r);
  }
  return n;
}
function gt(t) {
  var n = At(t), r = (D || t.f & x) && t.deps !== null ? j : p;
  E(t, r), t.equals(n) || (t.v = n, t.version = Ft());
}
function rt(t) {
  mt(t),
    L(t, 0),
    E(t, Y),
    t.v =
      t.children =
      t.deps =
      t.ctx =
      t.reactions =
        null;
}
function Rt(t) {
  u === null && a === null && Wt(), a !== null && a.f & x && Zt(), et && Gt();
}
function ln(t, n) {
  var r = n.last;
  r === null ? n.last = n.first = t : (r.next = t, t.prev = r, n.last = t);
}
function b(t, n, r, e = !0) {
  var s = (t & G) !== 0,
    l = u,
    o = {
      ctx: f,
      deps: null,
      deriveds: null,
      nodes_start: null,
      nodes_end: null,
      f: t | R,
      first: null,
      fn: n,
      last: null,
      next: null,
      parent: s ? null : l,
      prev: null,
      teardown: null,
      transitions: null,
      version: 0,
    };
  if (r) {
    var i = k;
    try {
      it(!0), Z(o), o.f |= Vt;
    } catch (c) {
      throw C(o), c;
    } finally {
      it(i);
    }
  } else n !== null && W(o);
  var w = r && o.deps === null && o.first === null && o.nodes_start === null &&
    o.teardown === null && (o.f & vt) === 0;
  if (!w && !s && e && (l !== null && ln(o, l), a !== null && a.f & T)) {
    var A = a;
    (A.children ?? (A.children = [])).push(o);
  }
  return o;
}
function Xn(t) {
  const n = b(M, null, !1);
  return E(n, p), n.teardown = t, n;
}
function tr(t) {
  Rt();
  var n = u !== null && (u.f & y) !== 0 && f !== null && !f.m;
  if (n) {
    var r = f;
    (r.e ?? (r.e = [])).push({ fn: t, effect: u, reaction: a });
  } else {
    var e = St(t);
    return e;
  }
}
function nr(t) {
  return Rt(), on(t);
}
function rr(t) {
  const n = b(G, t, !0);
  return () => {
    C(n);
  };
}
function St(t) {
  return b(_t, t, !1);
}
function on(t) {
  return b(M, t, !0);
}
function er(t) {
  return un(t);
}
function un(t, n = 0) {
  return b(M | tt | n, t, !0);
}
function sr(t, n = !0) {
  return b(M | y, t, !0, n);
}
function xt(t) {
  var n = t.teardown;
  if (n !== null) {
    const r = et, e = a;
    ft(!0), K(null);
    try {
      n.call(null);
    } finally {
      ft(r), K(e);
    }
  }
}
function Dt(t) {
  var n = t.deriveds;
  if (n !== null) {
    t.deriveds = null;
    for (var r = 0; r < n.length; r += 1) rt(n[r]);
  }
}
function kt(t, n = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null;) {
    var e = r.next;
    C(r, n), r = e;
  }
}
function an(t) {
  for (var n = t.first; n !== null;) {
    var r = n.next;
    n.f & y || C(n), n = r;
  }
}
function C(t, n = !0) {
  var r = !1;
  if ((n || t.f & Kt) && t.nodes_start !== null) {
    for (var e = t.nodes_start, s = t.nodes_end; e !== null;) {
      var l = e === s ? null : P(e);
      e.remove(), e = l;
    }
    r = !0;
  }
  Dt(t), kt(t, n && !r), L(t, 0), E(t, Y);
  var o = t.transitions;
  if (o !== null) { for (const w of o) w.stop(); }
  xt(t);
  var i = t.parent;
  i !== null && i.first !== null && Ot(t),
    t.next =
      t.prev =
      t.teardown =
      t.ctx =
      t.deps =
      t.parent =
      t.fn =
      t.nodes_start =
      t.nodes_end =
        null;
}
function Ot(t) {
  var n = t.parent, r = t.prev, e = t.next;
  r !== null && (r.next = e),
    e !== null && (e.prev = r),
    n !== null &&
    (n.first === t && (n.first = e), n.last === t && (n.last = r));
}
function lr(t, n) {
  var r = [];
  It(t, r, !0),
    fn(r, () => {
      C(t), n && n();
    });
}
function fn(t, n) {
  var r = t.length;
  if (r > 0) {
    var e = () => --r || n();
    for (var s of t) s.out(e);
  } else n();
}
function It(t, n, r) {
  if (!(t.f & I)) {
    if (t.f ^= I, t.transitions !== null) {
      for (const o of t.transitions) (o.is_global || r) && n.push(o);
    }
    for (var e = t.first; e !== null;) {
      var s = e.next, l = (e.f & ct) !== 0 || (e.f & y) !== 0;
      It(e, n, l ? r : !1), e = s;
    }
  }
}
function or(t) {
  Nt(t, !0);
}
function Nt(t, n) {
  if (t.f & I) {
    t.f ^= I, H(t) && Z(t);
    for (var r = t.first; r !== null;) {
      var e = r.next, s = (r.f & ct) !== 0 || (r.f & y) !== 0;
      Nt(r, s ? n : !1), r = e;
    }
    if (t.transitions !== null) {
      for (const l of t.transitions) (l.is_global || n) && l.in();
    }
  }
}
let V = !1, Q = [];
function Pt() {
  V = !1;
  const t = Q.slice();
  Q = [], Bt(t);
}
function ur(t) {
  V || (V = !0, queueMicrotask(Pt)), Q.push(t);
}
function _n() {
  V && Pt();
}
const bt = 0, cn = 1;
let U = bt, q = !1, k = !1, et = !1;
function it(t) {
  k = t;
}
function ft(t) {
  et = t;
}
let S = [], O = 0;
let a = null;
function K(t) {
  a = t;
}
let u = null;
function $(t) {
  u = t;
}
let d = null;
function vn(t) {
  d = t;
}
let _ = null, h = 0, g = null;
function pn(t) {
  g = t;
}
let Ct = 0, D = !1, f = null;
function Ft() {
  return ++Ct;
}
function st() {
  return f !== null && f.l === null;
}
function H(t) {
  var o, i;
  var n = t.f;
  if (n & R) return !0;
  if (n & j) {
    var r = t.deps, e = (n & x) !== 0;
    if (r !== null) {
      var s;
      if (n & B) {
        for (s = 0; s < r.length; s++) {
          ((o = r[s]).reactions ?? (o.reactions = [])).push(t);
        }
        t.f ^= B;
      }
      for (s = 0; s < r.length; s++) {
        var l = r[s];
        if (
          H(l) && gt(l),
            e && u !== null && !D &&
            !((i = l == null ? void 0 : l.reactions) != null &&
              i.includes(t)) &&
            (l.reactions ?? (l.reactions = [])).push(t),
            l.version > t.version
        ) return !0;
      }
    }
    e || E(t, p);
  }
  return !1;
}
function hn(t, n, r) {
  throw t;
}
function qt(t) {
  var lt;
  var n = _, r = h, e = g, s = a, l = D, o = d, i = f, w = t.f;
  _ = null,
    h = 0,
    g = null,
    a = w & (y | G) ? null : t,
    D = !k && (w & x) !== 0,
    d = null,
    f = t.ctx;
  try {
    var A = (0, t.fn)(), c = t.deps;
    if (_ !== null) {
      var v;
      if (L(t, h), c !== null && h > 0) {
        for (c.length = h + _.length, v = 0; v < _.length; v++) {
          c[h + v] = _[v];
        }
      } else t.deps = c = _;
      if (!D) {
        for (
          v = h;
          v < c.length;
          v++
        ) ((lt = c[v]).reactions ?? (lt.reactions = [])).push(t);
      }
    } else c !== null && h < c.length && (L(t, h), c.length = h);
    return A;
  } finally {
    _ = n, h = r, g = e, a = s, D = l, d = o, f = i;
  }
}
function dn(t, n) {
  let r = n.reactions;
  if (r !== null) {
    var e = r.indexOf(t);
    if (e !== -1) {
      var s = r.length - 1;
      s === 0 ? r = n.reactions = null : (r[e] = r[s], r.pop());
    }
  }
  r === null && n.f & T && (_ === null || !_.includes(n)) &&
    (E(n, j), n.f & (x | B) || (n.f ^= B), L(n, 0));
}
function L(t, n) {
  var r = t.deps;
  if (r !== null) { for (var e = n; e < r.length; e++) dn(t, r[e]); }
}
function Z(t) {
  var n = t.f;
  if (!(n & Y)) {
    E(t, p);
    var r = u;
    u = t;
    try {
      Dt(t), n & tt ? an(t) : kt(t), xt(t);
      var e = qt(t);
      t.teardown = typeof e == "function" ? e : null, t.version = Ct;
    } catch (s) {
      hn(s);
    } finally {
      u = r;
    }
  }
}
function Lt() {
  O > 1e3 && (O = 0, zt()), O++;
}
function Mt(t) {
  var n = t.length;
  if (n !== 0) {
    Lt();
    var r = k;
    k = !0;
    try {
      for (var e = 0; e < n; e++) {
        var s = t[e];
        s.f & p || (s.f ^= p);
        var l = [];
        jt(s, l), yn(l);
      }
    } finally {
      k = r;
    }
  }
}
function yn(t) {
  var n = t.length;
  if (n !== 0) {
    for (var r = 0; r < n; r++) {
      var e = t[r];
      !(e.f & (Y | I)) && H(e) &&
        (Z(e),
          e.deps === null && e.first === null && e.nodes_start === null &&
          (e.teardown === null ? Ot(e) : e.fn = null));
    }
  }
}
function En() {
  if (q = !1, O > 1001) return;
  const t = S;
  S = [], Mt(t), q || (O = 0);
}
function W(t) {
  U === bt && (q || (q = !0, queueMicrotask(En)));
  for (var n = t; n.parent !== null;) {
    n = n.parent;
    var r = n.f;
    if (r & (G | y)) {
      if (!(r & p)) return;
      n.f ^= p;
    }
  }
  S.push(n);
}
function jt(t, n) {
  var r = t.first, e = [];
  t: for (; r !== null;) {
    var s = r.f, l = (s & y) !== 0, o = l && (s & p) !== 0;
    if (!o && !(s & I)) {
      if (s & M) {
        l ? r.f ^= p : H(r) && Z(r);
        var i = r.first;
        if (i !== null) {
          r = i;
          continue;
        }
      } else s & _t && e.push(r);
    }
    var w = r.next;
    if (w === null) {
      let v = r.parent;
      for (; v !== null;) {
        if (t === v) break t;
        var A = v.next;
        if (A !== null) {
          r = A;
          continue t;
        }
        v = v.parent;
      }
    }
    r = w;
  }
  for (var c = 0; c < e.length; c++) i = e[c], n.push(i), jt(i, n);
}
function Yt(t) {
  var n = U, r = S;
  try {
    Lt();
    const s = [];
    U = cn, S = s, q = !1, Mt(r);
    var e = t == null ? void 0 : t();
    return _n(), (S.length > 0 || s.length > 0) && Yt(), O = 0, e;
  } finally {
    U = n, S = r;
  }
}
async function ar() {
  await Promise.resolve(), Yt();
}
function ir(t) {
  var i;
  var n = t.f, r = (n & T) !== 0;
  if (r && n & Y) {
    var e = At(t);
    return rt(t), e;
  }
  if (a !== null) {
    d !== null && d.includes(t) && Jt();
    var s = a.deps;
    _ === null && s !== null && s[h] === t
      ? h++
      : _ === null
      ? _ = [t]
      : _.push(t),
      g !== null && u !== null && u.f & p && !(u.f & y) && g.includes(t) &&
      (E(u, R), W(u));
  } else if (r && t.deps === null) {
    var l = t, o = l.parent;
    o !== null && !((i = o.deriveds) != null && i.includes(l)) &&
      (o.deriveds ?? (o.deriveds = [])).push(l);
  }
  return r && (l = t, H(l) && gt(l)), t.v;
}
function fr(t) {
  const n = a;
  try {
    return a = null, t();
  } finally {
    a = n;
  }
}
const wn = ~(R | j | p);
function E(t, n) {
  t.f = t.f & wn | n;
}
function _r(t, n = !1, r) {
  f = { p: f, c: null, e: null, m: !1, s: t, x: null, l: null },
    n || (f.l = { s: null, u: null, r1: [], r2: nt(!1) });
}
function cr(t) {
  const n = f;
  if (n !== null) {
    const o = n.e;
    if (o !== null) {
      var r = u, e = a;
      n.e = null;
      try {
        for (var s = 0; s < o.length; s++) {
          var l = o[s];
          $(l.effect), K(l.reaction), St(l.fn);
        }
      } finally {
        $(r), K(e);
      }
    }
    f = n.p, n.m = !0;
  }
  return {};
}
function vr(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (ut in t) X(t);
    else if (!Array.isArray(t)) {
      for (let n in t) {
        const r = t[n];
        typeof r == "object" && r && ut in r && X(r);
      }
    }
  }
}
function X(t, n = new Set()) {
  if (
    typeof t == "object" && t !== null && !(t instanceof EventTarget) &&
    !n.has(t)
  ) {
    n.add(t), t instanceof Date && t.getTime();
    for (let e in t) {
      try {
        X(t[e], n);
      } catch {}
    }
    const r = Ut(t);
    if (
      r !== Object.prototype && r !== Array.prototype && r !== Map.prototype &&
      r !== Set.prototype && r !== Date.prototype
    ) {
      const e = Ht(r);
      for (let s in e) {
        const l = e[s].get;
        if (l) {
          try {
            l.call(t);
          } catch {}
        }
      }
    }
  }
}
export {
  $ as F,
  $n as a5,
  $t as aq,
  _r as p,
  a as H,
  An as C,
  ar as ao,
  Bn as M,
  bn as V,
  Bt as r,
  C as d,
  Cn as W,
  cr as e,
  ct as E,
  Dn as ac,
  en as N,
  er as t,
  Et as O,
  F as A,
  f as i,
  Fn as ah,
  fr as j,
  G as ag,
  Gn as I,
  gn as Y,
  Hn as z,
  ht as ae,
  In as $,
  ir as k,
  J as x,
  Jn as Q,
  jn as am,
  K as D,
  Kn as s,
  kn as P,
  Ln as ad,
  lr as a7,
  m as c,
  Mn as aj,
  mn as R,
  N as h,
  Nn as a2,
  nn as J,
  nr as u,
  nt as _,
  On as ab,
  on as a9,
  or as a6,
  ot as a1,
  P as K,
  Pn as ap,
  Qn as ak,
  qn as ai,
  Rn as Z,
  rn as a4,
  rr as S,
  Sn as n,
  sn as o,
  sr as a,
  St as a8,
  Tn as G,
  tr as g,
  u as y,
  Un as a0,
  un as b,
  ur as aa,
  Ut as a3,
  ut as X,
  Vn as B,
  vr as m,
  Wn as f,
  Xn as U,
  xn as l,
  Y as al,
  y as af,
  Yn as T,
  Yt as an,
  yt as L,
  z as w,
  Zn as q,
  zn as v,
};
