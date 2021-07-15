function mostrar() {
  let destino = document.getElementById("txtIdDestino").value;

  /*   switch (destino) {
    case "Bariloche":
      alert("Punto cardinal oeste");
	  break;
    case "Mar del plata":
      alert("Punto cardinal este");
	  break;
    case "Ushuaia":
      alert("Punto cardinal Sur");
	  break;
    case "Cataratas":
      alert("Punto cardinal Norte");
  } */

  if (destino == "Bariloche") {
    alert("Oeste");
  } else if (destino == "Mar del Plata") {
    alert("Este");
  } else if (destino == "Ushuaia") {
    alert("Sur");
  } else {
    alert("Norte");
  }
} //FIN DE LA FUNCIÓN
