let calcular = (numero1, numero2) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let soma = numero1 + numero2;
            if(soma > 5){
                res(soma);
            }else{
                rej('Numeros menores que 5');
            } 
        }, 2000);
    })
};

module.exports = {
    calcular
}