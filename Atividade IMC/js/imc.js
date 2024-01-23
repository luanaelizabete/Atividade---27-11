function calcularIMC() {
    let nome = document.getElementById('nome').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let imc = peso / (altura ** 2);
    let imcResultado = imc.toFixed(2);

    let textResultado = `${nome}, seu IMC é ${imcResultado}! Resultado: `;

    if (imc < 18.5) {
        textResultado += "Magreza, grau de Obesidade: 0";
    } else if (imc < 25) {
        textResultado += "Normal, grau de Obesidade: 0";
    } else if (imc < 30) {
        textResultado += "Sobrepeso, grau de Obesidade: 1";
    } else if (imc < 40) {
        textResultado += "Obesidade, grau de Obesidade: 2";
    } else {
        textResultado += "Obesidade Grave, grau de Obesidade: 3";
    }

    document.getElementById("resultado").textContent = textResultado;
}