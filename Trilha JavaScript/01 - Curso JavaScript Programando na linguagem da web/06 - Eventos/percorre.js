function percorreArray2(nossosTrs, comportamento) {
    for(var posicaoDoTrAtual = 0; posicaoDoTrAtual <= nossosTrs.length - 1; posicaoDoTrAtual++) {
        var trDoPacienteAtual = nossosTrs[posicaoDoTrAtual];
        comportamento(trDoPacienteAtual); 
    }

}

function percorreArray(array, comportamento) {
	for(var posicaoAtual = 0; posicaoAtual < array.length; posicaoAtual++) {
		pacienteTr = trsPacientes[posicaoAtual];
		comportamento(pacienteTr);
	}	
}

