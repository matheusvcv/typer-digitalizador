var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanhoFrase");

tamanhoFrase.text(numeroPalavras);

console.log(tamanhoFrase);

