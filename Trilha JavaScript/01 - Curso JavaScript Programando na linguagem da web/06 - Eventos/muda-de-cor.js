var trs = document.getElementsByTagName("tr");

percorreArray2(trs, function(trAtual) {
	trAtual.addEventListener("mouseover", function() {
	//trAtual.addEventListener("click", function() {
	//trAtual.addEventListener("dblclick", function() {
		//this.setAttribute("bgcolon", "grey");
		this.style.backgroundColor = "grey";
	})
});