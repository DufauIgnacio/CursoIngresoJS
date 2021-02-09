/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  let ancho;
  let largo;
  let perimetro;
  let totalalambre;

  ancho = txtIdAncho.value;
  largo = txtIdLargo.value;

  ancho = parseFloat(ancho);
  largo = parseFloat(largo);

  perimetro = (ancho + largo) * 2;

  totalalambre = perimetro * 3;

 alert ("Se necesitan comprar " + totalalambre + " metros de alambre");
}
function Circulo () 
{
	let circunferencia;
	let radio;
	let alambre;
    let pi;

    radio = txtIdRadio.value;
    radio = parseFloat(radio);
    pi = 3,14;

    circunferencia = (2 * pi) * radio;

    alambre = circunferencia * 3;

alert ("La cantidad de alambres que se necesita comprar es "  + alambre);

}
function Materiales () 
{
	
	let ancho2;
    let largo2;
    let cemento; 
    let cal;
    let area;


    ancho2 = txtIdAncho.value;
    largo2 = txtIdLargo.value;
    ancho2 = parseFloat(ancho2);
    largo2 = parseFloat(largo2);


    area = largo2 * ancho2;
    cemento = area * 2;
    cal = area * 3;

alert ("La cantidad de bolsas de cemento que se necesitan son " + cemento + " y las de cal son " + cal);
}
/*txtIdAncho txtIdLargo txtIdRadio*/