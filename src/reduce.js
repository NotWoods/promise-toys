/**
 * Alias for `Promise.all().then(result => result.reduce())`
 * @param {Iterable|Promise<Iterable>} iterable
 * @param {function} reducer that takes
 * `accumulator`, `value`, `index`, and `array`.
 * @param {*} [initialValue]
 * @returns {Promise}
 */
export default function reduce(iterable, reducer, initialValue) {
	return Promise.all(iterable)
		.then(output => output.reduce(reducer, initialValue));
}
