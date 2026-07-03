// 9. Programación con JavaScript
// 9.1 Variables (let, const)
// 9.2 Tipos de datos (texto, numero, booleano)
const sectionInicio = document.getElementById('inicio'); // object
let isInteractiveActive = false; // booleano
let interactionCount = 0; // numero
const welcomeMessage = "¡Bienvenido a la sección interactiva!"; // texto

// Interacción 1: Evaluador de Ángulos (Condicionales simple, doble y múltiple)
const btnAngle = document.getElementById('btn-angle');
const inputAngle = document.getElementById('input-angle');
const resultAngle = document.getElementById('result-angle');

btnAngle.addEventListener('click', () => {
    // 9.3 Operadores aritméticos, relacionales y lógicos
    let angleValue = Number(inputAngle.value);

    // Validación
    if (isNaN(angleValue) || inputAngle.value === "") {
        resultAngle.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Condicional Simple (Si es mayor a 90)
    if (angleValue > 90) {
        // Podríamos mostrar algo, pero continuaremos con la lógica múltiple
    }

    // Condicional Múltiple y Lógicos
    if (angleValue < 0 || angleValue > 360) {
        resultAngle.textContent = "Ingresa un ángulo entre 0 y 360 grados.";
    } else if (angleValue > 0 && angleValue < 90) {
        resultAngle.textContent = `El ángulo ${angleValue}° es Agudo.`;
    } else if (angleValue === 90) {
        resultAngle.textContent = `El ángulo ${angleValue}° es Recto.`;
    } else if (angleValue > 90 && angleValue < 180) {
        resultAngle.textContent = `El ángulo ${angleValue}° es Obtuso.`;
    } else if (angleValue === 180) {
        resultAngle.textContent = `El ángulo ${angleValue}° es Llano.`;
    } else {
        // Condicional Doble implícita
        resultAngle.textContent = `El ángulo ${angleValue}° es Cóncavo o Completo.`;
    }
});

// Interacción 2: Explicación de Razones (Switch)
const btnReason = document.getElementById('btn-reason');
const selectReason = document.getElementById('select-reason');
const resultReason = document.getElementById('result-reason');

btnReason.addEventListener('click', () => {
    const selected = selectReason.value;

    switch (selected) {
        case 'seno':
            resultReason.innerHTML = "<strong>Seno:</strong> Es la razón entre el cateto opuesto y la hipotenusa.";
            break;
        case 'coseno':
            resultReason.innerHTML = "<strong>Coseno:</strong> Es la razón entre el cateto adyacente y la hipotenusa.";
            break;
        case 'tangente':
            resultReason.innerHTML = "<strong>Tangente:</strong> Es la razón entre el cateto opuesto y el cateto adyacente.";
            break;
        default:
            resultReason.innerHTML = "Por favor, selecciona una razón válida.";
            break;
    }
});

// Menú Hamburguesa
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation-items a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});

// Interacción 3: Desafío Trigonométrico (Uso de confirm, prompt, alert)
const btnChallenge = document.getElementById('btn-challenge');
const resultChallenge = document.getElementById('result-challenge');

btnChallenge.addEventListener('click', () => {
    // Uso de confirm()
    let wantChallenge = confirm("¿Estás listo para un pequeño desafío trigonométrico?");
    
    if (wantChallenge) {
        // Uso de prompt()
        let answer = prompt("Según la tabla, ¿cuál es el valor del Seno de 30°? (Ingresa solo el número):");
        
        // Condicional doble
        if (answer === "0.5" || answer === "0,5") {
            // Uso de alert()
            alert("¡Correcto! Excelente trabajo.");
            resultChallenge.textContent = "¡Has superado el desafío con éxito!";
            isInteractiveActive = true;
        } else {
            alert("Incorrecto. Recuerda revisar la Tabla de Ángulos Notables.");
            resultChallenge.textContent = "Desafío fallido. ¡Sigue estudiando!";
        }
    } else {
        resultChallenge.textContent = "Desafío cancelado. ¡Anímate la próxima vez!";
    }
});
