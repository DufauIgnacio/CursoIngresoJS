/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let tempF;
	let tempC;
    
    tempF = txtIdTemperatura.value;
	tempF = parseFloat (tempF);
	tempC = (tempF - 32) / 1.8; // formula de fahrenheint a celsius

alert (tempF + " grados fahrenheit equivalen a " + tempC + " grados centigrados ");

}

function CentigradosFahrenheit () 
{
	let tempF1;
	let tempC1;

	tempC = txtIdTemperatura.value;
	tempC = parseFloat (tempC);
	tempF = (tempC * 1.8) + 32; //formula de celsius a fahrenheint

alert (tempC + " grados celsius equivalen a " + tempF + " grados fahrenheint ");
}
//txtIdTemperatura