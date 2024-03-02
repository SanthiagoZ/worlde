let intentos=6;
let lista = ["ARBOL","COMIA","GUIAS","CAIDA","ANGEL","NIEVE"]
let indice = Math.floor(Math.random()* lista.length)
console.log(indice);

let palabra = lista[indice];
const button = document.getElementById("guess-button");
const GRID = document.getElementById("grid");

let listado=[]
let diccionario={"clave":"valor","clave1":"valor1"};
console.log("diccionario","diccionario");
console.log("diccionario2",diccionario["clave"]);

fetch('https://random-word-api.herokuapp.com/word?lang=es&length=5')
    .then(response=>response.json())
    .then(response=>{
        console.log('desde API',response)
        palabra = response[0].toUpperCase()
        console.log(palabra)
    })
    .catch(eer=>{
        console.log("ocurrio un error")
    });

console.log(palabra);
button.addEventListener('click', intentar);
function intentar(){
    const ROW = document.createElement('div');
    ROW.className='row';
    console.log(ROW)

    const INTENTO=leerIntento();

    console.log(INTENTO);
    intentos = intentos -1;

    if (INTENTO === palabra){
        console.log("Ganaste");
        terminar ("<h1>GANASTE</h1>")
        return  
    }
    else{
        console.log("analizar intento")
        for (i in palabra){
            const SPAN= document.createElement("span");
            SPAN.className="letter";

            if(palabra[i]===(INTENTO[i])){
                console.log(INTENTO[i],"verde");
                SPAN.innerHTML= INTENTO[i];
                SPAN.style.backgroundColor="green";
                console.log(SPAN)
            }
            else if(palabra.includes(INTENTO [i] )){
                console.log(INTENTO[i], "amarillo");
                SPAN.innerHTML=INTENTO[i];
                SPAN.style.backgroundColor="#FFFF00";
                console.log(SPAN)
            } 
            else {
                console.log(INTENTO [i], "gris");
                SPAN.innerHTML=INTENTO[i];
                SPAN.style.backgroundColor="gray";
                console.log(SPAN)
            }
            ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);
    }
    if (intentos==0){
        console.log("Perdiste")
        terminar("<h1>PERDISTE</h1>")
        }   
    }
function leerIntento(){
    let intento=document.getElementById("guess-input");
    intento= intento.value;
    intento= intento.toUpperCase();

    return intento
}
function terminar(mensaje){
    const INPUT=document.getElementById("guess-input")
    INPUT.disabled=true;
    button.disabled=true;
    let contenedor=document.getElementById("guesses");
    contenedor.innerHTML=mensaje;
}