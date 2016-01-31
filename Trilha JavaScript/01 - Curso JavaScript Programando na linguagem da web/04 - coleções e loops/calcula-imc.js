
var trsPacientes = document.getElementsByClassName("paciente");

//var posicaoAtual = 0;

//while(posicaoAtual < trsPacientes.length) {
for(var posicaoAtual = 0; posicaoAtual < trsPacientes.length; posicaoAtual++) {
	console.log("trsPacientes : " + trsPacientes.length);
	console.log("posicaoAtual : " + posicaoAtual);

	var pacienteTr = trsPacientes[posicaoAtual];
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];


	paciente = {
		"nome" : tdNome.textContent, 
		"peso" : tdPeso.textContent, 
		"altura" : tdAltura.textContent
	};

	if(paciente.altura != 0) {
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		tdImc.textContent = imc;
		console.log(imc);
	} else {
		console.log("Altura é igual 0");
	}

//	posicaoAtual++;
}

