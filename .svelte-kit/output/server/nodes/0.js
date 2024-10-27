

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DmHw2-lj.js","_app/immutable/chunks/disclose-version.IDoPSmpq.js","_app/immutable/chunks/runtime.C2nfTmKA.js"];
export const stylesheets = [];
export const fonts = [];
