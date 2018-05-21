let prom = require('./promise')

prom.calcular(5,3).then((resultado) =>{
    console.log(resultado);
}, (error) => {
    console.log(error);
});

/* let promise = new Promise((resolve, reject) => {
    // resolve('Exito ao processar os dados!');
    reject('Existe um erro!');
});

promise.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
}); */