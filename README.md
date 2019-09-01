# Delta

[![shield](https://img.shields.io/badge/version-v.1-brightgreen.svg)](https://github.com/quadroloop/delta)
[![delta app](https://quadroloop.github.io/bobaux/delta.png)](https://github.com/quadroloop/delta)
> __Delta__ is a viewport test terminal to parse data recieved from different devices, it uses web sockets, to instantly visualize data it recieves from a source, which could be an embedded device, a web application,etc.

### How to use:
1.) clone the repository or download it.
```sh
git clone https://github.com/quadroloop/delta
```
2.) run delta.
``` sh
cd delta
node app.js
```
3.) Go to your browser and navigate __http://localhost:3000__ to display the UI.
4.) to send data to delta, from __another device__, you need to be sure that the device and your machine running delta is on the __same__ network, and be sure to replace localhost with the IP Address of the machine running the delta application. 
5.) __Sending Data__ to delta.
```js
// in the same machine using browser url bar,postman or cURL
http://localhost:3000/delta/?data=[1,2,3,4,5]

// from a different device where `192.168.1.8` is the IP Address of the computer running delta.
http://192.168.1.8:3000/delta/?data=[1,2,3,4,5]

// via js using axios
axios.get('http://192.168.1.8:3000/delta/?data=[1,2,3,4,5]')
.then(res=>{
    console.log(res.data);
});

```

if sending is successful, the response will be __Delta:ok__ hence if not the reponse will be __Delta: Incomplete parameters__ to avoid this error, just dont forget to send data using the __data__ URL parameter as shown in the examples above.


