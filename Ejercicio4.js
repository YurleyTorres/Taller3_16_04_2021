//4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. 
//El diagrama debe decidir cual es el mayor y cual es el menor

let A, B, C;
A = parseInt(prompt("Ingrese un numero 1"));
B = parseInt(prompt("Ingrese un numero 2"));
C = parseInt(prompt("Ingrese un numero 3"));

function comparar(a, b) {
	return a - b;
	}
let lista = [A,B,C];
lista = lista.sort(comparar);
console.log('ordenado con función:', lista);


console.log(`El numero mayor del listado es: ${lista[2]})`);
console.log(`El numero mayor del listado es: ${lista[0]})`);