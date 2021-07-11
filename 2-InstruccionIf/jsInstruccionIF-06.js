function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert(`sos mayor ya que tenes ${edad}`);
	} else {
		if (edad <= 17 && edad >= 13) {
			alert(`sos adolecente ya que tienes ${edad}`);
		} else {
			alert(`eres un niño porque tienes ${edad}`);
		} 
	}

}//FIN DE LA FUNCIÓN