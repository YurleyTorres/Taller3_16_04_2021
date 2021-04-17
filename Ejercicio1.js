// 1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.

let num1, num2;

do {
    num1 = parseInt(prompt("Ingrese un numero 1"));
    num2 = parseInt(prompt("Ingrese un numero 2"));
}while (num1==num2)
if(num1>num2){
    console.log(`El numero ${num1} es mayor que ${num2}`);
}else{
    console.log(`El numero ${num2} es mayor que ${num1}`);
}

