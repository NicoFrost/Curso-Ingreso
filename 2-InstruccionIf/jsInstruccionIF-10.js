function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero 
	let max = 10
	let min = 1

	numero = Math.floor(Math.random()*(max - min + 1) + min);

	//determinar que mensaje mostrar segun el numero random
	if (numero < 4) {
		alert(numero + ", Vamos, la proxima se puede");
	} else if (numero < 8 && numero >= 4) {
		alert(numero + ", APROBADO");
	} else {
		alert (numero + " EXCELENTE");
	}

}//FIN DE LA FUNCIÓN