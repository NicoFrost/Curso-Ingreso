function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18 ) {
		alert(`ya que tiene ${edad} podemos decir que es mayor`);
	} else {
		alert(`como tiene ${edad} es menor de edad`)
	}

}//FIN DE LA FUNCIÓN