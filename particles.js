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
(function() {
    const style = document.createElement('style');
    style.textContent = `
        body.light-mode { background: #f9f9f9; color: #000; }
        body.light-mode ::selection { background: #000; color: #fff; }
        body.light-mode header.nav.scrolled { background-color: rgba(249, 249, 249, 0.9); border-bottom: 1px solid #ddd; }
        body.light-mode header .brand { color: #000; }
        body.light-mode header .logo .brand span { background-image: linear-gradient(to right, #ff7d61 0%, #ffd859 50%, #000000 50%, #000000 100%); }
        body.light-mode header .navigation .navigation-items a { color: #333; }
        body.light-mode header .navigation .navigation-items a:after { background: #000; }
        body.light-mode header .navigation .navigation-items a:before { background: #000; }
        @media (max-width: 1040px) {
            body.light-mode header .navigation.active .navigation-items { background: #fff; box-shadow: 0 5px 25px rgba(0,0,0,0.1); }
            body.light-mode header .navigation .navigation-items a { color: #000; }
            body.light-mode header .navigation .navigation-items a:after { background: #000; }
        }
        body.light-mode header .menu-btn { filter: invert(1); }
        body.light-mode header .menu-btn.active { filter: invert(1); }
        body.light-mode .showcase .text h1, body.light-mode .showcase .text h2, body.light-mode .showcase .text p { color: #000; }
        body.light-mode .showcase .text a { background: #000; color: #fff; }
        body.light-mode .showcase .social li a { color: #000; }
        body.light-mode .box { background: rgba(0, 0, 0, 0.05); border-color: rgba(0,0,0,0.1); box-shadow: 0 0 30px rgba(0,0,0,0.1); }
        body.light-mode .hacker-permanent { background: #fff; color: #000; border-color: #000; }
        body.light-mode .hacker-permanent::before { color: #cf611a; }
        body.light-mode .hacker-permanent span::after { color: #cf611a; text-shadow: 0 0 5px rgba(207,97,26,0.5); }
        body.light-mode .container_services { background: #f9f9f9; color: #000; }
        body.light-mode .service_container .service .service_Title h2 { color: #000; }
        body.light-mode .service_container .service .service_Title .icon-service { fill: #000; }
        body.light-mode .service_description ul li { color: #333; }
        body.light-mode .service_wrapper button.button_1 { color: #fff; background: #000; border-color: #000; }
        body.light-mode .service_wrapper button.button_1::after { background: #fff; }
        body.light-mode .service_wrapper button.button_1:hover { color: #000; }
        body.light-mode .service_wrapper button.button_2 { color: #000; background: rgba(255, 255, 255, 0.85); border-color: #000; }
        body.light-mode .service_wrapper button.button_2::after { background: #000; }
        body.light-mode .service_wrapper button.button_2:hover { color: #fff; }
        body.light-mode .header-wrp header > h2 { -webkit-text-stroke: 3px #000; -webkit-text-fill-color: #f9f9f9; }
        body.light-mode .controls ul li { background: #000; }
        body.light-mode .controls ul li::before { border-color: #000; }
        body.light-mode .controls ul li::after { background: rgba(0,0,0,0.2); }
        body.light-mode .slideProgress { background: #000; }
        body.light-mode .arrows svg { fill: #000; }
        body.light-mode .header-wrp .socials a, body.light-mode .arrowDown { color: #000; }
        body.light-mode .image-link { background: #fff; color: #000; border-color: #000; }
        body.light-mode .image-link:hover { background: #000; color: #fff; }
        body.light-mode .skills-section { background: #f9f9f9; }
        body.light-mode .marquee { border-color: #ddd; border-top: 2px solid #ddd; }
        body.light-mode .marquee-content { color: #000; -webkit-text-stroke: 1.5px #000; }
        body.light-mode .grid .grid-el { border-color: #ddd; background: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
        body.light-mode .grid-el .row { color: #000; }
        body.light-mode .grid-el .tags span { border-color: #000; color: #000; }
        body.light-mode .physics-tag { background: #000; color: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        body.light-mode .button { background: #fff; color: #000; border-color: #000; }
        body.light-mode .button:hover { background: #000; color: #fff; }
        body.light-mode .contact { background: #f9f9f9; color: #000; }
        body.light-mode .contact h2 { border-color: #000; color: #000; }
        body.light-mode .contact .row h2 { -webkit-text-stroke: 2px #000; -webkit-text-fill-color: transparent;}
        body.light-mode .contact .socials, body.light-mode .contact .contacts { border-top-color: #000; }
        body.light-mode .contact a { color: #000; }
        body.light-mode .contact a:hover { color: #cf611a; }
        body.light-mode .preloader { box-shadow: inset 55vw 0 0 0 #f9f9f9, inset -55vw 0 0 0 #f9f9f9; }
        body.light-mode .preloader.loaded { box-shadow: inset 0 0 0 0 #f9f9f9, inset 0 0 0 0 #f9f9f9; }
        body.light-mode .preloader .line { background-color: #000; }
        body.light-mode .cursor { background: #000; }
        body.light-mode .cursor-follow { border-color: #000; }
    `;
    document.head.appendChild(style);

    const toggleBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('theme-icon-sun');
    const iconMoon = document.getElementById('theme-icon-moon');
    
    if(!toggleBtn) return;

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
(function() {
    const box = document.querySelector('.box');
    const hackerElement = document.querySelector('.hacker-permanent');
    const hackerSpan = hackerElement ? hackerElement.querySelector('span') : null;
    
    if (box && hackerElement && hackerSpan) {
        const phrases = [
            { data: "ARREGLÉ UN BUG", span: "APARECIERON TRES" },
            { data: "MI CÓDIGO COMPILÓ A LA PRIMERA SIN ERRORES,", span: "LLEVO DOS HORAS BUSCANDO QUÉ HICE MAL" },
            { data: "POR LAS NOCHES", span: "LE ENSEÑO A CLOUD A PROGRAMAR" },
            { data: "UTILIZO EL SARCASMO", span: "PARA OCULTAR MI FALTA DE CONOCIMIENTO" }
        ];
        let currentIdx = 0;
        
        box.addEventListener('mouseenter', () => {
            currentIdx = (currentIdx + 1) % phrases.length;
            hackerElement.setAttribute('data-text', phrases[currentIdx].data);
            hackerSpan.textContent = phrases[currentIdx].span;
        });
    }
})();