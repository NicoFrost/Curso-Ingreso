function mostrar() {
  let destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
      alert("Hace frio");
      break;
    case "Mar del Plata":
      alert("Hace calor");
      break;
    case "Ushuaia":
      alert("Hace Frio");
      break;
    case "Cataratas":
      alert("Hace calor");
  }
} //FIN DE LA FUNCIÓN
