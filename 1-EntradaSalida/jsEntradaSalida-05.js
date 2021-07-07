/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
/* 	let nombre = document.getElementById("txtIdNombre").value;
	let edad = document.getElementById("txtIdEdad").value;

	alert("hola soy " + nombre + " y tengo " + edad + "años"); */
	/* Sda forma de una sola linea que hace lo mismo que la primera */
	alert ("Hola soy " + document.getElementById("txtIdNombre").value + " y tengo " + document.getElementById("txtIdEdad").value + " años"); 

}

