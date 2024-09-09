let currentQuestion = 0;
let personalityScores = {};

document.addEventListener('DOMContentLoaded', initializeQuiz);

function initializeQuiz() {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const startOverBtn = document.getElementById('restart-btn');

    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', startQuiz);
    } else {
        console.error("Start Quiz button not found");
    }

    if (startOverBtn) {
        startOverBtn.addEventListener('click', startOver);
    } else {
        console.error("Start Over button not found");
    }
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

    if (questionImage) {
        if (question.image) {
            questionImage.src = question.image;
            questionImage.style.display = 'block';
        } else {
            questionImage.style.display = 'none';
        }
    }

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(button);
    });
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
    const quizContainer = document.getElementById('quiz-container');
    const resultScreen = document.getElementById('result-screen');
    const personalityTypeElement = document.getElementById('personality-type');
    const personalityDescriptionElement = document.getElementById('personality-description');
    const resultImage = document.getElementById('result-image');
    const startOverBtn = document.getElementById('restart-btn');

    if (quizContainer) quizContainer.style.display = 'none';
    if (resultScreen) resultScreen.style.display = 'block';
    if (startOverBtn) startOverBtn.style.display = 'block';
    
    const personalityResult = calculatePersonalityResult();
    if (personalityTypeElement) personalityTypeElement.textContent = personalityResult.type;
    if (personalityDescriptionElement) personalityDescriptionElement.textContent = personalityResult.description;
    
    if (resultImage) {
        if (personalityResult.image) {
            resultImage.src = personalityResult.image;
            resultImage.style.display = 'block';
        } else {
            resultImage.style.display = 'none';
        }
    }
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

    return personalityTypes[personalityType] || { type: 'Unknown', description: 'No matching personality found.' };
}

function startOver() {
    const choiceScreen = document.getElementById('choice-screen');
    const quizContainer = document.getElementById('quiz-container');
    const resultScreen = document.getElementById('result-screen');
    const startOverBtn = document.getElementById('restart-btn');

    if (choiceScreen) choiceScreen.style.display = 'block';
    if (quizContainer) quizContainer.style.display = 'none';
    if (resultScreen) resultScreen.style.display = 'none';
    if (startOverBtn) startOverBtn.style.display = 'none';

    currentQuestion = 0;
    personalityScores = {};
}