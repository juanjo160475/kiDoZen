const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar el envío normal del formulario
    
    const formData = new FormData(form);
    const url = 'https://formspree.io/2024desarrolloweb@gmail.com'; // Reemplaza 'your_email_here' con tu dirección de correo electrónico de Formspree

    await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    alert('¡Formulario enviado con éxito!');
    form.reset(); // Limpiar el formulario después del envío
});