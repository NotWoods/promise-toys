/**
 * Alias for `Promise.all().then(result => result.map())`
 * @param {Iterable|Promise<Iterable>} iterable
 * @param {function} mapper that takes parameters `value`, `index`, and `array`
 * @returns {Promise<Array>}
 */
export default function map(iterable, mapper) {
	return Promise.all(iterable).then(output => output.map(mapper));
}
