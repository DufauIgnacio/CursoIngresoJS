/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let descuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);
	descuento = importe * 0.25;
	resultado = importe - descuento;
	txtIdResultado.value = resultado;

 

}
/* 2) resultado = importe - (importe * 25/100) pierdo el dato de descuento;
   3) decuento = importe * 25/100
   4) resultado = importe * 0.75


   puedo guardar el porcentaje en una variable
   porcentaje = 25
   descuento = importe * porcentaje/100
   si el descuento es ingresado por prompt
   porcentaje = prompt ("Ingrese el porcentaje de descuento")
   */


/*txtIdImporte
txtIdResultado*/