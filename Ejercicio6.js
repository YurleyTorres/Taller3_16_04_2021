//6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares.
let i;
let Sum = 0;
let Mul = 1;
let res = 0;
let num1;



let  listaP = [] ;
let  listaI = [] ;
let opc;

do {
    
	
	 opc = parseInt(prompt("Deseas ingresar otro numero. \n 1.Si \n2. No"));
	
	switch(opc){
		case 1: 
		    num1 = parseInt(prompt("Ingrese un numero"));
        
            if(num1%2!=0){
                
                Mul = (Mul * num1);
                listaI.push(parseInt(num1));
               
            }
            else{
                Sum = Sum + num1;
                listaP.push(parseInt(num1));
            }
        
        break;
		case 2:
            console.log(`Los numeros pares ingresados son: ${listaP}`);
            console.log(`La suma de los numeros pares ingresados es: ${Sum}`);
            console.log(`El producto de los numeros impares ingresados es: ${Mul}`);
            console.log(`Los numeros impares ingresados son: ${listaI}`);

		break;
		default:
		alert(`La opcion no existe`);
		break;
		}	
}while (opc==1)
