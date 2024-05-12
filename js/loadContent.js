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

// Llamar a las funciones para cargar el encabezado y el pie de página
window.onload = function() {
    loadHeader();
    loadFooter();
};
