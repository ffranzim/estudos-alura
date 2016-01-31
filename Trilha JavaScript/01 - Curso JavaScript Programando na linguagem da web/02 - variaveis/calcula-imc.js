var peso = 100;
var altura = 2.0;
var ehDiferenteDeZero = altura != 0;

if(ehDiferenteDeZero) {
	var imc = peso / (altura * altura);
	console.log(imc);
} else {
	console.log("Altura é igual 0");
}