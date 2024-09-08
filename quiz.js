let currentQuestion = 0;
let personalityScores = {};

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const personalityTypeElement = document.getElementById('personality-type');
const personalityDescriptionElement = document.getElementById('personality-description');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    personalityScores = {};
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    for (let i = 0; i < question.options.length; i++) {
        const button = document.createElement('button');
        button.textContent = question.options[i].text;
        button.addEventListener('click', () => selectAnswer(i));
        optionsElement.appendChild(button);
    }
}

function selectAnswer(selectedIndex) {
    const question = quizData[currentQuestion];
    const selectedOption = question.options[selectedIndex];
    
    for (const [personality, score] of Object.entries(selectedOption.scores)) {
        personalityScores[personality] = (personalityScores[personality] || 0) + score;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    const personalityResult = calculatePersonalityResult();
    personalityTypeElement.textContent = personalityResult.type;
    personalityDescriptionElement.textContent = personalityResult.description;
}

function calculatePersonalityResult() {
    let maxScore = 0;
    let personalityType = '';

    for (const [personality, score] of Object.entries(personalityScores)) {
        if (score > maxScore) {
            maxScore = score;
            personalityType = personality;
        }
    }

    return personalityTypes[personalityType];
}

function restartQuiz() {
    currentQuestion = 0;
    resultScreen.style.display = 'none';
    startQuiz();
}