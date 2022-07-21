//pegar a classe no CSS
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.fim')
const jogar = document.querySelector('.jogar')
const nuvem = document.querySelector('.nuvem')


//Alerar a class no CSS para usar a animação pulo
const pulo = ()=>{
    mario.classList.add('jump')

    //adicionar um tempo e remover a class para resetar o pulo
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)

};
//criar loop para fim de game
const loop = setInterval(()=>{
    //pegar posicão do bloco para saber quando ira bater
    const pipePosition = +window.getComputedStyle(pipe).left.replace('px','')
    const nuvemPosition = +window.getComputedStyle(nuvem).left.replace('px','')
    //pegar altura do Mario para saber se ele bateu
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    //criar regra para quando o personagem bater no objeto o game parar
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 85  ){
        pipe.style.animation = 'none';
        mario.style.animation = 'none';
        nuvem.style.animation = 'none';
        //condição para as imagens permanecerem onde o game parou
        pipe.style.left = `${pipePosition}px`;
        mario.style.bottom = `${marioPosition}px`;
        nuvem.style.left = `${nuvemPosition}px`;
        //mudar a imagem após perder
        mario.src = "/public/img/game-over.png";
        mario.style.width ='80px';
        mario.style.left = '40px';
        //aparecer imagem game over
        gameOver.style.display = 'block';
        jogar.style.display = 'block';
        //encerrar o loop pois o game acabou
        clearInterval(loop);
    }},10 )



//criar um evento para pegar a tecla no tlecado
document.addEventListener('keydown', pulo );