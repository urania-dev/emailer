export const index = 1;
let component_cache;
export const component = async () =>
  component_cache ??=
    (await import("../entries/fallbacks/error.svelte.js")).default;
export const imports = [
  "_app/immutable/nodes/1.CdKT3FsF.js",
  "_app/immutable/chunks/disclose-version.IDoPSmpq.js",
  "_app/immutable/chunks/runtime.C2nfTmKA.js",
  "_app/immutable/chunks/store.BT5g8edJ.js",
  "_app/immutable/chunks/entry.CHZ625qw.js",
];
export const stylesheets = [];
export const fonts = [];
