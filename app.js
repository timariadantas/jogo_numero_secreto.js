let listaDeNumeroSorteados = [];
let numeroLimite = 10;

// return dessa função , armazenado na variavel
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1



// criando a função com parâmetro , para modificar o HTML
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto; 
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}

// 
function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número Secreto');
  exibirTextoNaTela('p', 'Escolha o número de de 1 a 10');
}
 exibirMensagemInicial()

function verificarChute(){
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o valor certo com ${tentativas} tentativas !`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto){
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}
// função com return sem parâmetro
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementoNaLista = listaDeNumeroSorteados.length;
  if (quantidadeElementoNaLista == numeroLimite){
    listaDeNumeroSorteados = [];
  }
  if (listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumeroSorteados.push(numeroEscolhido)
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true)

}



