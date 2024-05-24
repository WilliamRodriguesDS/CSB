function salariobruto(){

    const salario_base = parseFloat(document.getElementById('base').value);
    const gratificações  = parseFloat(document.getElementById('grat').value);
    const adicionais  = parseFloat(document.getElementById('add').value);
    const extras  = parseFloat(document.getElementById('extras').value);
    const por_hora = parseFloat(document.getElementById("hora").value);

    const resultado = salario_base + gratificações + adicionais + (extras * por_hora);
    document.getElementById('resultado').innerHTML= "R$" + " " + resultado.toFixed(2);
    }