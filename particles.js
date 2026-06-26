document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("neural-canvas");

    // Si por alguna razón no encuentra el canvas, paramos para evitar errores
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    // CONFIGURACIÓN
    const config = {
        particleColor: "rgba(255, 213, 0, 0.7)", // Tus colores
        lineColor: "rgba(255, 255, 255, 0.4)",
        particleAmount: 60,       // Cantidad de puntos
        defaultSpeed: 0.5,
        variantSpeed: 1,
        linkRadius: 130,
    };

    // Ajustar tamaño al contenedor PADRE (tu sección home)
    function resize() {
        const parent = canvas.parentElement;
        if (parent) {
            width = parent.offsetWidth;
            height = parent.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        }
    }

    // Clase Partícula
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * config.variantSpeed;
            this.vy = (Math.random() - 0.5) * config.variantSpeed;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Rebotar en los bordes
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = config.particleColor;
            ctx.fill();
        }
    }

    // Inicializar
    function initParticles() {
        particles = [];
        resize();
        for (let i = 0; i < config.particleAmount; i++) {
            particles.push(new Particle());
        }
    }

    // Dibujar líneas
    function drawLinks() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.linkRadius) {
                    const opacity = 1 - distance / config.linkRadius;
                    ctx.strokeStyle = config.lineColor.replace("0.4)", `${opacity * 0.4})`);
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Bucle de animación
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawLinks();
        requestAnimationFrame(animate);
    }

    // Eventos
    window.addEventListener("resize", () => {
        resize();
        initParticles();
    });

    // Arrancar
    initParticles();
    animate();
});

// --- LIGHT MODE LOGIC ---
(function () {
    const toggleBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('theme-icon-sun');
    const iconMoon = document.getElementById('theme-icon-moon');

    if (!toggleBtn) return;

    // Check local storage for preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        } else {
            localStorage.setItem('theme', 'dark');
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        }
    });
})();

// --- HACKER TEXT CYCLER ---
(function () {
    const box = document.querySelector('.box');
    const hackerElement = document.querySelector('.hacker-permanent');
    const hackerSpan = hackerElement ? hackerElement.querySelector('span') : null;

    if (box && hackerElement && hackerSpan) {
        const style = document.createElement('style');
        style.textContent = `
            .hacker-permanent.wide {
                width: max-content;
                max-width: 90vw;
                font-size: 11px;
                letter-spacing: 1px;
                white-space: nowrap;
            }
            @media (min-width: 768px) {
                .hacker-permanent.wide {
                    font-size: 13px;
                }
            }
        `;
        document.head.appendChild(style);

        const phrases = [
            { data: "ARREGLÉ UN BUG", span: "APARECIERON TRES", wide: false },
            { data: "POR LAS NOCHES", span: "LE ENSEÑO A CLAUDE A PROGRAMAR", wide: true },
            { data: "UTILIZO EL SARCASMO", span: "PARA OCULTAR MI FALTA DE CONOCIMIENTO", wide: true }
        ];
        let currentIdx = 0;

        box.addEventListener('mouseenter', () => {
            currentIdx = (currentIdx + 1) % phrases.length;
            const p = phrases[currentIdx];
            hackerElement.setAttribute('data-text', p.data);
            hackerSpan.textContent = p.span;

            if (p.wide) {
                hackerElement.classList.add('wide');
            } else {
                hackerElement.classList.remove('wide');
            }
        });
    }
})();