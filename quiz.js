// Use let for variables that will be modified
let currentQuestion = 0;
let personalityScores = {};

// Use DOMContentLoaded to ensure the DOM is fully loaded before initializing the quiz
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
});

function initializeQuiz() {
    const startButton = document.getElementById('start-btn');
    const restartButton = document.getElementById('restart-btn');

    if (startButton) startButton.addEventListener('click', startQuiz);
    if (restartButton) restartButton.addEventListener('click', restartQuiz);
}

function startQuiz() {
    const choiceScreen = document.getElementById('choice-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (choiceScreen) choiceScreen.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    currentQuestion = 0;
    personalityScores = {};
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showResult();
        return;
    }

    const question = quizData[currentQuestion];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const questionImage = document.getElementById('question-image');

    if (questionElement) questionElement.textContent = question.question;
    if (optionsElement) optionsElement.innerHTML = '';

    // Handle question image
    if (questionImage) {
        if (question.image) {
            questionImage.src = question.image;
            questionImage.style.display = 'block';
        } else {
            questionImage.style.display = 'none';
        }
    }

    for (let i = 0; i < question.options.length; i++) {
        const button = document.createElement('button');
        button.textContent = question.options[i].text;
        button.addEventListener('click', () => selectAnswer(i));
        optionsElement?.appendChild(button);
    }
}

function selectAnswer(selectedIndex) {
    const question = quizData[currentQuestion];
    const selectedOption = question.options[selectedIndex];
    
    for (const [personality, score] of Object.entries(selectedOption.scores)) {
        personalityScores[personality] = (personalityScores[personality] || 0) + score;
    }

    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const restartButton = document.getElementById('restart-btn');
    const personalityTypeElement = document.getElementById('personality-type');
    const personalityDescriptionElement = document.getElementById('personality-description');

    if (quizScreen) quizScreen.style.display = 'none';
    if (resultScreen) resultScreen.style.display = 'block';
    if (restartButton) restartButton.style.display = 'block';
    
    const personalityResult = calculatePersonalityResult();
    if (personalityTypeElement) personalityTypeElement.textContent = personalityResult.type;
    if (personalityDescriptionElement) personalityDescriptionElement.textContent = personalityResult.description;
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
    const resultScreen = document.getElementById('result-screen');
    if (resultScreen) resultScreen.style.display = 'none';
    startQuiz();
}