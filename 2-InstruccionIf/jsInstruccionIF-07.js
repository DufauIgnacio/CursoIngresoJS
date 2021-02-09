function mostrar()
{
	//tomo la edad 
	let edad;
	let estadocivil;
	
    estadocivil = estadoCivil.value;
	edad =  txtIdEdad.value;
	edad = parseInt (edad);
	

	
	if (edad < 18 && estadocivil != "Soltero")
	{
		alert (" Es muy pequeño para NO ser soltero ");
	}

	
}//FIN DE LA FUNCIÓN txtIdEdad estadoCivil