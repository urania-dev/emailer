export const manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }

  return {
    appDir: "_app",
    appPath: "_app",
    assets: new Set([]),
    mimeTypes: {},
    _: {
      client: {
        "start": "_app/immutable/entry/start.GUImXnHm.js",
        "app": "_app/immutable/entry/app.NUsZcItC.js",
        "imports": [
          "_app/immutable/entry/start.GUImXnHm.js",
          "_app/immutable/chunks/entry.CHZ625qw.js",
          "_app/immutable/chunks/runtime.C2nfTmKA.js",
          "_app/immutable/entry/app.NUsZcItC.js",
          "_app/immutable/chunks/runtime.C2nfTmKA.js",
          "_app/immutable/chunks/store.BT5g8edJ.js",
          "_app/immutable/chunks/disclose-version.IDoPSmpq.js",
        ],
        "stylesheets": [],
        "fonts": [],
        "uses_env_dynamic_public": false,
      },
      nodes: [
        __memo(() => import("./nodes/0.js")),
        __memo(() => import("./nodes/1.js")),
      ],
      routes: [],
      matchers: async () => {
        return {};
      },
      server_assets: {},
    },
  };
})();
