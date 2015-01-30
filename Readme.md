
# each

  Array / object / string iteration utility.

## Installation

Install with [component](http://component.github.io):

    $ component install yiwn/each

Install with [npm](https://www.npmjs.org/) for [browserify](http://browserify.org/):

    $ npm install yiwn-each


## API

### each(array, fn[, ctx])

  Iterate an array:

```js
each([1,2,3], function(num, i){
  
})
```

  Optionally pass a context object:

```js
each([1,2,3], function(num, i){

}, this)
```

### each(object, fn[, ctx])

  Iterate an object's key / value pairs:

```js
each(conf, function(val, key){
  
})
```

  Iterate an array-ish object (has numeric `.length`):

```js
each(collection, function(val, i){
  
})
```

### each(string, fn[, ctx])

  Iterate a string's characters:

```js
each('hello', function(c, i){
  
})
```

# License

  MIT
