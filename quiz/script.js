const quiz = [
    {
        question: "Qual é a capital do Brasil?",
        answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
        correct: 1
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: ["Terra", "Júpiter", "Saturno", "Marte"],
        correct: 1
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        answers: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector", "Graciliano Ramos"],
        correct: 0
    }
];

let current = 0;  // controla a questão atual
let score = 0;    // pontuação do jogador

function showQuestion() {
    document.getElementById('score').textContent = '';
    document.getElementById('nextBtn').style.display = 'none';
    
    const q = quiz[current];  // pega a questão atual
    document.getElementById('question').textContent = q.question;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';  // limpa respostas antigas
    
    q.answers.forEach((ans, i) => {
        const btn = document.createElement('button'); // cria botão
        btn.textContent = ans;  // texto da resposta
        btn.onclick = () => checkAnswer(i);  // ao clicar, chama checkAnswer
        answersDiv.appendChild(btn);  // adiciona o botão na tela
    });
}



function checkAnswer(i) {
    const q = quiz[current];
    if (i === q.correct) {
        score++;
        document.getElementById('score').textContent = 'Correto!';
    } else {
        document.getElementById('score').textContent = 'Errado!';
    }

    // desativa todos os botões depois de responder
    Array.from(document.getElementById('answers').children).forEach(btn => btn.disabled = true);
    
    document.getElementById('nextBtn').style.display = 'inline-block'; // mostra botão "Próxima"
}



document.getElementById('nextBtn').onclick = () => {
    current++;  // vai para próxima pergunta
    if (current < quiz.length) {
        showQuestion();  // mostra nova pergunta
    } else {
        // quando acaba o quiz
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('score').textContent = `Quiz finalizado! Pontuação: ${score} de ${quiz.length}`;
        document.getElementById('nextBtn').innerHTML = `Voltar para o início`;
        document.getElementById('nextBtn').onclick = () => location.reload();
    }
};


showQuestion(); // inicia mostrando a primeira pergunta