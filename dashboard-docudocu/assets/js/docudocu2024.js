document.addEventListener("DOMContentLoaded", function() {
    var hotBadge = document.querySelector(".badge.badge-pill.bg-danger");
    if (hotBadge) {
        hotBadge.textContent = "Comprar"; // Cambia el texto aquí
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.textoFill');
    const percentage = h1.getAttribute('data-text');
    const fillValue = `${percentage}%`;

    // Establece el porcentaje como variable CSS
    h1.style.setProperty('--fill-percentage', fillValue);

    // Activa la animación después de un pequeño retraso
    setTimeout(() => {
        h1.classList.add('animate');
    }, 100);
});
