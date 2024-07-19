// Obtener referencia al botón y al área donde se muestra el color actual
const changeColorBtn = document.getElementById('changeColorBtn');
const currentColorDisplay = document.getElementById('currentColor');

// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// el clic en el botón "Cambiar Color"
changeColorBtn.addEventListener('click', () => {
    // Generar un color aleatorio
    const randomColor = getRandomColor();
    
    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = randomColor;
    
    // Mostrar el color actual en su formato hexadecimal
    currentColorDisplay.textContent = randomColor;
});
