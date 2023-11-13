
const palabras = ["perro", "gato", "elefante", "jirafa", "rinoceronte"];
const vidasIniciales = 1;

function seleccionarPalabra(palabras) {
  const indice = Math.floor(Math.random() * palabras.length);
  return palabras[indice];
}

function mostrarPalabra(palabra, letrasAdivinadas) {
  let palabraMostrada = "";
  for (let letra of palabra) {
    if (letrasAdivinadas.includes(letra)) {
      palabraMostrada += letra;
    } else {
      palabraMostrada += "_";
    }
  }
  return palabraMostrada;
}

function jugar() {
  const palabraSeleccionada = seleccionarPalabra(palabras);
  let letrasAdivinadas = [];
  let vidas = vidasIniciales;

  while (vidas > 0) {
    const palabraMostrada = mostrarPalabra(palabraSeleccionada, letrasAdivinadas);
    console.log(palabraMostrada);
    const letra = prompt("Adivina una letra:");
    if (palabraSeleccionada.includes(letra)) {
      letrasAdivinadas.push(letra);
      if (palabraMostrada === palabraSeleccionada) {
        console.log("¡Has ganado!");
        return;
      }
    } else {
      vidas--;
      console.log(`Letra incorrecta. Te quedan ${vidas} vidas.`);
    }
  }

  console.log("¡Has perdido!");
}

jugar();
