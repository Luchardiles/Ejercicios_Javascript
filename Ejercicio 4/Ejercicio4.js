//1)
var valores = [true,5,false,"hola","adios",2]
var texto1 = valores[3]
var texto2 = valores[4]

if (texto1.length > texto2.length){
    console.log("El texto mayor es: ", texto1)
}
else if(texto2.length > texto1.length){
    console.log("El texto mayor es: ",texto2)
}
else{
    console.log("Los dos textos tiene la misma longitud")
}

//2)
var booleano1 = valores[0]
var booleano2 = valores[2]
var resTrue = booleano1 || booleano2
var resFalse = booleano1 && booleano2

console.log("Resultado true: ",resTrue)
console.log("Resultado false: ",resFalse)

//3)
var num1 = valores[1]
var num2 = valores[5] 

var sum = num1 + num2 
console.log("El resultado de la suma es: ",sum)

var res = num1 - num2 
console.log("El resultado de la resta es: ",res)

var multi = num1 * num2 
console.log("El resultado de la multiplicacion es: ",multi)

var div = num1 / num2 
console.log("El resultado de la division es: ",div)

var modulo = num1 % num2 
console.log("El resultado del modulo es: ",modulo)
