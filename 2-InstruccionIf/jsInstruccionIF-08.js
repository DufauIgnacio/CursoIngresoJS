function mostrar()
{
	//tomo la edad  
	let edad;
	let estadocivil;

	edad = txtIdEdad.value;
	edad = parseInt (edad);
	estadocivil = estadoCivil.value;

	if (edad > 17 && estadocivil == "Soltero")
	{
		alert (" Es soltero y no es menor ");
	}


}//FIN DE LA FUNCIÓN txtIdEdad  estadoCivil