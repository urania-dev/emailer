
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DRIVERDATA: string;
	export const EFC_10360: string;
	export const INIT_CWD: string;
	export const HOMEDRIVE: string;
	export const LOCALAPPDATA: string;
	export const npm_lifecycle_event: string;
	export const npm_config_node_gyp: string;
	export const npm_node_execpath: string;
	export const PUBLIC: string;
	export const APPDATA: string;
	export const NDK_HOME: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const ALLUSERSPROFILE: string;
	export const OPENSSL_DIR: string;
	export const PATHEXT: string;
	export const SESSIONNAME: string;
	export const OPENSSL_INCLUDE_DIR: string;
	export const ONEDRIVE: string;
	export const HOMEPATH: string;
	export const npm_config_cache: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const JAVA_HOME: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const CHOCOLATEYLASTPATHUPDATE: string;
	export const npm_config_userconfig: string;
	export const npm_config_npm_version: string;
	export const WINDIR: string;
	export const EDITOR: string;
	export const npm_command: string;
	export const PROGRAMFILES: string;
	export const SYSTEMDRIVE: string;
	export const HOME: string;
	export const npm_package_name: string;
	export const OPENSSL_LIB_DIR: string;
	export const USERPROFILE: string;
	export const OPENSSL_CONF: string;
	export const PSMODULEPATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const COLOR: string;
	export const PATH: string;
	export const ANDROID_HOME: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const npm_config_global_prefix: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const GIT_ASKPASS: string;
	export const npm_execpath: string;
	export const LANG: string;
	export const npm_config_user_agent: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const npm_config_local_prefix: string;
	export const COMSPEC: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const COMMONPROGRAMFILES: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const TEMP: string;
	export const CHOCOLATEYINSTALL: string;
	export const COLORTERM: string;
	export const PROCESSOR_REVISION: string;
	export const npm_lifecycle_script: string;
	export const npm_package_json: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const SYSTEMROOT: string;
	export const COMMONPROGRAMW6432: string;
	export const COMPUTERNAME: string;
	export const NODE: string;
	export const npm_package_version: string;
	export const PWD: string;
	export const USERNAME: string;
	export const VSCODE_INJECTION: string;
	export const NVM_HOME: string;
	export const PROCESSOR_LEVEL: string;
	export const npm_config_globalconfig: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const PROGRAMW6432: string;
	export const OS: string;
	export const npm_config_prefix: string;
	export const PNPM_HOME: string;
	export const LOGONSERVER: string;
	export const PROMPT: string;
	export const npm_config_init_module: string;
	export const NVM_SYMLINK: string;
	export const PROGRAMDATA: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DRIVERDATA: string;
		EFC_10360: string;
		INIT_CWD: string;
		HOMEDRIVE: string;
		LOCALAPPDATA: string;
		npm_lifecycle_event: string;
		npm_config_node_gyp: string;
		npm_node_execpath: string;
		PUBLIC: string;
		APPDATA: string;
		NDK_HOME: string;
		VSCODE_GIT_IPC_HANDLE: string;
		ALLUSERSPROFILE: string;
		OPENSSL_DIR: string;
		PATHEXT: string;
		SESSIONNAME: string;
		OPENSSL_INCLUDE_DIR: string;
		ONEDRIVE: string;
		HOMEPATH: string;
		npm_config_cache: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		JAVA_HOME: string;
		TMP: string;
		USERDOMAIN: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		CHOCOLATEYLASTPATHUPDATE: string;
		npm_config_userconfig: string;
		npm_config_npm_version: string;
		WINDIR: string;
		EDITOR: string;
		npm_command: string;
		PROGRAMFILES: string;
		SYSTEMDRIVE: string;
		HOME: string;
		npm_package_name: string;
		OPENSSL_LIB_DIR: string;
		USERPROFILE: string;
		OPENSSL_CONF: string;
		PSMODULEPATH: string;
		TERM_PROGRAM_VERSION: string;
		COLOR: string;
		PATH: string;
		ANDROID_HOME: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		npm_config_global_prefix: string;
		PROCESSOR_IDENTIFIER: string;
		GIT_ASKPASS: string;
		npm_execpath: string;
		LANG: string;
		npm_config_user_agent: string;
		VBOX_MSI_INSTALL_PATH: string;
		npm_config_local_prefix: string;
		COMSPEC: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		COMMONPROGRAMFILES: string;
		NUMBER_OF_PROCESSORS: string;
		PROCESSOR_ARCHITECTURE: string;
		TEMP: string;
		CHOCOLATEYINSTALL: string;
		COLORTERM: string;
		PROCESSOR_REVISION: string;
		npm_lifecycle_script: string;
		npm_package_json: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		SYSTEMROOT: string;
		COMMONPROGRAMW6432: string;
		COMPUTERNAME: string;
		NODE: string;
		npm_package_version: string;
		PWD: string;
		USERNAME: string;
		VSCODE_INJECTION: string;
		NVM_HOME: string;
		PROCESSOR_LEVEL: string;
		npm_config_globalconfig: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		PROGRAMW6432: string;
		OS: string;
		npm_config_prefix: string;
		PNPM_HOME: string;
		LOGONSERVER: string;
		PROMPT: string;
		npm_config_init_module: string;
		NVM_SYMLINK: string;
		PROGRAMDATA: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
