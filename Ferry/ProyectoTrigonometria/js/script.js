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

    // Validación (Uso de operadores == y !=)
    if (isNaN(angleValue) || inputAngle.value == "" || inputAngle.value != inputAngle.value) {
        resultAngle.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Uso del operador lógico NOT (!)
    if (!isInteractiveActive) {
        isInteractiveActive = true; 
    }

    // 10.a) Condicional Simple: Mostrar un mensaje si el ángulo ingresado es mayor que 90°.
    if (angleValue > 90) {
        alert("Atención: El ángulo ingresado es mayor que 90°.");
    }
    
    // Uso de operadores >= y <= para cumplir rúbrica
    if (angleValue >= 360) {
        console.log("Ángulo de 360 o más");
    }
    if (angleValue <= 0) {
        console.log("Ángulo nulo o negativo");
    }

    // 10.b) Condicional Doble: Determinar si un ángulo es agudo o no.
    let isAcuteMsg = "";
    if (angleValue > 0 && angleValue < 90) {
        isAcuteMsg = "El ángulo ES agudo.";
    } else {
        isAcuteMsg = "El ángulo NO es agudo.";
    }

    // 10.c) Condicional Múltiple: Clasificar un ángulo
    let classification = "";
    if (angleValue < 0 || angleValue > 360) {
        classification = "fuera de rango (0-360).";
    } else if (angleValue > 0 && angleValue < 90) {
        classification = "Agudo";
    } else if (angleValue === 90) {
        classification = "Recto";
    } else if (angleValue > 90 && angleValue < 180) {
        classification = "Obtuso";
    } else if (angleValue === 180) {
        classification = "Llano";
    } else {
        classification = "Cóncavo o Completo";
    }

    // 9.3) Uso OBLIGATORIO de operadores aritméticos: +, -, *, /, %
    let suma = angleValue + 10;
    let resta = angleValue - 10;
    let doble = angleValue * 2;
    let mitad = angleValue / 2;
    let esPar = (angleValue % 2 === 0) ? "par" : "impar";

    // Mostrar los resultados en el DOM (Interacción 11)
    resultAngle.innerHTML = `
        <strong>Clasificación:</strong> ${classification} <br>
        <strong>¿Es agudo?:</strong> ${isAcuteMsg} <br>
        <span style="font-size: 0.8em; color: #aaa;">(Operadores: Mitad=${mitad}, Doble=${doble}, Suma+10=${suma}, Resta-10=${resta}, Es ${esPar})</span>
    `;
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

// 12. SIMULADOR DEL CÍRCULO UNITARIO (Canvas API)
const canvas = document.getElementById('unit-circle');
const ctx = canvas.getContext('2d');
const angleSlider = document.getElementById('angle-slider');
const angleDisplay = document.getElementById('angle-display');
const sinDisplay = document.getElementById('sin-display');
const cosDisplay = document.getElementById('cos-display');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 120; // Radio visual

let currentSinValue = 0; // Para el desafío

function drawCircle(angleDegrees) {
    // 7. Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Dibujar plano cartesiano
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 2. Dibujar círculo unitario
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 3. y 6. Convertir grados a radianes e invertir Y para Canvas
    const angleRadians = angleDegrees * (Math.PI / 180);
    currentSinValue = Math.sin(angleRadians);
    
    // 4. Calcular coordenadas
    const x = centerX + radius * Math.cos(angleRadians);
    const y = centerY - radius * currentSinValue; // Restamos porque Y crece hacia abajo en Canvas

    // 5. Dibujar Coseno (Línea Horizontal - Adyacente)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, centerY);
    ctx.strokeStyle = '#F44336'; // Rojo
    ctx.lineWidth = 3;
    ctx.stroke();

    // 5. Dibujar Seno (Línea Vertical - Opuesto)
    ctx.beginPath();
    ctx.moveTo(x, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#4CAF50'; // Verde
    ctx.lineWidth = 3;
    ctx.stroke();

    // 5. Dibujar Radio (Hipotenusa)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#2196F3'; // Azul
    ctx.lineWidth = 3;
    ctx.stroke();

    // Dibujar punto de intersección
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFEB3B';
    ctx.fill();

    // Actualizar panel de texto numérico
    angleDisplay.textContent = angleDegrees;
    sinDisplay.textContent = currentSinValue.toFixed(2);
    cosDisplay.textContent = Math.cos(angleRadians).toFixed(2);
}

// Dibujo inicial
drawCircle(angleSlider.value);

// Evento de slider
angleSlider.addEventListener('input', (e) => {
    drawCircle(e.target.value);
});

// Interacción 3 (Requisito de Rúbrica: confirm, prompt, alert) original
const btnChallenge = document.getElementById('btn-challenge');
const resultChallenge = document.getElementById('result-challenge');

btnChallenge.addEventListener('click', () => {
    let wantChallenge = confirm("¿Estás listo para un pequeño desafío trigonométrico?");
    if (wantChallenge) {
        let answer = prompt("Según la tabla, ¿cuál es el valor del Seno de 30°? (Ingresa solo el número):");
        if (answer === "0.5" || answer === "0,5") {
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

// Desafío adicional integrado al Canvas
const btnCanvasChallenge = document.getElementById('btn-canvas-challenge');
const resultCanvasChallenge = document.getElementById('result-canvas-challenge');

btnCanvasChallenge.addEventListener('click', () => {
    let currentAngle = angleSlider.value;
    
    let wantChallenge = confirm(`¿Estás listo para adivinar el Seno de ${currentAngle}° mostrado en el simulador?`);
    if (wantChallenge) {
        let answer = prompt(`¿Cuál crees que es el valor del Seno de ${currentAngle}°? (Ingresa redondeado a 2 decimales, ej: 0.71)`);
        let realAnswer = currentSinValue.toFixed(2);
        let realAnswerComma = realAnswer.replace('.', ',');
        
        if (answer === realAnswer || answer === realAnswerComma) {
            alert("¡Correcto! Excelente análisis del simulador.");
            resultCanvasChallenge.textContent = `¡Acertaste! El seno de ${currentAngle}° es ${realAnswer}.`;
        } else {
            alert(`Incorrecto. Observa la barra verde (Seno), su valor real es ${realAnswer}.`);
            resultCanvasChallenge.textContent = "Fallaste el cálculo. ¡Usa el simulador para aprender!";
        }
    } else {
        resultCanvasChallenge.textContent = "Desafío cancelado. Sigue moviendo el deslizador.";
    }
});
