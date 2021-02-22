function mostrar()
{
	let estacion;
	let destino;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacion){
		case ("Invierno"):
		switch (destino){
			case ("Bariloche"):
			alert ("Se viaja");
			break;
         default:
         alert ("No se viaja");
        
        

       }  

          case ("Verano"):
          switch (destino){
       	   case ("Mar del plata"):
       	   case ("Cataratas"):
       	   alert ("Se viaja");
       	   break;
       	   default:
       	   alert ("No se viaja");
       	
       }


       	    case ("Primavera"):
       	     switch (destino){
       		  case ("Bariloche"):
       		  alert ("No se viaja");
       		  break;
       		  default:
       		  alert ("Se viaja");
       	}

                  case ("Otoño"):
                   default:
                    alert ("Se viaja");


        }
       	




       

		}
	











//FIN DE LA FUNCIÓN  txtIdEstacion txtIdDestino  Mar del plata