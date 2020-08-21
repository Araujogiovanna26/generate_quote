var cores = ["red", "blue", "gray", "pink", "green"];
var mensagens = [
  "Eu não sei o que quero ser, " +
    "mas sei muito bem o que não quero me " +
    "tornar - Friedrich Nietzsche",

  "Quanto mais sei que sei, menos sei que sei - Sócrates",

  "Exige muito de ti e espera pouco dos outros." +
    "Assim, evitarás muitos aborrecimentos - Confúcio",

  "Sábio é aquele que conhece os limites da própria ignorância" + " - Sócrates",

  "É preciso ter o caos dentro de si para gerar uma estrela dançante" +
    " - Friedrich Nietzsche"
];

var refBotao = document.getElementById("botao");
var refParagrafo = document.getElementById("mensagem");
refBotao.addEventListener("click", geraFrases);

function geraFrases() {
  var numero = Math.floor(Math.random() * mensagens.length);
  refParagrafo.innerText = mensagens[numero];
  refParagrafo.style.background = cores[numero];
}
