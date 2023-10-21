// Generar un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

document.getElementById('check').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Ingresa un número válido entre 1 y 100.');
        return;
    }
    
    intentos++;

    if (guess === randomNumber) {
        document.getElementById('message').textContent = `¡Felicitaciones! Adivinaste el número ${randomNumber} en ${intentos} intentos.`;
        document.getElementById('message').style.color = 'green';
        document.getElementById('guess').setAttribute('disabled', 'true');
        document.getElementById('check').setAttribute('disabled', 'true');
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'El número es mayor. Intenta nuevamente.';
        document.getElementById('message').style.color = 'red';
    } else {
        document.getElementById('message').textContent = 'El número es menor. Intenta nuevamente.';
        document.getElementById('message').style.color = 'red';
    }
});