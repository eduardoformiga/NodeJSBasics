const _ = require('lodash');

let comando = process.argv[2];

if(comando === 'usuario'){
    if(process.argv[3] === 'Formiga'){
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
        console.log(resultado); */
        
        // _.times(3, ()=> console.log('Inscreva-se'));
        
        let resultado = _.find(z, {nome: "Tyrion", sobrenome: 'Lannister'});
        console.log(resultado);
    }else{
        console.log('Usuário Inválido');
    }
}

