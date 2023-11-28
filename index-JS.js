
//las comillas "" se utilizan cuando se necesite definir cadenas de texto estáticas y sencillas
//las Template literals(''´´) cuando hay que construir cadenas de texto que incluyan valores variables, expresiones o necesites mejorar la legibilidad del código

// let edad1 = 9
// let edad2 = 10

// let condición = edad1 > edad2 //en la variable "condición" se guarda SI cumple la condición o NO
//let resultado = condición ?//el signo de interrogación pregunta si es verdadero o falso    
// "Usted es mayor de edad" //seguido del signo de "?" va el valor verdadero 
 //:"Usted es menor de edad" //seguido del ":" se pone el valor falso
//console.log (resultado)

//lo que hice aca fue crear dos variables le asigne el método "window.prompt" que muestra una "ventana emergente" en la página al usuario para pedirle datos,etc,. El "prompt" muestra un cuadro de dialogo que le pide información al usuario  
// let primeraEdad = window.prompt ("Agregue su edad")
// let segundaEdad = window.prompt ("Agregue su edad")
// if (primeraEdad > segundaEdad){
//     window.prompt ("El mayor de edad es el que tiene", (primeraEdad), "años(1ro)")
// }
// else {
//       window.prompt ("El mayor de edad es el que tiene",(segundaEdad), "años (2do)")   
// }

//------------------------------------------------------

//OPERADORES RELACIONALES: mayor que(>),
// menor que (<),
  //mayor o igual que(>=),
   //menor o igual que(<=),
    //igual que(==),
     //diferente de(!=),
      //estrictamente igual(===) y
       //estrictamente diferente(!==)
//OPERADORES LÓGICOS
       //AND (&&)"Y": se tienen que cumplir ambas si o si
       //OR (||)"O": se tiene que cumplir una u otra
       //NOT (!)"NO": devuelve lo contrario al valor que es, por ejemplo: si tengo un "true" y lo agrego el NOT! (!true); entonces su valor ahora es "false" 



// let edad = 20
// let DNI = true
//  if  (edad > 18  && DNI==!true) {
//    console.log ("¡Pase!")
// } 
// else{
//     console.log ("¡No puede pasar!")
// }
// let primeraEdad=8
// let segundaEdad=6
// let terceraEdad=9
// if (primeraEdad > segundaEdad && primeraEdad > terceraEdad){
//      console.log ("La ",(primeraEdad),"1ra es mayor")
// }
// else if (segundaEdad > terceraEdad && terceraEdad < primeraEdad){
//    console.log("La ",(segundaEdad),"2da es la mayor")
// }
// else{
//     console.log ("Las ", (terceraEdad), "3ra es la mayor")
// }

// let numero=6
// for (let i = 1; i <= 10; i++ ){
//     console.log (numero, "X", i, "=", numero*i)
// }
// let i = 3
// i +=  3
// i -= -1
// console.log(i)

// let z = 2
// let x = 2
// let y = 5
// let resultado
// resultado = (z + x) * y
// console.log(resultado)

//LA PROPIEDAD "length":establece o devuelve la cantidad de elementos en esa matriz

//------------------------------------------------------

//MÉTODOS DE LOS ARRAY:ARREGLOS
//push: para agregar un elemento al final
//unshift: para agregar  un elemento al principio
//pop: quita el ultimo elemento
//shift: quita el primer elemento   

// let eliminados
// const M1 = "Matricula del alumno N° 1"
// const M2 = "Matricula del alumno N° 2"
// const M3 = "Matricula del alumno N° 3"
// const M4 = "Matricula del alumno N° 4"
// const M5 = "Matricula del alumno N° 5"
// const fechaDeNacimientoDni = ["02/03/1999", "15/06/1998","20/4/2002","02/09/2003","23/6/2010",["42754203", "42980001", "44781029", "44990000", "45654234"]] 

// const matriculaYNombres = [M1,M2,M3,M4,M5,["Jose De Lafuente Delfino", "Felipe Giorno Bramndon", "Alexis Sandri Alberto", "Sandri Leonardo", "Luana Elizabet"]]
           //RECORRER UN ARRAY:ARREGLO, MÉTODO "FOREACH" (Y EL CICLO FOR)
 //Primero llamamos al array luego ponemos un punto "." y seguido del punto ponemos el método "foreach", colocamos (paréntesis) y dentro de los (paréntesis de forEch) forEach va a recibir como parámetro:(los parámetros se usan para mandar valores a las funciones), una función "function":(una función es un programa separado del cuerpo principal, que realiza una tarea especifica y que puede regresar un valor a la parte principal del programa u otra función o procedimiento que la invoque), esta función se va a ejecutar por cada elemento del arreglo, una sola vez por cada elemento del arreglo, y luego a la función="function" abrimos (paréntesis) dentro de sus () vamos a pasar los parámetros: "element":(que son los elementos de nuestro arreglo), el index que son las posiciones de nuestros elementos y el arreglo completo con el parámetro arreglo, para mostrarlos en consola abrimos {llaves} dentro de los () del método forEch.  
 //El valor de index es 6 porque tenemos 6 espacios, elementos,( contando los elementos del array hijo: el que contiene los nombres) en nuestro array "matriculaYNombres"
 //Ciclo for: cree una variable "var: de ámbito global, porque el ciclo for esta en un bloque dentro del bloque de forEach" (var i = 0),para que inicialice en cero[porque el conteo de los elementos de un array inicia desde 0] agregue un punto y coma por la sintaxis de JS: porque si no no me funcionaba el ciclo, después agregue una condición mientras "i" sea menor a "index:vale 6" que "i" incremente +1 y lo muestro por consola, a los consol.log los agregue fuera del ciclo for porque el ciclo esta hecho para hacer un recorrido en el array(que están los nombres) que esta dentro del array "matriculaYNombre"      
