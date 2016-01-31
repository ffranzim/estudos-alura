function percorreArray(array, comportamento) {
	for(var posicaoAtual = 0; posicaoAtual < array.length; posicaoAtual++) {
		comportamento(pacienteTr = trsPacientes[posicaoAtual]);
	}	
}

function preenchePaciente() {
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

	return pacienteAtual = {
		"nome" : tdNome.textContent, 
		"peso" : tdPeso.textContent, 
		"altura" : tdAltura.textContent,
		"tdImc" :	tdImc,
		"calculaImc" : function() {
			if(this.altura != 0) {
				return this.peso / (this.altura * this.altura);
			} else {
				console.log("Altura é igual 0");
			}
		}};
}