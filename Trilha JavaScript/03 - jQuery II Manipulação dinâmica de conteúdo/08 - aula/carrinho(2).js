var umaPropaganda = function() {
	var propagandas =  ["O que acha de comprar uma moto?",
						"O que acha de comprar uma bike?",
						"O que acha de comprar uma ps4?",
						"O que acha de comprar uma xbox360?"
						];
	var posicao = Math.floor(propagandas.length * Math.random());
	var texto = propagandas[posicao];
	var tr = $("<tr>").addClass("propaganda").append($("<td>"));
	tr.find("td").attr("colspan", 6).text(texto);
	return tr;
}


var atualizaDadosTela  = function () {
	var carrinhos = $(".carrinho");
	carrinhos.each(function() {
		var carrinho = $(this);
		var itens = carrinho.find(".valor-item-total:visible");
		var total = 0;

		$.each(itens, function () { //for do jQuery
			var item = $(this);	
				total = total + parseFloat(item.text());
			});	
	
		carrinho.find(".valorTotal").text(total);
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

var daDestaque = function() {
	//$(this).css({"background": "#ccc", "opacity" : 0.5});
	$(this).find(".remove-item").fadeIn();
	$(this).addClass("hovering");
}; 

var tiraDestaque = function() {
	$(this).find(".remove-item").fadeOut();
	$(this).removeClass("hovering");
}; 

//var escondePropagandas = function(event) {
//	event.preventDefault(); // evita que a pagina seja submetida
//	//$(".propaganda").hide();
//	//$(".propaganda").fadeOut(5000);
//	$(".propaganda").toggle();
//};
//
//var mostraPropagandas = function(event) {
//	event.preventDefault(); // evita que a pagina seja submetida
//	//$(".propaganda").show();
//	//$(".propaganda").fadeIn(5000);
//	$(".propaganda").toggle();
//};

var alternaPropagandas = function(event) {
	event.preventDefault(); // evita que a pagina seja submetida
	//$(".propaganda").toggle();
	//$(".alternaPropaganda").toggle();
	$(".propaganda").fadeToggle(5000);
	$(".alternaPropaganda").fadeToggle(5000);
};

var posLoad = function () {	  		
	atualizaDadosTela();
	$(".remove-item").click(removeItem);
	$(".desfazer").click(undo);
	$(".carrinho").each(function () {
		$(this).find("tr:nth-child(3n), tr:last").each(function() {
			umaPropaganda().insertAfter($(this));

		});
	});
	//$("tr").on("mouseenter", daDestaque);
	//$("tr").on("mouseleave", tiraDestaque);
	$(".carrinho tbody tr").hover(daDestaque, tiraDestaque);
	//$("#escondePropagandas").click(escondePropagandas);
	//$("#mostraPropagandas").click(mostraPropagandas);
	$(".alternaPropaganda").click(alternaPropagandas);

};



$(posLoad);

