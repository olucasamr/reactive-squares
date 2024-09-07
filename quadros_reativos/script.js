
const divContainer = document.querySelector('.Container');

for(i = 0; i <= 499; i++){
    divContainer.innerHTML = divContainer.innerHTML + `<div class="ColorDiv"></div>`
}

const divsColoridas = document.querySelectorAll('.ColorDiv');


divsColoridas.forEach((divsColoridas) => {
    divsColoridas.addEventListener('mouseover', () => {
    divsColoridas.style.transition = `background-color 0s`;
    divsColoridas.style.backgroundColor = gerarCores();
    })
})


divsColoridas.forEach((divsColoridas) => {
    divsColoridas.addEventListener('mouseout', () => {
    divsColoridas.style.backgroundColor = `rgb(22, 22, 22)`;
    divsColoridas.style.transition = `background-color 3s ease`;
    })
})

function gerarCores () {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
