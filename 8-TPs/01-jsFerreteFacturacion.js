/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{
    let price1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let price2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let price3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let sumaT

    sumaT = price1 + price2 + price3

    alert(`la facturacion total sera por ${sumaT}`)
}
function Promedio () 
{
    let price1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let price2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let price3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let promedio;

    promedio = (price1 + price2 + price3)/3;

    alert(promedio);
}
function PrecioFinal () 
{
    let price1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let price2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let price3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let precios = price1 + price2 + price3
    let preciosIVA

    preciosIVA = precios + precios*0.21

    IVA = preciosIVA - precios

    alert(`la suma de importes es de ${precios} mas 21% de IVA (${IVA}) nos queda un total a pagar de ${preciosIVA} `)
}