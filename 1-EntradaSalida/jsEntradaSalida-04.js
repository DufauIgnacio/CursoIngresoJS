/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre = prompt ("Ingrese el Nombre");
	document.getElementeById("txtIdNombre").value = nombre;


	
}


/*
Entradas: prompt, id.value o document.getElementeById("...").value
Procesos: concatenar(+)
Salidas:  alert, console.log (muestra a traves de la consola del programador (f12)), 
document.write (se remplaza la pantalla html la pagina), 
document.getElementeById("...").value

*/



