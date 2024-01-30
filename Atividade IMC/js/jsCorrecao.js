const botaoCalcularImc = document.querySelector('.btn-calcular');

botaoCalcularImc.addEventListener('click', () => {
    const nome = document.querySelector('.input-nome').value;
    const peso = parseFloat(document.querySelector('.input-peso').value.replace(',', '.'));
    const altura = parseFloat(document.querySelector('.input-altura').value.replace(',', '.'));

    let imc = calcularIMC(peso, altura);
    let grauObesidade = verificarGrauObesidade(imc);
    mensagem = `${nome}, seu IMC é ${imc}! ${grauObesidade}`;
    //adicionando uma nova classe dinamicamente através de javascript
    //usar modo removed para remover
    document.querySelector('.paragrafo-resultado').classList.add = ('destaque');
    document.querySelector('.paragrafo-resultado').innerHTML = mensagem;
});

function calcularIMC(peso, altura) {
    return imc = (peso / altura ** 2).toFixed(2);
}

function verificarGrauObesidade(imc) {
    if (imc < 18.5) {
        return 'Magreza - grau: 0';
    } else if (imc < 25) {
        return 'Normal - grau: 0';
    } else if (imc < 30) {
        return 'Sobrepeso - grau: 1';
    } else if (imc < 40) {
        return 'Obesidade - grau: 2';
    } else {
        return 'Obesidade Grave - grau: 3';
    }
}


