const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar el envío normal del formulario
    
    const formData = new FormData(form);
    const url = form.action;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('¡Formulario enviado con éxito!');
            form.reset(); // Limpiar el formulario después del envío
        } else {
            alert('Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.');
        }
    } catch (error) {
        alert('Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.');
    }
});
