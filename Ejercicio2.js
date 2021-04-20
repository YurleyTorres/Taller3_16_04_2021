// 2.	Realice un programa que calcule el máximo de N números leídos desde teclado.


let  lista = [] ;
let opc;

do {
    let n;
	
	 opc = parseInt(prompt("Deseas ingresar otro numero. \n 1.Si \n2. No"));
	
	switch(opc){
		case 1: 
		lista.push(parseInt(prompt("Ingrese un numero")));
        break;
		case 2:
		
		function comparar(a, b) {
		  return a - b;
		}
		lista = lista.sort(comparar);
		console.log('ordenado con función:', lista);
		let max = parseInt(lista.length-1);

        console.log(max);
		console.log(`El numero mayor del listado es: ${lista[max]}`);
		console.log(`Cantidad de numeros ingresados ${lista.length}`);
		console.log(lista);
		break;
		default:
		alert(`La opcion no existe`);
		break;
		}	
}while (opc==1)
