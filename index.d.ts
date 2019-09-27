declare module 'find-config' {
	interface FindConfigOptions {
		cwd?: string; // default 'process.cwd()'
		dir?: string; // default '.config'
		dot?: boolean; // default false
		home?: boolean; // default true
		module?: boolean; // default false
	}

	interface ReadConfigOptions extends FindConfigOptions {
		encoding?: string // default 'utf-8'
		flag?: string // default 'r'
	}

	function findConfig(filename: string, options?: FindConfigOptions): string | null;

	namespace findConfig {
		function obj<T>(filename: string, options?: FindConfigOptions): T | null;
		function read(filename: string, options?: ReadConfigOptions): string | null;
		function require<T>(filename: string, options?: FindConfigOptions): T | null;

		export {
			obj,
			read,
			require,
		};
	}

	export default findConfig;
}
