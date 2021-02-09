/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreDelAlumno;
	 let edadDelAlumno;
	 let apellidoDelAlumno;
	 
	 
	 nombreDelAlumno = document.getElementById('txtIdNombre').value;
	 
	 edadDelAlumno = prompt ("Ingrese su edad");
	 apellidoDelAlumno = prompt ("Ingrese su apellido");
     apellidoDelAlumno = document.getElementById('txtIdEdad').value = apellidoDelAlumno;

	alert ("Usted se llama : "  + nombreDelAlumno + " y su apellido es : " + apellidoDelAlumno + " y tiene : " + edadDelAlumno + " años");
}

