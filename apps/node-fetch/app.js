const fetch = require('node-fetch');

let promise = fetch('https://api.github.com/users/eduardoformiga');
promise.then((res) => {
    return res.json();
}).then((json)=>{
    console.log(json);
});