//  matriculaYNombres.forEach(function(element, index, array){
//       for (var i = 0; 
//        i < index; ){
//               i++
//        } 

//        console.log("===========================================")
//        console.log( "Posición: ", index)
//        console.log("&&", element)       
//        console.log("Arreglo: ", array[5][i])//<- acá esta la variable i que es la que hace el recorrido por el array donde están los nombres 
//})
///=========ESTO ME APARECE EN CONSOLA============
//Posición:  0
//&& Matricula del alumno N° 1
//Arreglo:  Jose De Lafuente Delfino
//===========================================
//Posición:  1
//&& Matricula del alumno N° 2
//Arreglo:  Felipe Giorno Bramndon
//===========================================
//Posición:  2
//&& Matricula del alumno N° 3
//Arreglo:  Alexis Sandri Alberto
//===========================================
//Posición:  3
//&& Matricula del alumno N° 4
//Arreglo:  Sandri Leonardo
//===========================================
//Posición:  4
//&& Matricula del alumno N° 5
//Arreglo:  Luana Elizabet
//===========================================
//Posición:  5
//&& [
//  'Jose De Lafuente Delfino',
//  'Felipe Giorno Bramndon',
//  'Alexis Sandri Alberto',
//  'Sandri Leonardo',
//  'Luana Elizabet'
//]
//Arreglo:  undefined

  

//los puntitos que están antes de los métodos ejemplo; .fill .pop : son para acceder a las propiedades de los objetos.
//también podemos crear una variable y almacenar el elemento que eliminamos.
//eliminados =  matriculaYNombres.shift()
//console.log(matriculaYNombres)
//console.log ("Los eliminados son: ", eliminados)


//asi se usa el .fill, primero va el nombre de la variable array o arreglo y después el .fill 
// matriculaYNombres.fill(0)
// console.log(matriculaYNombres)



// console.log("|", matriculaYNombres [3])
// console.log("|", "Nombre: ", matriculaYNombres [5][3])
// console.log("|", "Fecha de Nacimiento:", fechaDeNacimientoDni[3])
// console.log("|", "DNI: ", fechaDeNacimientoDni[5][3])
// //mostrare por pantalla a otro alumno
// console.log("[I]", matriculaYNombres[1])
// console.log("[I]", matriculaYNombres[5][1])
// console.log("[I]", "Fecha de Nacimiento:", fechaDeNacimientoDni[1])
// console.log("[I]", "DNI:", fechaDeNacimientoDni[5][1])

//OBJETOS
//para crear los objetos hay que declarar una variable donde vamos a almacenar nuestro objeto, para crearlo se utilizan las  llaves{}, para identificar los elementos que están dentro de nuestro objeto vamos a tener llaves; que son como variables(pero NO son variables) donde guardaremos el valor de nuestros elementos
//const jefe = {
//  nombre: "Jimin D Jotaro",
// edad: 30,
//  ubicación: "Misiones,San Uzumaki, Avd: Ackerman, lote 15"
//}


//jefe.edad = 31 //Para editar una propiedad hay que llamar a la variable que contiene al objeto y seguido de un punto escribimos el nombre de la propiedad y seguido del = agregamos el nuevo valor.

//jefe.laNuevaPropiedad = "Yo soy la nueva propiedad"//Para agregar una nueva propiedad a un objeto tiene la misma sintaxis que editarla, solo que hay que poner el nombre de la nueva propiedad y seguido del = el valor.

//delete jefe.laNuevaPropiedad//Para borrar una propiedad usamos la palabra clave "delete" de JavaScript, luego llamamos a la variable del objeto colocamos el "." y el nombre de la propiedad que queremos borrar.

