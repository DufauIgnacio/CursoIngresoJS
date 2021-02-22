/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLowerCase ();//para tomar minusculas toUpperCase para mayusculas


	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
        sexoIngresado = prompt("Error, reingrese sexo ");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN