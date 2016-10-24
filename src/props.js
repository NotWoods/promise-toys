/**
 * Like `Promise.all` but for object property values instead of iterated values.
 * @param {Object} object
 * @returns {Promise<Object>} object with same enumerable keys as the source
 * object, with values converted to their fulfilled values.
 */
export default function props(object) {
	const keys = Object.keys(object);
	const entries = keys.map(key => object[key]);
	return Promise.all(entries)
		.then(values => values.reduce((result, value, i) => {
			/* eslint-disable no-param-reassign */
			result[keys[i]] = value;
			return result;
		}));
}
