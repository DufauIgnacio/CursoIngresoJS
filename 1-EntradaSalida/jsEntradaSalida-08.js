/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1;
	let num2;
	let resto;


	num1 = txtIdNumeroDividendo.value;
	num2 = txtIdNumeroDivisor.value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resto = num1 % num2;

      alert ("el resto es " + resto);
}


/*txtIdNumeroDividendo
txtIdNumeroDivisor*/