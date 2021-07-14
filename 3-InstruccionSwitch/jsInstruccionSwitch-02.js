function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;

  switch (mesDelAño) {
    case "Agosto":
    case "Julio":
      alert("Abrigate que hace frio");
      break;
    case "Septiembre":
    case "Noviembre":
    case "Octubre":
    case "Diciembre":
      alert("Ya pasamos el frio, ahora calor!!!");
      break;
    default:
      alert("Falta para el invierno");
      break;
  }
  
} //FIN DE LA FUNCIÓN
