const botaoAlterarTema= document.querySelector('#botao-alterar-tema')
const body= document.querySelector('body')
const imagemBotao= document.querySelector('.imagem-botao')



botaoAlterarTema.addEventListener('click',()=>{
    const modoEscuroAtivado= body.classList.contains('modo-escuro')
    body.classList.toggle('modo-escuro')

    if(modoEscuroAtivado){

        manterModoClaro()
        
    }else{
        adicionarModoEscuro()
    }

})

function adicionarModoEscuro() {
    imagemBotao.setAttribute('src', './src/imagens/moon.png')
}

function manterModoClaro() {
    imagemBotao.setAttribute('src', './src/imagens/sun.png')
}
