var botao = document.getElementById("calcula-imcs");

botao.addEventListener("click", function () { 
	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray2(trsPacientes, function(pacienteTr) {

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

	pacienteAtual = {
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

			var imc = pacienteAtual.calculaImc();
			pacienteAtual.tdImc.textContent = imc;
			console.log(imc);
	});

});
