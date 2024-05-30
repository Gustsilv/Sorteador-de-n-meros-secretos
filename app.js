function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //value armazena o valor dentro do input
    let de = parseInt(document.getElementById('de').value); //value recupera como String, para forçar a entrada de números use a função parseInt
    let ate = parseInt(document.getElementById('ate').value);

   if (de >= ate) {
    alert ('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
   }

   if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
   }



    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        let numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) { //include devolve um valor booleano
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }
        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
    alterarStatusBotao();
}