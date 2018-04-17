# neutralino-client-library

### File System

#### CreateDirectory(directory, successCallback, errorCallback);

```Javascript
Neutralino.filesystem.createDirectory('C:\\testabc',
  (response) => {
    console.log(response)
  },
  () => {
    console.log('error')
  }
);
```
