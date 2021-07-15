function mostrar() {
  //tomo el mes
  let mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Febrero":
      alert("Tiene 28 dias");
      break;
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Octubre":
    case "Agosto":
    case "Diciembre":
      alert("TIene 31 dias");
      break;
    default:
		alert("Tiene 30 dias")
  }
} //FIN DE LA FUNCIÓN
