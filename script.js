// Asegúrate de que GSAP está cargado
// Puedes agregar la siguiente línea al final del archivo HTML para incluir GSAP:
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>

document.addEventListener("DOMContentLoaded", () => {

    // Animación de los botones en la barra de navegación
    gsap.from(".navbar a", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.3,
        stagger: 0.2, // Aparecer de manera secuencial
    });

    // Animación de "rebote" cuando el mouse entra y sale de los botones
    document.querySelectorAll('.navbar a').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.1, duration: 0.2 });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.2 });
        });
    });

    // Efecto de scroll suave cuando el usuario hace clic en un enlace
    const scrollLinks = document.querySelectorAll('.navbar a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            gsap.to(window, {
                scrollTo: targetElement.offsetTop,
                duration: 1,
                ease: "power2.inOut"
            });
        });
    });

    // Añadir la funcionalidad del botón "Scroll to Top"
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.inOut" });
    });

});
