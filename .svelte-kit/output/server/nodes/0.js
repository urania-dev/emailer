

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.SQxfFTqX.js","_app/immutable/chunks/disclose-version.WZ7vPAJO.js","_app/immutable/chunks/runtime.BfpIgs2Z.js"];
export const stylesheets = ["_app/immutable/assets/0.DnWfpnYj.css"];
export const fonts = [];
