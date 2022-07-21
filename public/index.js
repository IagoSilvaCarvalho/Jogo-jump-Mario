//pegar a classe da imagem gif
const mario = document.querySelector('.mario');


//Alerar a class no CSS para usar a animação pulo
const pulo = ()=>{
    mario.classList.add('jump')

    //adicionar um tempo e remover a class para resetar o pulo
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)

}



//criar um evento para pegar a tecla no tlecado
document.addEventListener('keydown', pulo );