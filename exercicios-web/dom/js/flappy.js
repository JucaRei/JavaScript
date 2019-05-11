// função para criar um novo elemento
function novoElemento(tagName, className) {
  const elem = document.createElement(tagName); // recebe como parâmetro o nome da tag
  elem.className = className;
  return elem;
}

// 2 barreiras uma embaixo e outro encima
function Barreira(reversa = false) {
  this.elemento = novoElemento("div", "barreira"); // recebe a div, que tem a classe barreira

  const borda = novoElemento("div", "borda"); // adiciona a borda ou o corpo primeiro
  const corpo = novoElemento("div", "corpo");
  // alternar entre borda e corpo
  this.elemento.appendChild(reversa ? corpo : borda);
  this.elemento.appendChild(reversa ? borda : corpo);

  this.setAltura = altura => (corpo.style.height = `${altura}px`); // setar a altura da barreira
}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
  this.elemento = novoElemento("div", "par-de-barreiras"); // div que tem a classe par-de-barreiras

  this.superior = new Barreira(true); // barreira superior é do tipo reversa
  this.inferior = new Barreira(false);

  //lembrando que o this , pode ser acessado posteriormente / função construtora
  this.elemento.appendChild(this.superior.elemento); // no par de barreiras a superior
  this.elemento.appendChild(this.inferior.elemento); // barreira inferior

  // sortear as aberturas de passagem , para ser randômica
  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura); // lembrando que math.random vai de 0 a 1 , multiplica para dar o valor da altura menos abertura , para deixar o espaço
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  //pega o x a posição atual
  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]); // saber em que posição o par de barreiras está
  this.setX = x => (this.elemento.style.left = `${x}px`); // alterando o x
  this.getLargura = () => this.elemento.clientWidth; // saber a largura do elemento

  this.sortearAbertura(); // vai automaticamente setar um valor aleatório
  this.setX(x);
}

// const b = new ParDeBarreiras(700, 200, 800)    // b objeto criado a partir dessa função construtora
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

// função contrutora // responsável por controlar multiplas barreiras // reaproveitando e passando elas dentro do jogo
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
  // notificar ponto , quando uma determinada barreira cruzar pelo meio do jogo (no momento em que o pássaro, passar 1 ponto é contabilizado)
  this.pares = [
    new ParDeBarreiras(altura, abertura, largura), // recebe a altura do jogo, a abertura , pro pássaro passar, largura a barreira começa for da tela
    new ParDeBarreiras(altura, abertura, largura + espaco), // espaço entre uma barreira e outra
    new ParDeBarreiras(altura, abertura, largura + espaco * 2),
    new ParDeBarreiras(altura, abertura, largura + espaco * 3)
  ];

  const deslocamento = 3; // velocidade do deslocamento das barreiras
  this.animar = () => {
    // função para dar um passo na animação
    this.pares.forEach(par => {
      // passa por cada um dos pares do jogo e fazer com que eles se deslocaquem
      par.setX(par.getX() - deslocamento); // pega o x atual menos o deslocamento e setando pro x novo

      // quando o elemento sair da área do jogo
      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espaco * this.pares.length); //se a barreira for passar ate 0(sumir), ela volta pro final da fila
        par.sortearAbertura(); // para a barreira reusada , aparecer como uma nova barreira
      }

      const meio = largura / 2; // quando determinada barreira cruzou o meio
      const cruzouOMeio =
        par.getX() + deslocamento >= meio && par.getX() < meio; // significa que ele cruzou o meio
      if (cruzouOMeio) notificarPonto(); // ao cruzar o meio , o usuário é notificado e o ponto computado
    });
  };
}

function Passaro(alturaJogo) {
  let voando = false;

  this.elemento = novoElemento("img", "passaro");
  this.elemento.src = "imgs/passaro.png";

  this.getY = () => parseInt(this.elemento.style.bottom.split("px")[0]); //saber qual posição em que o pássaro tá
  this.setY = y => (this.elemento.style.bottom = `${y}px`); // setar a altura em que o pássaro tá

  window.onkeydown = e => (voando = true); // onkeydown quando o usuario teclar qualquer tecla pressionada , ele ta voando pra true
  window.onkeyup = e => (voando = false); //onkeyup , soltou a tecla , seta pra false

  this.animar = () => {
    const novoY = this.getY() + (voando ? 8 : -5); // quanto o passaro sobe(8) ou cai(-5)
    const alturaMaxima = alturaJogo - this.elemento.clientHeight; //altura máxima que o pássaro pode voar

    if (novoY <= 0) {
      this.setY(0);
    } else if (novoY >= alturaMaxima) {
      this.setY(alturaMaxima);
    } else {
      this.setY(novoY);
    }
  };

  this.setY(alturaJogo / 2);
}

function Progresso() {
  this.elemento = novoElemento("span", "progresso");
  this.atualizarPontos = pontos => {
    this.elemento.innerHTML = pontos;
  };
  this.atualizarPontos(0);
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

//checar colisão
function estaoSobrepostos(elementoA, elementoB) {
  const a = elementoA.getBoundingClientRect(); // retângulo associado ao elemento A
  const b = elementoB.getBoundingClientRect(); // retângulo associado ao elemento B

  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left; // verificar se há ou não sobre-posição horizontal
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;
  return horizontal && vertical;
}

function colidiu(passaro, barreiras) {
  let colidiu = false;
  barreiras.pares.forEach(parDeBarreiras => {
    if (!colidiu) {
      const superior = parDeBarreiras.superior.elemento;
      const inferior = parDeBarreiras.inferior.elemento;
      colidiu =
        estaoSobrepostos(passaro.elemento, superior) ||
        estaoSobrepostos(passaro.elemento, inferior);
    }
  });
  return colidiu;
}

// função que de fato vai reprensentar o jogo
function FlappyBird() {
  let pontos = 0;

  const areaDoJogo = document.querySelector("[wm-flappy]");
  const altura = areaDoJogo.clientHeight; // calcular a altura do jogo
  const largura = areaDoJogo.clientWidth; ///calcular a largura do jogo

  const progresso = new Progresso(); // cria o progresso
  const barreiras = new Barreiras(
    altura,
    largura,
    200,
    400,
    () => progresso.atualizarPontos(++pontos) // notifica ponto
  );
  const passaro = new Passaro(altura);

  areaDoJogo.appendChild(progresso.elemento);
  areaDoJogo.appendChild(passaro.elemento);
  barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

  this.start = () => {
    // loop do jogo
    const temporizador = setInterval(() => {
      barreiras.animar();
      passaro.animar();

      if (colidiu(passaro, barreiras)) {
        clearInterval(temporizador);
      }
    }, 20);
  };
}

new FlappyBird().start();
