export default {
	entry: 'src/index.js',
	banner: '/** @module promise-toys */',
	targets: [
		{ dest: 'dist/index.es.js', format: 'es' },
		{ dest: 'dist/index.cjs.js', format: 'cjs' },
	],
};
