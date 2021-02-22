function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    let ran;

    ran = Math.floor(Math.random(ran) * 11);

    if (ran > 8 && ran < 11)
    {
    	alert (" EXCELENTE ");
    }
    else 
    	if (ran > 3)
    	{
    		alert (" APROBO ");

    	}
    	else
    	{
    		alert (" Vamos, la proxima se puede ");
    	}

}
