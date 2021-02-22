function mostrar()
{
	let destino;
	let estacion;
	let precioBase;
	let aumento1;
	let aumento2;
	let descuento1;
	let descuento2;	
    
	destino = txtIdDestino.value;
	estacion = txtIdEstacion.value;
    precioBase = 15000;
    aumento1 = precioBase * 0.2;
    descuento1 = precioBase * 0.1;
    aumento2 = precioBase * 0.1;
    descuento2 = precioBase * 0.2;



	switch (estacion){
		case ("Invierno"):
		switch (destino){
			case ("Bariloche"):
			 alert (precioBase + aumento1);
			break;
			case ("Cataratas"):
			case ("Cordoba"):
			alert (precioBase - descuento1);
			break;
			case ("Mar del plata"):
			alert (precioBase - descuento2);
			break;
		}
		case ("Verano"):
		  switch (destino){
		  	case ("Bariloche"):
		  	alert (precioBase - descuento2);
		  	break;
		  	case ("Cataratas"):
		  	case ("Cordoba"):
		  	alert (precioBase + aumento2);
		  	break;
		  	case ("Mar del plata"):
		  	alert (precioBase + aumento1);
		  	break;

		  }
		default:
		  case ("Cordoba"):
		  alert (precioBase);
		  break;
		  case ("Bariloche"):
		  case ("Cataratas"):
		  case ("Mar del plata"):
		  alert (precioBase + aumento2);
		  break;
		  

		  


		}

	}

	

//FIN DE LA FUNCIÓN txtIdEstacion txtIdDestino Mar del plata