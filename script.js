document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('apresenta-lista');

    botaoAcessibilidade.addEventListener('click', function(){
        botaoAcessibilidade.classList.toggle('rotacao-menu');
        opcoesAcessibilidade.classList.toggle('opcoes-acessibilidade');
    })


    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte')

    let tamanhoFonteAtual = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoFonteAtual += 0.1;
        document.body.style.fontSize = `${tamanhoFonteAtual}rem`
    })

    diminuirFonteBotao.addEventListener('click', function () {
        tamanhoFonteAtual -= 0.1;
        document.body.style.fontSize = `${tamanhoFonteAtual}rem`
    })
});
