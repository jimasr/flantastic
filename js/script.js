const roulette = document.getElementById('roulette');

roulette.addEventListener('click', () => {
    roulette.classList.add('spin');
    setTimeout(() => {
        roulette.classList.remove('spin');
    }, 10000);
});