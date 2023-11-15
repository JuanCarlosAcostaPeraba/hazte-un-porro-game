// Obtener la puntuación actual del usuario
const userScore = 100;

// Obtener el ranking actual del LocalStorage
let ranking = JSON.parse(localStorage.getItem('ranking')) || [];

// Agregar la puntuación actual del usuario al ranking
ranking.push(userScore);

// Ordenar el ranking de mayor a menor
ranking.sort((a, b) => b - a);

// Guardar el ranking actualizado en el LocalStorage
localStorage.setItem('ranking', JSON.stringify(ranking));
