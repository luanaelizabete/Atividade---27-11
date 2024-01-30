function calcularIMC() {
    let nome = document.getElementsByClassName('input-nome')[0].value;
    let peso = parseFloat(document.getElementsByClassName('input-peso')[0].value);
    let altura = parseFloat(document.getElementsByClassName('input-altura')[0].value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let imcResultado = (peso / altura ** 2).toFixed(2);
    console.log(imcResultado);

    let textResultado = `${nome}, seu IMC é ${imcResultado}! Resultado: `;

    if (imcResultado < 18.5) {
        textResultado += "Magreza, grau de Obesidade: 0";
    } else if (imcResultado < 25) {
        textResultado += "Normal, grau de Obesidade: 0";
    } else if (imcResultado < 30) {
        textResultado += "Sobrepeso, grau de Obesidade: 1";
    } else if (imcResultado < 40) {
        textResultado += "Obesidade, grau de Obesidade: 2";
    } else {
        textResultado += "Obesidade Grave, grau de Obesidade: 3";
    }

    let paragrafosResultado = document.getElementsByClassName("paragrafo-resultado");
    for (let i = 0; i < paragrafosResultado.length; i++) {
        paragrafosResultado[i].textContent = textResultado;
    }
}



//saída
// let mensagem='$(nomeUsuario). seu IMC é ${resultadoIMC}! Resultado: ${nivelObesidade};
//let mensagem2='sou um texto ${nomeUsuario}';
//document.querySelector('.resultado').innerHTML=mensagem;