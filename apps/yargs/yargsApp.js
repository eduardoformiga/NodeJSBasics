const _ = require('lodash');
const argv = require('yargs').argv;

// console.log(argv);
// let comando = process.argv[2];

if (argv.usuario === 'Formiga') {
    let x = {
        "nombre": "Arya"
    }
    let y = {
        "apelido": "Ninguém"
    }
    let z = [{
        nome: "Tyrion",
        sobrenome: "Lannister",
        idade: 27
    }, {
        nome: "John",
        sobrenome: "Snow",
        idade: 31
    }]
    
    /* let resultado = _.assign(x,y);
    console.log(resultado); 

     _.times(3, ()=> console.log('Inscreva-se')); */

    let resultado = _.find(z, {
        nome: "Tyrion",
        sobrenome: 'Lannister'
    });
    console.log(resultado);
} else {
    console.log('Usuário Inválido');
} 