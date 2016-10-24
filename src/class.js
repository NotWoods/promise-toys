import props from './props.js';
import entries from './entries.js';
import map from './map.js';
import reduce from './reduce.js';

export default class PromiseToy extends Promise {}

function resolve(func) {
	return (...args) => PromiseToy.resolve(func(...args));
}

function bind(func) {
	return (...rest) =>
		PromiseToy.resolve(this).then(result => func(result, ...rest));
}

PromiseToy.props = resolve(props);
PromiseToy.entries = resolve(entries);
PromiseToy.prototype.map = bind(map);
PromiseToy.prototype.reduce = bind(reduce);
