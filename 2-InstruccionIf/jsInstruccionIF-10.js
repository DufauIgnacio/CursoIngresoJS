function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    let ran;

    Math.floor(Math.random(ran) * 10) + 1;

    if (ran < 10 && ran > 9)
    {
    	alert (" EXCELENTE ");
    }
    else 
    	if (ran > 4)
    	{
    		alert (" APROBO ");

    	}
    	else
    	{
    		alert (" Vamos, la proxima se puede ");
    	}

}