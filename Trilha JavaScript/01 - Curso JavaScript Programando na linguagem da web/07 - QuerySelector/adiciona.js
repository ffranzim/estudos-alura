//var tabela = document.getElementsTagName('table')[0];
//document.querySelectorAll("table"); // retorna um array;

var botao = document.querySelector("#adicionar-paciente"); // sharp # indica que estou selecionando por id



botao.addEventListener("click", function(event) {

	event.preventDefault(); // impede comportamento padrão, que no form seria submeter ao clicar no botão
	
	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	var pacienteNovo =  "<tr class='paciente'>" +
							"<td class='info-nome'>" + campoNome.value + "</td>" +
							"<td class='info-peso'>"+ campoPeso.value + "</td>" +
							"<td class='info-altura'>" + campoAltura.value + "</td>" +
							"<td class='info-imc'></td>" +
						"</tr>";

	var tabela = document.querySelector("table"); // retorna o primeiroElemento
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	campoNome = "";
	campoPeso = "";
	campoAltura = "";

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