//Para acceder a la propiedad de un objeto utilizamos una sintaxis de punto"." (como la que usamos para acceder al length; longitud de nuestro array)y la guardamos en una variable para que me lo imprima en consola. Primero llamamos a la variable donde esta almacenado nuestro objeto accedemos a la propiedad, llave o elemento con un "punto" y nombre de la propiedad, creamos una variable para almacenar el contenido de la propiedad y mostrar en consola   
//let mostrarContenidoDePropiedad = jefe.laNuevaPropiedad
//console.log("|º|", mostrarContenidoDePropiedad)

        //RECORRER OBJETOS CON EL"ciclo FOR IN" 
//Para hacer el recorrido escribí la palabra clave for del siclo for, abri (paréntesis), dentro del paréntesis creé una variable llamada "recorrido"(que sera como el contador: su valor sera temporal mediante el recorrido) agregue la palabra clave "in" para decir a que objeto nos estamos refiriendo y luego el nombre del objeto. Dentro de las llaves del ciclo for voy a mostrar en consola el "recorrido"; osea voy a mostrar las propiedades que están dentro del objeto y después voy a mostrar el valor de las propiedades: asignando el nombre de mi objeto y entre [corchetes] selecciono el contador de las propiedades "recorrido", con los [] es otra forma de acceder al valor de las propiedades de nuestro objeto:    
//for (let recorrido in jefe){
//       console.log("II", recorrido, ":", jefe[recorrido])
//}

         //SICLO FOR OF:ejecuta un bloque de código para cada elemento de un objeto iterable.
//Primero declaramos un array, luego agregamos la palabra clave "for", abro (paréntesis y declararemos una variable que contendrá el elemento de nuestro array seguido agregamos la palabra clave "of:para indicarle que me refiero a los elementos de ese array" y el nombre de nuestro array, cierro paréntesis), abro las llaves de bloque para ejecutar en consola, pongo console.log (el nombre de la variable que contiene los elementos de nuestro array ). En el segundo ejemplo se aprecia mejor este ciclo, declaramos una variable colocamos el "for" (declaramos la variable que contendrá el contenido de nuestra variable"palabra" luego la palabra clave "of" y nuestra variable que declaramos) y abro las llaves y lo muestro en consola. 
// let abc = ["A","B","C"]
// for (let cntel of abc){
//        console.log (cntel)
// }
// let palabra = "No vemo pendejo"
// for (let contenidoDeLaVar of palabra){
       
//        console.log (contenidoDeLaVar)
// }

//CICLO WHILE
//Se puede utilizar como el ciclo for, pero ademas puede usarse éste ciclos cuando no se sabe la cantidad de iteraciones(repeticiones) que se desea ejecutar. Cuando no esta definida la cantidad de repeticiones
//Primero declare una variable que su valor es un string(cadena de texto)"SI", luego escribí la palabra clave "while", abrí (paréntesis) le asigne una condicional que mientras la variable (continuar) sea === (estrictamente igual) al valor string "SI" siga ejecutando el ciclo (con la función "prompt" que muestra una ventana emergente para que el usuario ingrese un valor a la variable "continuar") y muestre por consola("¡Estas jugando!"), y agregue la sentencia(o declaración que son instrucciones de nuestro programa, es cuando queremos que nuestro programa haga algo ") if si el valor de "continuar" es !==(estrictamente diferente) a "SI", que muestre en consola ("Nos vemos")

// let continuar = "SI"
// while (continuar === "SI"){
//        continuar = prompt ("¿Deseas seguir jugando?, si quiere seguir escriba SI en mayúscula")
//        console.log ("¡Estas jugando!");
//        if (continuar !== "SI" ) {
//                  console.log ("Nos vemos")
//        }
      
// }


//FUNCIONES:
//Es un conjunto de instrucciones de código que realizar una tara o calculan un valor. Muchas veces toman un valor de entrada como un número o un hilo y sacan uno de salida, con el de entrada hacen modificaciones y lo regresan 
//Para declarar una función escribimos la palabra clave "function" y seguido el nombre de la función (faltan los parámetros ) y como en todas las expresiones luego coloco llaves donde irán las instrucciones   

//cree una función y en el index.html a un botón le di un método onclick para que cuando se presione me muestre una alerta diciéndome que voy a otra pagina 
// function funcionAlert() {
//        alert("¡Su proximo destino es: página de LA NACION recetas!")
// }


//MOSTRAR Y OCULTAR IMAGEN CON BOTONES; método "onclick"
//Primero creé un botón en el index.html antes del div que contiene la imagen que quiero ocultar, le di un "display:none; en CSS" a la imagen, le agregue un id:"la_img" seleccione la imagen con "document.getElementById("la_img")" y almacene el id de la imagen en una variable "idImagen", creé una función de nombre mostrar y en el bloque de instrucciones llame a la variable que contiene al id y puse el .style
let idBoton =  document.getElementById("boton_mostrar")
let idImagen =  document.getElementById("la_img")

function Mostrar() {
      idImagen.style.display = "block";
      idBoton.style.display = "none"
}

function Ocultar() {
       document.getElementById("la_img").style.display = "none";
       document.getElementById("boton_mostrar").style.display = "block"
}