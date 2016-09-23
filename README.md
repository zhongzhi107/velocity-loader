## Velocity loader for [webpack](https://webpack.github.io/)

### Install

```sh
$ npm install velocity-loader
```

### Usage

```javascript
module: {
    loaders: [ {
        test: /\.vm$/,
        loader: 'velocity'
    } ]
}
```

```javascript
var template = require('./template.vm');
var html = template.fetch({ foo: 'bar' });
```

### License
MIT (http://www.opensource.org/licenses/mit-license.php)
