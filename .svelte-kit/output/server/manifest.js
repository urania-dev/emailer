export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.BMHpd1RR.js","app":"_app/immutable/entry/app.Ijg8C5pz.js","imports":["_app/immutable/entry/start.BMHpd1RR.js","_app/immutable/chunks/entry.Du5CPeN0.js","_app/immutable/chunks/runtime.C2nfTmKA.js","_app/immutable/entry/app.Ijg8C5pz.js","_app/immutable/chunks/runtime.C2nfTmKA.js","_app/immutable/chunks/store.BT5g8edJ.js","_app/immutable/chunks/disclose-version.IDoPSmpq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
