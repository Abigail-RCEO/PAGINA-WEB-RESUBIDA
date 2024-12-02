// URL de la API
const apiURL = 'http://localhost:3000/autos';

// Contenedor del catálogo
const catalogContainer = document.getElementById('catalog-container');

// Función para cargar los datos de la API
async function loadCatalog() {
    try {
        const response = await fetch(apiURL); // Realizamos la petición GET
        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status}`);
        }
        const autos = await response.json(); // Parseamos la respuesta a JSON
        displayAutos(autos); // Llamamos a la función para mostrar los autos
    } catch (error) {
        catalogContainer.innerHTML = `<p>Error al cargar el catálogo. Por favor, inténtalo más tarde.</p>`;
        console.error(error);
    }
}

// Función para mostrar los autos en el catálogo
function displayAutos(autos) {
    // Limpiamos el contenedor
    catalogContainer.innerHTML = '';

    // Iteramos sobre el array de autos
    autos.forEach(auto => {
        // Creamos el div de la tarjeta
        const autoCard = document.createElement('div');
        autoCard.classList.add('product-card', auto.marca.toLowerCase().replace(/\s/g, '-')); // Añadimos clase única

        // Añadimos contenido a la tarjeta
        autoCard.innerHTML = `
            <h3>${auto.marca}</h3>
            <p>Año: ${auto.anio}</p>
            <p class="price">$${auto.precio}</p>
        `;

        // Añadimos la tarjeta al contenedor
        catalogContainer.appendChild(autoCard);
    });
}


// Llamada a la función para cargar el catálogo al cargar la página
document.addEventListener('DOMContentLoaded', loadCatalog);
