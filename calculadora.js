
// Classe calculadora
final = 0;
var Calculadora = function(){
	console.log('Calculadora da Copa Ativada...');
}

Calculadora.prototype.operacao = function(conta) {
	var resul = eval(conta);
	return resul;
};

function getNumero(numero){
	document.getElementById("visor").value += numero;
	final += numero;
}

function limpar() {
	document.getElementById("visor").value = "";
	final = 0;
};

function getop(op){
	final += op
	document.getElementById("visor").value = "";

}

function calcular(){
	var calculadora = new Calculadora();
	console.log(final);
	try {
		total = calculadora.operacao(final);
		document.getElementById("visor").value = total;
	} catch (error) {
		document.getElementById("visor").value = "ERRO";
	}
		
	final = total;

}

