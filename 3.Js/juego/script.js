const game = document.getElementById('game');
const basket = document.getElementById('basket');
let score = 0;

// Mover la canasta con las teclas izquierda y derecha
document.addEventListener('keydown', (event) => {
    const basketLeft = basket.offsetLeft;
    if (event.key === 'ArrowLeft' && basketLeft > 0) {
        basket.style.left = basketLeft - 20 + 'px';
    } else if (event.key === 'ArrowRight' && basketLeft < 340) {
        basket.style.left = basketLeft + 20 + 'px';
    }
});

// Crear una nueva estrella
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 380 + 'px';
    star.style.top = '0px';
    game.appendChild(star);
    moveStar(star);
}

// Mover las estrellas hacia abajo
function moveStar(star) {
    const move = setInterval(() => {
        star.style.top = star.offsetTop + 5 + 'px';
        if (star.offsetTop > 580) {
            clearInterval(move);
            game.removeChild(star);
        } else if (checkCollision(star, basket)) {
            clearInterval(move);
            game.removeChild(star);
            updateScore();
        }
    }, 50);
}

// Verificar colisiones entre la canasta y la estrella
function checkCollision(star, basket) {
    const starRect = star.getBoundingClientRect();
    const basketRect = basket.getBoundingClientRect();
    return (
        starRect.left < basketRect.right &&
        starRect.right > basketRect.left &&
        starRect.bottom > basketRect.top
    );
}

// Actualizar la puntuación
function updateScore() {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
}

// Crear estrellas cada 1.5 segundos
setInterval(createStar, 1500);
