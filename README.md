## NeutralinoJs

NeutralinoJs is a framework to develop apps with native functionalities and allows you to run inside web browsers. 

In electron and NWjs you have to install NodeJs, hundreds of dependence libraries and also the bundled app size is large even we write `hello world` due to embedded chromium and Node runtime. Neutralino is lightweight solution for this issue.

# Neutralino Client Library

This is `neutralino.js` source code written with Js and combined using webpack. client library sends kernal requests to Neutralino server with json content

## Contribution

Help Neutralino!.

- Start this.
- Fork and Clone this
- And do bug fixes or improvements and send us PR. We love it <3 

## Developer Guide

- Clone forked repository
- Install Node and webpack 

```bash
$ npm install
```

- Build combined `neutralino.js`

```bash
$ npm run build
```

**Example Function :** 

```js
Neutralino.os.getEnvar('path', 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```

__This function will call Neutralino server `os/getEnvar` with following json content__

```json
{
  "name" : "path"
}
```
