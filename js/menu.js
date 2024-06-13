document.getElementById("id-nav").innerHTML=
`
<button id="menu">
<span id="menu-abrir" class="fa-solid fa-bars"></span>
<span id="menu-cerrar">X</span>
</button>
<ul class="ul-nav sub-titulo" id="ul-nav">
<li><a href="index.html">INICIO</a></li>
<li><a href="sobreMi.html">SOBRE MÍ</a></li>
<li><a href="servicios.html">SERVICIOS</a></li>
<li><a href="contacto.html">CONTACTO</a></li>
</ul>
    
    
`
/*
document.getElementById('id-footer').innerHTML=
`
Redes sociales:
<div class="footer">
    <div class="redes">
        <img src="imagenes/facebook.ico" width="14px">
        <a href="https://facebook.com/veterinariairlanda" target="_blank">Facebook</a>
    </div>
    <div class="redes">
        <img src="imagenes/whatsapp.ico" width="14px">
        <a href="https://api.whatsapp.com/send?phone=54911435446547" target="_blank">Whatsapp</a>
    </div>
    <div class="redes">
        <img src="imagenes/instagram.ico" width="14px">
        <a href="https://instagram.com/veterinariairlanda" target="_blank">Instagram</a>
    </div>

</div>
`
*/
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener('DOMContentLoaded',(event) =>{
const menuBtn = document.getElementById ('menu')
const navegar = document.getElementById('ul-nav')
const body = document.querySelector('body')
menuBtn.addEventListener("click",(event) =>{
menuBtn.classList.toggle('salir')
navegar.classList.toggle('visible')
body.classList.toggle('no-scroll')
})
})


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

    window.onload = function() {
    moverHeader();
};
