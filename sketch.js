let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(0,255,0));
  textAlign(CENTER, CENTER);
  textSize(50)
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "The Batman";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Vingadores: Guerra Infinita";          
        } else{
         return "Divertidamente"
        }
      } else {
        if (gostaDeFantasia) {
          return "Percy Jackson: E o Ladrão de Raios"
        } else {
          return "High School Musical"
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Hotel Transivalnya"
    } else {
      return "Sonic:O Filme"
    }
  }
}
