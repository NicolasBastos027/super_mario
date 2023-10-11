let mario = document.getElementById('mario');
let cano = document.getElementById('cano_grande');
let cano2 = document.getElementById('cano_baixo');

const pulo_mario = () => {
    let pulando = true;
    if (pulando == true) {
        mario.style.animation = 'animacao_mario 800ms linear';
        document.getElementById('contador_num').innerHTML = `<h2 id='contador_num'> ${contador}</h2>`
        contador = contador + 1;
    }
    pulando = false;
    mario.addEventListener('animationend', () => {
        mario.style.animation = '';
        pulando = true;
    });
};

/* Não deveriamos estar fazendo igualmente (igual ao)* o vídeo?g */

document.addEventListener('keydown', pulo_mario);

let contador = 0;

const loop = setInterval(() => {

    const posicaoCano = cano.offsetLeft;

    const posicaoMario = mario.offsetTop;

    if (posicaoCano <= 220 && posicaoCano > 217 && posicaoMario > 480) {

        cano.style.animation = 'none';

        cano.style.left = `${posicaoCano}`;
        // window.location.href = `reiniciar.html`
    } 
}, 10);

