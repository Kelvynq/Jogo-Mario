const mario = document.querySelector('.mario'); /*Pegar a class Mario do css*/
const pipe = document.querySelector('.pipe'); /*Pegar a class pipe do css*/

/*FUNÇÃO PARA PULAR*/
const jump = () => {
    
    /* Adiciona a função jump */
    mario.classList.add('jump');

    setTimeout(() =>{ /* 2 parâmetros - função e tempo */

    /* Remove a função jump */
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; /* Deslocamento esquerdo */
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    
    if(pipePosition <= 120 && pipePosition > 0  && marioPosition <80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
       
        /*Parar o Mário na posição que ele bater no pipe */
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`
    
        mario.src = './assets/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'
    
        clearInterval(loop); /* Quando acabar o jogo o loop para de rodar */
    }

}, 10)

document.addEventListener('keydown', jump); /*Quando precisonar qualquer tecla será ativado a função jump*/ 