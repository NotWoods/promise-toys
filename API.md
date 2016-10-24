<a name="module_promise-toys"></a>

## promise-toys

* [promise-toys](#module_promise-toys)
    * [~props(object)](#module_promise-toys..props) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [~entries(map)](#module_promise-toys..entries) ⇒ <code>Promise.&lt;Map&gt;</code>
    * [~map(iterable, mapper)](#module_promise-toys..map) ⇒ <code>Promise.&lt;Array&gt;</code>
    * [~reduce(iterable, reducer, [initialValue])](#module_promise-toys..reduce) ⇒ <code>Promise</code>

<a name="module_promise-toys..props"></a>

### promise-toys~props(object) ⇒ <code>Promise.&lt;Object&gt;</code>
Like `Promise.all` but for object property values instead of iterated values.

**Kind**: inner method of <code>[promise-toys](#module_promise-toys)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - object with same enumerable keys as the sourceobject, with values converted to their fulfilled values.  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_promise-toys..entries"></a>

### promise-toys~entries(map) ⇒ <code>Promise.&lt;Map&gt;</code>
Like `Promise.all` but awaits both the Map keys and values beforeresolving.

**Kind**: inner method of <code>[promise-toys](#module_promise-toys)</code>  
**Returns**: <code>Promise.&lt;Map&gt;</code> - map where the keys and values of the source mapobject are replaced by their fufilled values.Any object with a `.keys()` iterator and `.values()` iterator will workwith this function  

| Param | Type |
| --- | --- |
| map | <code>Map</code> | 

<a name="module_promise-toys..map"></a>

### promise-toys~map(iterable, mapper) ⇒ <code>Promise.&lt;Array&gt;</code>
Alias for `Promise.all().then(result => result.map())`

**Kind**: inner method of <code>[promise-toys](#module_promise-toys)</code>  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Iterable</code> &#124; <code>Promise.&lt;Iterable&gt;</code> |  |
| mapper | <code>function</code> | that takes parameters `value`, `index`, and `array` |

<a name="module_promise-toys..reduce"></a>

### promise-toys~reduce(iterable, reducer, [initialValue]) ⇒ <code>Promise</code>
Alias for `Promise.all().then(result => result.reduce())`

**Kind**: inner method of <code>[promise-toys](#module_promise-toys)</code>  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Iterable</code> &#124; <code>Promise.&lt;Iterable&gt;</code> |  |
| reducer | <code>function</code> | that takes `accumulator`, `value`, `index`, and `array`. |
| [initialValue] | <code>\*</code> |  |

