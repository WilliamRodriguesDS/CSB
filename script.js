function escrever(mensagem){
    let output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function iniciarCalculo(){
    let salario_base = parseFloat(document.querySelector('#base').value);
    let gratificações  = parseFloat(document.querySelector('#gratificações').value)
    let adicionais  = parseFloat(document.querySelector('#adicionais').value)
    let extras = parseFloat(document.querySelector('#extras').value);
    let por_hora = parseFloat(document.querySelector('#hora').value);
 
    calcular(salario_base,gratificações,adicionais,extras,por_hora);
}

function calcular(salario_base,gratificações,adicionais,extras,por_hora){

    let resultado = (salario_base + gratificações + adicionais + (extras * por_hora));

    escrever("R$ " + resultado);
    }