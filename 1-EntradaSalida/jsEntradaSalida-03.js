/*Enunciado : Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"
Dufau Ignacio */

function mostrar()
{

	 let nombreDelAlumno;
	 let edadDelAlumno;
	 
	 
	 nombreDelAlumno = document.getElementById('txtIdNombre').value;
	 
	
     edadDelAlumno = prompt ("Ingrese su edad");
	 

	document.write ("Usted se llama : " + nombreDelAlumno + " y tiene : " + edadDelAlumno + " años");



}



