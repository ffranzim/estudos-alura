


var atualizaDadosTela  = function () {
	var carrinhos = $(".carrinho");
	carrinhos.each(function() {
		var carrinho = $(this);
		var itens = carrinho.find(".valor-item-total:visible");
		var total = 0;

		$.each(itens, function () { //for do jQuery
			var item = $(this);	
				console.log(item.text());
				total = total + parseFloat(item.text());
			});	
	
		console.log("Valor total :" + total);
		carrinho.find(".valorTotal").text(total);
		console.log("Qtd :" + itens.length);
		carrinho.find(".qtdItens").text(itens.length);
	});

};

var removeItem = function (event) {
	event.preventDefault(); // evita que a pagina seja submetida
	var item = $(this);
	//item.parent().parent().remove();// chamando de maneira hierarquica
	//item.closest("tr").remove() // procurando o tr mais proximo
	item.closest("tr").hide(); // só esconde
	atualizaDadosTela();

	//Feito no atualizaDados	
	//var qtdItens = parseInt($("#qtdItens").text());
	//var novaQtdItens = qtdItens - 1;
	//$("#qtdItens").text(novaQtdItens);

	//var totalAtual = parseFloat($("#valorTotal").text());
	//console.log("total Atual: " + totalAtual);

	////var precoItemAtual = parseFloat(item.parent().prev().text()); //pega a td anterior, não usar pq o código fica atrelado a posiçãp
	////var precoItemAtual = parseFloat(item.closest("td").siblings(".valor-item-total").text()); //pega o irmão do td com o nome da classe
	//var precoItemAtual = parseFloat(item.closest("tr").find(".valor-item-total").text()); //procura nas filhas do tr alguem que tenha o nome da classe
	//console.log("Preco Item Atual: " + precoItemAtual);

	//var novoTotalAtual = totalAtual - precoItemAtual;
	//$("#valorTotal").text(novoTotalAtual);

};

var undo = function() {
	var carrinho = $(this).closest(".carrinho");
	carrinho.find("tr:visible").removeClass("recuperado"); //remove a classe recuperado de todos os visiveis
	var trs = carrinho.find("tr:hidden"); // só pega as escondidas(hide)
	trs.addClass("recuperado"); //adiciona classe
	trs.show();
	atualizaDadosTela();
}

var posLoad = function () {	  		
		atualizaDadosTela();
		$(".remove-item").click(removeItem);
		$(".desfazer").click(undo);
};

$(posLoad);

