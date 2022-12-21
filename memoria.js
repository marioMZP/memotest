//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;

//apuntando a documentos HTML
let mostrarMovimientos = document.getElementById('movimientos');


//generacion de numeros aleatorios
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5})
console.log(numbers);


//funcion principal
function destapar(id){
tarjetasDestapadas ++;
console.log(tarjetasDestapadas);

    if (tarjetasDestapadas == 1){
        // mostrar primer numero 
    tarjeta1 = document.getElementById(id);
    primerResultado = numbers[id]
    tarjeta1.innerHTML = primerResultado;

    // deshabilitar primer boton
    tarjeta1.disabled = true;
    } else if(tarjetasDestapadas == 2){
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numbers[id];
        tarjeta2.innerHTML = segundoResultado;
        
        //deshabilitar segundo boton
        tarjeta2.disabled = true;

        // incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML='Movimientos: ${movimientos}'; //!este trozo de codigo falla
    }

}