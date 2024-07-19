// Arreglo de departamentos con información de imagen, detalles y precio
const departments = [
    {
        image: 'departamento1.png',
        details: 'Departamento 1: 3 habitaciones, 2 baños, 100 m²',
        price: '$250,000 USD'
    },
    {
        image: 'departamento2.png',
        details: 'Departamento 2: 2 habitaciones, 1 baño, 80 m²',
        price: '$180,000 USD'
    },
    {
        image: "departamento3.png" ,
        details: 'Departamento 3: 4 habitaciones, 3 baños, 150 m²',
        price: '$350,000 USD'
    },
    {
        image: 'departamento4.png',
        details: 'Departamento 4: 1 habitación, 1 baño, 50 m²',
        price: '$120,000 USD'
    },
    {
        image: 'departamento5.png',
        details: 'Departamento 5: 2 habitaciones, 2 baños, 90 m²',
        price: '$200,000 USD'
    },
    {
        image: 'departamento6.png',
        details: 'Departamento 6: 3 habitaciones, 2 baños, 110 m²',
        price: '$280,000 USD'
    },
    {
        image: 'departamento7.png',
        details: 'Departamento 7: 2 habitaciones, 1 baño, 75 m²',
        price: '$190,000 USD'
    },
    {
        image: 'departamento8.png',
        details: 'Departamento 8: 3 habitaciones, 2 baños, 120 m²',
        price: '$300,000 USD'
    },
    {
        image: 'departamento9.png',
        details: 'Departamento 9: 4 habitaciones, 3 baños, 160 m²',
        price: '$400,000 USD'
    },
    {
        image: 'departamento10.png',
        details: 'Departamento 10: 1 habitación, 1 baño, 55 m²',
        price: '$150,000 USD'
    }
];

let currentIndex = 0;

// Obtener elementos del DOM
const departmentImage = document.getElementById('departmentImage'); // Imagen del departamento
const departmentDetails = document.querySelector('.details'); // Detalles del departamento
const message = document.getElementById('message'); // Mensaje de estado
const prevBtn = document.getElementById('prevBtn'); // Botón para departamento anterior
const nextBtn = document.getElementById('nextBtn'); // Botón para siguiente departamento

// Función para actualizar la información del departamento actual
function updateDepartment() {
    departmentImage.src = departments[currentIndex].image; 
    
    // Construir HTML con detalles y precio del departamento
    const detailsHTML = `
        <h2>${departments[currentIndex].details}</h2>
        <p class="price">${departments[currentIndex].price}</p>
    `;
    departmentDetails.innerHTML = detailsHTML; 
    
    message.textContent = ''; // Limpiar mensaje de estado
    prevBtn.disabled = currentIndex === 0; // Deshabilitar botón "Anterior" si es el primer departamento
    nextBtn.disabled = currentIndex === departments.length - 1; // Deshabilitar botón "Siguiente" si es el último departamento
}

// Event listener para el botón "Anterior"
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Disminuir índice para mostrar el departamento anterior
        updateDepartment(); // Actualizar la visualización del departamento
    } else {
        message.textContent = 'No hay más departamentos anteriores.'; // Mostrar mensaje si no hay más departamentos anteriores
    }
});

// Event listener para el botón "Siguiente"
nextBtn.addEventListener('click', () => {
    if (currentIndex < departments.length - 1) {
        currentIndex++; // Aumentar índice para mostrar el siguiente departamento
        updateDepartment(); // Actualizar la visualización del departamento
    } else {
        message.textContent = 'No hay más departamentos siguientes.'; // Mostrar mensaje si no hay más departamentos siguientes
    }
});

// Inicializar la aplicación mostrando el primer departamento
updateDepartment();
