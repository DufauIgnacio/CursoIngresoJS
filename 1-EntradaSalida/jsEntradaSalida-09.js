/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 let sueldo;
 let resultado;
 let aumento;

 sueldo = txtIdSueldo.value;

 sueldo = parseInt(sueldo);

 aumento = sueldo * 0.1;

 resultado = sueldo + (sueldo * 0.1);
 txtIdResultado.value = resultado;

	
}

/* txtIdSueldo
txtIdResultado*/