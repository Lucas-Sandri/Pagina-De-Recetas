// let x = 0
// for (let i = 0; i<3;i++){
//     x+=i
//     console.log("i",i)
//     console.log("x",x)
// }
let messenger = "¡Programa!"
for (let i = 1;i <= 10;i++){
    console.log(`${messenger}`)
}
for(i=1; i<5;i++){
    if(i == 3){
        break
    }
    console.log(i)
}

let nam="Lucas Sandri"

function login(user, seg){
    console.log(`¡Bienvenido, ${user}, ${seg}!`)
}

login("LUlu", "blabla")

function sumar(first, second, name){
    console.log(`El resultado de la suma es: ${first+second} de la edad del señor ${name}`)
}
sumar(2,20,nam)

function descuento(compro){
    if(compro>=1500){
        pagar = compro*15
        pagar /= 100
        pagar-=compro
    }
    else{
        pagar=compro
    }
    console.log(`Debe pagar: ${pagar}`)
}

descuento(1300)

function pulgadas(pies){
    let pulgadas=12
    pulgadas*=pies
    console.log(`${pies} pies son: ${pulgadas} pulgadas`)
}
pulgadas(3)




let number1 = 13
let number2 = 12
let number3 = 11
//function +
function suma(a,b,c,d){
    return a+b+c+d
}
let resultSuma = suma(number1,number2,number3,"  es el resultado de la SUMA")
console.log(resultSuma)

//function -
function resta(a,b,c,d){
    return a-b-c+d
}
let resultResta = resta(number1,number2,number3," es el resultado de la RESTA")
console.log(resultResta)

//function *
function multiplicación(a,b,c,d){
    return a*b*c+d
}
let resultMulti = multiplicación(number1,number2,number3," es el resultado de la MULTIPLICACIÓN")
console.log(resultMulti)

//function /
function division(a,b,c,d){
    return a/b/c+d
}
let resultDivi = division(number1,number2,number3,"  es el resultado de la DIVISION")
console.log(resultDivi)




