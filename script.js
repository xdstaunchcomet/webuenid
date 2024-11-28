document.addEventListener("DOMContentLoaded", () => {

    // Espera a que la imagen se cargue completamente
    const escudo = document.querySelector(".escudonid");
    escudo.onload = () => {
        // Animación de la imagen con la clase "escudonid" cuando la imagen esté cargada
        gsap.from(escudo, {
            opacity: 0,           // Empieza invisible
            y: -50,               // Empieza desplazada hacia arriba
            duration: 1,          // Duración de 1 segundo
            ease: "power2.out",   // Efecto de salida suave
            delay: 0.5            // Aparece con un pequeño retraso de 0.5 segundos
        });
    };

    // 1. Animación de botones en la barra de navegación
    gsap.from(".navbar a", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.3,
        stagger: 0.2, // Aparecen de manera secuencial
    });

    // 2. Rebote de botones al pasar el mouse
    document.querySelectorAll('.navbar a').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.1, duration: 0.1 });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.2 });
        });
    });

    // 3. Scroll suave al hacer clic en enlaces
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            gsap.to(window, {
                scrollTo: targetElement.offsetTop,
                duration: 1,
                ease: "power2.inOut",
            });
        });
    });

    document.querySelector('.comentarios-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const inputs = document.querySelectorAll('.input');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('invalid'); // Marca los campos inválidos
            }
        });

        if (valid) {
            alert('Comentario enviado correctamente');
        } else {
            alert('Por favor, completa todos los campos');
        }
    });

        
    });

