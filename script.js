const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:Qual é a principal função dos glóbulos vermelhos no sangue?

",
        alternativas:[


            {
                texto: "Transportar oxigênio para os tecidos",
                afirmacao: "Os glóbulos vermelhos são essenciais para a oxigenação das células do corpo."
            },
            {
                texto: "Combater infecções ",
                afirmacao: "Glóbulos vermelhos não são responsáveis pela defesa contra infecções; essa é a função dos glóbulos brancos."
            }

        ]
    },
    {
        enunciado: "O que caracteriza uma doença autoimune?",
        alternativas: [
            {
                texto: ") O sistema imunológico ataca células saudáveis do próprio corpo",
                afirmacao: "Doenças autoimunes ocorrem quando o sistema imunológico não consegue distinguir entre células próprias e invasores."
            },
            {
                texto: " A infecção é causada por organismos externos, como bactérias ou vírus.",
                afirmacao: "Infecções causadas por organismos externos são tratadas de maneira diferente das doenças autoimunes."
            }

        ]
    },
    {
        enunciado: "Qual é o propósito da vacinação?",
        alternativas: [
            {
                texto: "Tratar doenças já existentes ",
                afirmacao: "Vacinas não são usadas para tratar doenças; seu objetivo é prevenir infecções futuras."
            },
            {
                texto: "Estimular o sistema imunológico a prevenir infecções futuras",
                afirmacao: "Vacinas treinam o sistema imunológico para reconhecer e combater patógenos antes que causem doenças."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultados();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostrarAlternativa();
}

 function mostrarAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa=document.createElement("button");
        botaoAlternativa.textContent =alternativa.texto;
        botaoAlternativa.addEventListener ("click",()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
        

    }
 }
 function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal+=afirmacao+ " ";
    atual++
    mostraPergunta();

 }
 function mostraResultados(){
    caixaPerguntas.textContent="resumindo...";
    textoResultado.textContent=historiaFinal;
    caixaAlternativas.textContent="";

 }
 mostraPergunta();

