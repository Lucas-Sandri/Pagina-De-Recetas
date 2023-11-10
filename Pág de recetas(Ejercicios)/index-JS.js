
//las comillas "" se utilizan cuando se necesite definir cadenas de texto estáticas y sencillas
//las Template literals(''´´) cuando hay que construir cadenas de texto que incluyan valores variables, expresiones o necesites mejorar la legibilidad del código

let edad1 = 9
let edad2 = 10

let condición = edad1 > edad2 //en la variable "condición" se guarda SI cumple la condición o NO
let resultado = condición ?//el signo de interrogación pregunta si es verdadero o falso    
 "Usted es mayor de edad" //seguido del signo de "?" va el valor verdadero 
 :"Usted es menor de edad" //seguido del ":" se pone el valor falso
console.log (resultado)

//lo que hice aca fue crear dos variables le asigne el método "window.prompt" que muestra una "ventana emergente" en la página al usuario para pedirle datos,etc,. El "prompt" muestra un cuadro de dialogo que le pide información al usuario  
let primeraEdad = window.prompt ("Agregue su edad")
let segundaEdad = window.prompt ("Agregue su edad")
if (primeraEdad > segundaEdad){
    console.log("El mayor de edad es el que tiene", (primeraEdad),"años(1ro)")
}
else {
 console.log("El mayor de edad es el que tiene", (segundaEdad), "años (2do)")   
}