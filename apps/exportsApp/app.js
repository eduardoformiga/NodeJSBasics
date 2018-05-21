const os = require('os');
const fs = require('fs');

// const mi = require('./formiga.js');

let cpu = os.cpus();
// let sistema = os.platform();
// let usuario = os.hostname();

// console.log(cpu);
// console.log(sistema);
// console.log(usuario);

let cpuString = JSON.stringify(cpu);
fs.appendFile('../data/formiga.txt', `Informações da CPU: ${cpuString}`, function(erro){
    if(erro){
        console.log('erro ao criar arquivo');
    }
});

// mi.ola();
// console.log(mi.inscritos);
// let resposta = mi.somar(10,5);

/* setTimeout(() => {
    console.log('terminou')
}, 2000); */

// let resposta = mi.mostrar(10, 5);
// console.log(resposta);

