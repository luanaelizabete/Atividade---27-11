function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
 
    var media = (nota1 + nota2) / 2;
    document.getElementById('resultadoMedia').innerText = `Média: ${media.toFixed(2)}`;
    var textResultado = document.getElementById('textResultado');

    if (isNaN(media) || media < 0 || media > 10) {
        textResultado.innerText = "Por favor, insira uma média válida entre 0 e 10!";
        return;
    }

    else if (media < 5) {
        textResultado.innerText = 'Situação: Reprovado!';
    } else if (media >= 5 && media < 8) {
        textResultado.innerText = 'Situação: Aprovado!';
    } else {
        textResultado.innerText = 'Situação: Aprovado com destaque!';
    }
}