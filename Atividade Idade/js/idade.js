function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const caixaResultado = document.getElementById('resultado');

    if (isNaN(idade) || idade <= 0) {
        caixaResultado.value = "Por favor, insira uma idade válida!";
        return;
    }

    if (idade < 18) {
        caixaResultado.value = "Você é menor de idade!";
    } else if (idade >= 18 && idade <= 25) {
        caixaResultado.value = "Você é jovem!";
    } else if (idade > 25 && idade <= 45) {
        caixaResultado.value = "Você é jovem adulto!";
    } else if (idade > 45 && idade <= 60) {
        caixaResultado.value = "Você é adulto!";
    } else {
        caixaResultado.value = "Você está na terceira idade!";
    }
}

