/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
    let suma;

	numeroUno = getElementById('txtIdNumeroUno').value;
	numeroDos = getElementById('txtIdNumeroDos').value;
    

    //conversiones (Parseo)
    numeroUno = parseInt(numeroUno);
    numeroDos =parseInt(numeroDos);



    suma = numeroUno + numeroDos;




  alert("La suma es : " +  suma);
}

