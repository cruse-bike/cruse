export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.193b7850.js","app":"_app/immutable/entry/app.6fd130b8.js","imports":["_app/immutable/entry/start.193b7850.js","_app/immutable/chunks/main-client.3c111379.js","_app/immutable/chunks/runtime.e09db590.js","_app/immutable/chunks/singletons.10644159.js","_app/immutable/chunks/index.56af5967.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.6fd130b8.js","_app/immutable/chunks/runtime.e09db590.js","_app/immutable/chunks/disclose-version.e3436084.js","_app/immutable/chunks/main-client.3c111379.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
