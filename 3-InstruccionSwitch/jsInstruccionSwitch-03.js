function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
			alert("este mes no tiene mas de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 o mas dias");
	}


}//FIN DE LA FUNCIÓN