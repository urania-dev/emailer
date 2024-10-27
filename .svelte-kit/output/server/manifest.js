export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CcWI_eye.js","app":"_app/immutable/entry/app.pXlyTntu.js","imports":["_app/immutable/entry/start.CcWI_eye.js","_app/immutable/chunks/entry.C48Df-dx.js","_app/immutable/chunks/runtime.BfpIgs2Z.js","_app/immutable/entry/app.pXlyTntu.js","_app/immutable/chunks/runtime.BfpIgs2Z.js","_app/immutable/chunks/store.OrG4-IQo.js","_app/immutable/chunks/disclose-version.WZ7vPAJO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
