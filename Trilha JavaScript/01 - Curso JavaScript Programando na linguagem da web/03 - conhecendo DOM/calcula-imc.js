
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");


var paciente = {
	"peso" : tdPeso.textContent, 
	"altura" : tdAltura.textContent
};

if(paciente.altura != 0) {
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	console.log(imc);
	var tdImc = document.getElementById("imc-2");
	tdImc.textContent = imc;
} else {
	console.log("Altura é igual 0");
}



