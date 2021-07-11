/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let tempF = parseInt(document.getElementById("txtIdTemperatura").value);
    let tempC

    tempC = tempF - 32

    alert(`la temperatura es de ${tempC}`)
}

function CentigradosFahrenheit () 
{
	let tempC = parseInt(document.getElementById("txtIdTemperatura").value);
    let tempF

    tempF = tempC + 32

    alert(`la temperatura es de ${tempF}`)
}
