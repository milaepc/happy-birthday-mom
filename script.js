// Selección de elementos
const audio = document.getElementById('audio');
const randomMessageButton = document.getElementById('randomMessageButton');
const dailyMessageButton = document.getElementById('dailyMessageButton');
const diaryButton = document.getElementById('diaryButton');
const changeMoodButton = document.getElementById('changeMoodButton');
const toggleMusicButton = document.getElementById('toggleMusicButton');
const messagePopup = document.getElementById('messagePopup');
const popupText = document.getElementById('popupText');
const closePopup = document.getElementById('closePopup');
const diarySection = document.getElementById('diarySection');
const diaryInput = document.getElementById('diaryInput');
const savedDiary = document.getElementById('savedDiary');

// Mensajes aleatorios
const randomMessages = [
    "¡Siempre brilla, mami!",
    "Eres una inspiración para todos.",
    "Que cada día esté lleno de alegría.",
    "Nunca dejes de soñar.",
    "Tu amor ilumina nuestras vidas."
];

// Mensaje del día
const dailyMessage = "Hoy es un día especial, ¡disfrútalo al máximo!";

// Mostrar mensaje aleatorio
randomMessageButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    popupText.textContent = randomMessages[randomIndex];
    messagePopup.style.display = 'block';
});

// Mostrar mensaje del día
dailyMessageButton.addEventListener('click', () => {
    popupText.textContent = dailyMessage;
    messagePopup.style.display = 'block';
});

// Cerrar popup
closePopup.addEventListener('click', () => {
    messagePopup.style.display = 'none';
});

// Activar diario interactivo
diaryButton.addEventListener('click', () => {
    diarySection.style.display = diarySection.style.display === 'none' ? 'block' : 'none';
});

// Guardar nota del diario
document.getElementById('saveDiaryButton').addEventListener('click', () => {
    const diaryText = diaryInput.value;
    if (diaryText) {
        const diaryEntry = document.createElement('p');
        diaryEntry.textContent = diaryText;
        savedDiary.appendChild(diaryEntry);
        diaryInput.value = ''; // Limpiar el campo
    }
});

// Alternar música
toggleMusicButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        toggleMusicButton.textContent = "Pausar Música";
    } else {
        audio.pause();
        toggleMusicButton.textContent = "Reanudar Música";
    }
});

// Modo Luz de Ánimo
changeMoodButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); // Cambiar clase
});

// Estilo CSS para el Modo Luz de Ánimo
const style = document.createElement('style');
style.innerHTML = `
    .light-mode {
        background-color: #fff; /* Cambia a fondo blanco */
        color: #333; /* Cambia el color del texto */
    }
    .light-mode .container {
        color: #000; /* Cambia el color del texto dentro del contenedor */
    }
`;
document.head.appendChild(style);