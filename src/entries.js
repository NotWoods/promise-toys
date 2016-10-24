/**
 * Like `Promise.all` but awaits both the Map keys and values before
 * resolving.
 * @param {Map} map
 * @returns {Promise<Map>} map where the keys and values of the source map
 * object are replaced by their fufilled values.
 * Any object with a `.keys()` iterator and `.values()` iterator will work
 * with this function
 */
export default function entries(map) {
	return Promise.all([...map.keys(), ...map.values()]).then((output) => {
		const result = new Map();
		const half = output.length / 2;
		for (let i = 0; i < half; i += 1) {
			result.set(output[i], output[i + half]);
		}
		return result;
	});
}
