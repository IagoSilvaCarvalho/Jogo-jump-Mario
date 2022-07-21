//pegar a classe no CSS
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


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
    const pipePosition = pipe.offsetLeft
    //pegar altura do Mario para saber se ele bateu
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    //criar regra para quando o personagem bater no objeto o game parar
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 85  ){
        pipe.style.animation = 'none';
        //condição para as imagens permanecerem onde o game parou
        pipe.style.left = `${pipePosition}px`;
    }
},10 )



//criar um evento para pegar a tecla no tlecado
document.addEventListener('keydown', pulo );