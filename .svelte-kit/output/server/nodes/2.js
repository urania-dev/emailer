

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7WknJonx.js","_app/immutable/chunks/disclose-version.WZ7vPAJO.js","_app/immutable/chunks/runtime.BfpIgs2Z.js"];
export const stylesheets = [];
export const fonts = [];
