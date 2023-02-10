// Constantes de los botones
const piedraBoton = document.getElementById("piedra");
const papelBoton = document.getElementById("papel");
const tijeraBoton = document.getElementById("tijera");
// Constante para mostrar el resultado
const textoResultado = document.getElementById("startText");
// Constantes para mostrar imagenes de los opciones elegidas
const usuarioImagen = document.getElementById("usuarioImagen");
const computadoraImagen = document.getElementById("computadoraImagen");

// Constantes de las opciones de juego
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

// Constantes de los resultados del juego
const EMPATE = 0;
const GANO = 1;
const PERDIO = 2;


//----------------------------------------------------------------------------------------------


// Escucha el evento click de los botones y ejecuta la funcion llamada
piedraBoton.addEventListener("click", () => {
  jugar(PIEDRA);
});
papelBoton.addEventListener("click", () => {
  jugar(PAPEL);
});
tijeraBoton.addEventListener("click", () => {
  jugar(TIJERA);
});


//----------------------------------------------------------------------------------------------


// Funcion Principal
function jugar(usuarioOpcion) {
  // Muestra la imagen de la opcion elegida por el usuario
  usuarioImagen.src = "Imagenes/" + usuarioOpcion + ".png";

  // Muestra el texto anterior al resultado
  textoResultado.innerHTML = "Eligiendo...";

  // Intercambia de opciones hasta escoger la opcion
  const intervalo = setInterval(function () {
    // Constante que contiene el resultado de la funcion "calcularComputadoraOpcion"
    const computadoraOpcion = calcularComputadoraOpcion();
    // Muestra la imagen de la opcion elegida por la computadora
    computadoraImagen.src = "Imagenes/" + computadoraOpcion + ".png";
  }, 200);

  // Atrasa la eleccion del resultado
  setTimeout(function () {
    // Limpia el intervalo para que no sea infinito
    clearInterval(intervalo);
    // Constante que contiene el resultado de la funcion "calcularComputadoraOpcion"
    const computadoraOpcion = calcularComputadoraOpcion();
    // LLama a la funcion "calcularResultado"
    const resultado = calcularResultado(usuarioOpcion, computadoraOpcion);
    // Muestra la imagen de la opcion elegida por la computadora
    computadoraImagen.src = "Imagenes/" + computadoraOpcion + ".png";
    //Muestra en pantalla el resultado, a traves de INNERTEXT modifica el texto
    switch (resultado) {
      case EMPATE:
        textoResultado.innerHTML = "Has empatado!";
        break;
      case GANO:
        textoResultado.innerHTML = "Has ganado!";
        break;
      case PERDIO:
        textoResultado.innerHTML = "Has perdido!";
        break;
    }
  }, 2000);
}


//Calcula la opcion de la computadora
function calcularComputadoraOpcion() {
  // Constante que nos dara un munero aleatorio del 0 al 2
  const number = Math.floor(Math.random() * 3);
  // Switch para transformar de numero a string
  switch (number) {
    case 0:
      return PIEDRA;
    case 1:
      return PAPEL;
    case 2:
      return TIJERA;
  }
}


// Funcion para calcular los resultados
function calcularResultado(usuarioOpcion, computadoraOpcion) {
  // Condicional de juego si empata
  if (usuarioOpcion === computadoraOpcion) {
    return EMPATE;
  }
  // Condicional de juego si el usuario elige PIEDRA
  else if (usuarioOpcion === PIEDRA) {
    if (computadoraOpcion === PAPEL) return PERDIO;
    if (computadoraOpcion === TIJERA) return GANO;
  }
  // Condicional de juego si el usuario elige PAPEL
  else if (usuarioOpcion === PAPEL) {
    if (computadoraOpcion === TIJERA) return PERDIO;
    if (computadoraOpcion === PIEDRA) return GANO;
  }
  // Condicional de juego si el usuario elige TIJERA
  else if (usuarioOpcion === TIJERA) {
    if (computadoraOpcion === PIEDRA) return PERDIO;
    if (computadoraOpcion === PAPEL) return GANO;
  }
}