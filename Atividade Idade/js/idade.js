function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(idade) || idade <= 0) {
        resultado.textContent = "Por favor, insira uma idade que seja válida!";
        return;
    }

    if (idade < 18) {
        resultado.textContent = "Você é um menor de idade!";
    } else if (idade >= 18 && idade <= 25) {
        resultado.textContent = "Você é um jovem!";
    } else if (idade > 25 && idade <= 45) {
        resultado.textContent = "Você é um jovem adulto!";
    } else if (idade > 45 && idade <= 60) {
        resultado.textContent = "Você é um adulto!";
    } else {
        resultado.textContent = "Você está na terceira idade!";
    }
}