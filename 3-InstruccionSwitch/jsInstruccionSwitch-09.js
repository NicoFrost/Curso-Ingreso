function mostrar() {
  let precio = 15000;
  let Estacionaño = document.getElementById("txtIdEstacion").value;
  let destino = document.getElementById("txtIdDestino").value;
  let PrecioFinal;
  let aumento = 0;
  let descuento = 0;

  switch (Estacionaño) {
    case "Invierno":
      if (destino == "Bariloche") {
        aumento = precio * .2;

      } else if (destino == "Cataratas" || destino == "Cordoba") {
        descuento = precio * .1;

      } else {
        descuento = precio * .2;
      }
	  break;
    case "Verano":
      if (destino == "Bariloche") {
        //desc 20%
        descuento = precio * .2;

      } else if (destino == "Cataratas" || destino == "Cordoba") {
        //aumento 10%
        aumento = precio * .1;

      } else {
        //aumento 20%
        aumento = precio * .2;

      }
	  break;
    case "Otoño":
    case "Primavera":
      if (destino != "Cordoba") {
        //base
        aumento = precio * .2;
      }
  }
  

  PrecioFinal = precio + aumento - descuento;
  alert(`El precio final a pagar sera de ${PrecioFinal}`);
} //FIN DE LA FUNCIÓN
