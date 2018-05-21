// console.log(module);

/* function ola() {
    console.log('Olá galera');
} */

let inscritos = 2001;

/* module.exports.ola = function ola() {
    console.log('Olá galera');
}; */

// module.exports.sus = inscritos;

module.exports = {
    inscritos : inscritos,
    ola : () => {
        // code 1
        // code 2
        console.log('olá galera!');
    },
    somar : (a,b) =>  a + b,
    mostrar : a => a + 10
    
}
