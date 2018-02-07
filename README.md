## ava

```
$ npm init
$ npm install ava babel babel-core babel-preset-es2015 --save-dev 
```

```js:package.json
{
    ...
    
    "ava" {
        "required": "babel-register",
        "babel": "inherit"
    },
    
    ...
}
```

```js:.babelrc
{
    "presets": ["es2015"]
}
```