let mensagem = "Debugando Coder!";

function saldar(){
    debugger;
    console.log(mensagem);
}

module.exports = {
    saldar: saldar
}