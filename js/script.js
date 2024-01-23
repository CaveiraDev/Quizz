// DECLARAÇÃO DE VARIAVEIS

const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContaine = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

//Perguntas 
const questions = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual linguagem de programação é amplamente utilizada para desenvolvimento mobile?",
        "answers": [
            {
                "answer": "Java",
                "correct": false
            },
            {
                "answer": "Swift",
                "correct": true
            },
            {
                "answer": "C#",
                "correct": false
            },
            {
                "answer": "Python",
                "correct": false
            },
        ]
    },
    {
        "question": "O que significa HTML?",
        "answers": [
            {
                "answer": "Hyper Text Markup Language",
                "correct": true
            },
            {
                "answer": "Highly Typed Modeling Language",
                "correct": false
            },
            {
                "answer": "Hyperlink and Text Management Language",
                "correct": false
            },
            {
                "answer": "Home Tool Markup Language",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual é o propósito principal da linguagem de programação Python?",
        "answers": [
            {
                "answer": "Desenvolvimento de jogos",
                "correct": false
            },
            {
                "answer": "Inteligência artificial e automação",
                "correct": true
            },
            {
                "answer": "Programação web",
                "correct": false
            },
            {
                "answer": "Análise de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "O que é Git?",
        "answers": [
            {
                "answer": "Um sistema operacional",
                "correct": false
            },
            {
                "answer": "Um banco de dados",
                "correct": false
            },
            {
                "answer": "Um sistema de controle de versão",
                "correct": true
            },
            {
                "answer": "Uma linguagem de programação",
                "correct": false
            },
        ]
    },
    {
        "question": "O que é JavaScript?",
        "answers": [
            {
                "answer": "Uma linguagem de marcação",
                "correct": false
            },
            {
                "answer": "Um estilo de CSS avançado",
                "correct": false
            },
            {
                "answer": "Uma linguagem de programação para web",
                "correct": true
            },
            {
                "answer": "Um banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Como você declara uma variável em JavaScript usando o let?",
        "answers": [
            {
                "answer": "variable x",
                "correct": false
            },
            {
                "answer": "let x",
                "correct": true
            },
            {
                "answer": "var x",
                "correct": false
            },
            {
                "answer": "const x",
                "correct": false
            },
        ]
    },
    {
        "question": "O que é um callback em JavaScript?",
        "answers": [
            {
                "answer": "Uma função que retorna um valor",
                "correct": false
            },
            {
                "answer": "Uma função passada como argumento para outra função",
                "correct": true
            },
            {
                "answer": "Um tipo de loop",
                "correct": false
            },
            {
                "answer": "Um método de array",
                "correct": false
            },
        ]
    },
];

//Subtituição do quizz para a primeira pergunta

function init() {
    //criar a primeira pergunta
    createQuestion(0);
}

//cria uma pergunta 
function createQuestion(i) {
    //Lipar a questão anterior
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function (btn) {
        btn.remove();
    });
    //alterar o texto da pergunta

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    //insere as alternativas 
    questions[i].answers.forEach(function (answer, i) {

        //cria o template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // remover hide e template class 
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("awnswer-template");


        // inserir a alternativa na tela
        answersBox.appendChild(answerTemplate);

        //Inserir um evento de click no botão

        answerTemplate.addEventListener("click", function () {
            checkAnswer(this);
        });

    });

    //incrementar o número da questão
    actualQuestion++;
}

//verificando resposta do usuário

function checkAnswer(btn) {

    //selecionar todos botões;
    const buttons = answersBox.querySelectorAll("button");

    //verifica se as resposta está correta e adiciona classes
    buttons.forEach(function (button) {
        if (button.getAttribute("correct-answer") === "true") {
            button.classList.add("correct-answer");

            //checa se o usuário acertou a pergunta
            if (btn == button) {
                //incremento dos pontos
                points++;
            }
        } else {
            button.classList.add("wrong-answer");
        }
    });

    //exibir a proxima pergunta para o usuário
    nextQuestion();
}

//exibe a procima pergunta do quizz
function nextQuestion() {
    // timer para usuario ver as respostas 

    setTimeout(function () {
        //verifica se ainda há perguntas
        if (actualQuestion >= questions.length) {
            //apresenta mensagem de sucesso

            showSuccessMessage();
            return;
        }
        createQuestion(actualQuestion);

    }, 1500);
}

//exibe a tela fial 
function showSuccessMessage() {

    hideOrShowQuizz();

    // troca dados da tela de sucesso

    //calcilar score 

    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector("#display-score span");

    displayScore.textContent = score.toString();

    //alterar o nuero de perguntas corretas

    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;

    // alterar o total de perguntas 
    const totalQuestions = document.querySelector("#questions-qty");

    totalQuestions.textContent = questions.length;


}
//mostra ou esconde score 

function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContaine.classList.toggle("hide");
}
//Reiniciar Quizz 
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener('click', function () {
    //zerar o jogo 
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();

});
//inicialização do Quizz
init();