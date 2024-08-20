// Seleccionar el botón y la caja
const buttons = document.querySelectorAll('button');
const caja = document.getElementById('caja');

// Añadir un listener a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
    // Obtenemos el color de fondo del botón clicado
        const color = button.style.backgroundColor;
    // Cambiamos el color de fondo de la caja
        caja.style.backgroundColor = color;
    });
});
