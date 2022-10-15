var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanhoFrase");

tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-digitalizacao");

campo.on("input", function(){

	var conteudo = campo.val();
	var quantidadeDePalavras = conteudo.split(/\S+/).length-1;

	$("#contador-palavras").text(quantidadeDePalavras);

	var quantidadeDeCaracteres = conteudo.length;

	$("#contador-caracteres").text(quantidadeDeCaracteres);

});

