// Función para cargar el encabezado
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

// Función para cargar el pie de página
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

function moverHeader(){
let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > lastScrollY) {
            // Scroll hacia abajo, oculta el header
            header.classList.add('header-hidden');
        } else {
            // Scroll hacia arriba, muestra el header
            header.classList.remove('header-hidden');
        }
        lastScrollY = window.scrollY;
    });
}

// Llamar a las funciones para cargar el encabezado y el pie de página
window.onload = function() {
    loadHeader();
    loadFooter();
    moverHeader();
};