var trsPacientes = document.getElementsByClassName("paciente");

percorreArray2(trsPacientes, function (pacienteTr) {
	console.log(pacienteTr.getElementsByClassName("info-nome")[0].textContent);
});	
	

