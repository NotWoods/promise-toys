/**
 * Promisifies a node.js callback style function.
 * @param {function} func
 * @returns {() => Promise} when invoked, returns a promise that resolves
 * once the inner function's callback is invoked.
 */
export default function promisify(func) {
	return (...args) => new Promise((resolve, reject) => {
		func(...args, (err, result) => {
			if (err) reject(err);
			else resolve(result);
		});
	});
}

/**
 * Promisifies every function in an object's iterable properties.
 * Useful for promisifing an entire module. Values that aren't functions
 * are skipped.
 * @param {Object} object
 * @returns {Object} copy where functions return promises
 */
export function promisifyModule(object) {
	return Object.keys(object).reduce((result, key) => {
		const value = object[key];
		result[key] = typeof value === 'function' ? promisify(value) : value;
		return result;
	}, {});
}

/**
 * Promisifies all the functions in an iterable.
 * @param {Iterable<function>} iterable
 * @returns {Array<function>}
 */
export function promisifyAll(iterable) {
	const result = [];
	for (const func of iterable) {
		if (typeof func !== 'function') {
			throw new TypeError('iterable must only contain functions');
		}
		result.push(promisify(func));
	}
	return result;
}
