const fs = require('fs');

console.log('iniciado');

// Async
/* fs.readFile('../data/data.txt', 'UTF-8', (erro, data) => {
    if(erro){
        console.log(`Error ${erro}`);
    }else{
        console.log(data);
    }
}); */

// Sync
// let data = fs.readFileSync('../data/data.txt', 'UTF-8');
// console.log(data);



/* fs.rename('../data/data.txt', '../data/data_rename.txt', (erro) => {
    if(erro) throw erro;
    console.log('Renomeado!');
}); */

/* fs.appendFile('../data/data.txt', '\nObrigado por se inscrever', (error) => {
    if(error) console.log(`Error ${error}`);
});

fs.unlink('../data/data2.txt', (error)=>{
    if(error) throw error;
    console.log('Eliminado!')
}); */

// fs.createReadStream('../data/data.txt').pipe(fs.createWriteStream('../data/data3.txt'));

// Assync
/* fs.readdir('../data/', (error, files) => {
    files.forEach(file => {
        console.log(file);
    });
}); */

// Sync
fs.readdirSync('../data/').forEach(file => {
        console.log(file);
});

console.log('finalizado');