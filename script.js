const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
let escalaSi = 1;

btnNo.addEventListener("mouseover", () => {
    // 1. Mover el botón NO a una posición aleatoria
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;

    // 2. Hacer que el botón SÍ sea más grande
    escalaSi += 0.2;
    btnSi.style.transform = `scale(${escalaSi})`;
});

btnSi.addEventListener("click", () => {
    alert("¡Sabía que dirías que sí! 😍");
});
