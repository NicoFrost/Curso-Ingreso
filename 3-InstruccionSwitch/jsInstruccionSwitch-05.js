function mostrar() {
  //tomo la hora
  let hora = document.getElementById("txtIdHora").value;

  switch (hora) {
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
      alert("Es de Mañana");
      break;
    case "0700":
    case "0800":
    case "0900":
    case "1000":
    case "1100":
      alert("Es de Mañana");
      break;
    case "7:00":
    case "8:00":
    case "9:00":
    case "10:00":
    case "11:00":
      alert("Es de Mañana");
      break;
  }
} //FIN DE LA FUNCIÓN
