/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let anuncio_del_dia;

	anuncio_del_dia = prompt("¿Que anuncio hacemos hoy?");

	document.getElementById("txtIdNombre").value = anuncio_del_dia;

}

