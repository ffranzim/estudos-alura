var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function(pacienteTr) {
		var paciente =  preenchePaciente();
		var imc = paciente.calculaImc();
		paciente.tdImc.textContent = imc;
		console.log(imc);
});

