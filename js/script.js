(()=> {
    const roulette = document.getElementById('roulette');
    const layover = document.getElementById('layover');

    let degree = Math.floor(Math.random() * 360);

    roulette.addEventListener('click', (e) => {

        let force = Math.floor(Math.random() * 4) + 4;
        let rotation = Math.floor(Math.random() * 360) + 360 * force;

        let x = e.clientX;
        let y = e.clientY;

        console.log(`x: ${x}, y: ${y}`);

        degree = degree + rotation;

        roulette.style.transition = `all ${force}s ease-out`;
        roulette.style.transform = `rotate(${degree}deg)`;

        console.log(layover);

        layover.style.left = `${x} px`;
        layover.style.top = `${y} px`;
    });

    roulette.addEventListener('transitionend', () => {
        roulette.style.transition = 'none';
    });
})();
