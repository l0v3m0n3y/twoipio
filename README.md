# twoipio
JavaScript library for 2ip.io
# main
```js
const {twoipio} = require('./twoipio');

const ip = new twoipio();
ip.ip_info().then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
