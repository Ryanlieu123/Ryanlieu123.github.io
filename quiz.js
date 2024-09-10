console.log("quiz.js loaded");

let currentQuestion = 0;
let personalityScores = {};

function startQuiz() {
    console.log("Starting quiz");
    document.getElementById('choice-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    currentQuestion = 0;
    personalityScores = {};
    loadQuestion();
}

function loadQuestion() {
    console.log("Loading question", currentQuestion);
    if (currentQuestion >= quizData.length) {
        console.log("All questions answered, showing result");
        showResult();
        return;
    }

    const question = quizData[currentQuestion];
    document.getElementById('question').innerHTML = question.question;
    
    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(button);
    });

    const questionImage = document.getElementById('question-image');
    if (question.image) {
        questionImage.src = question.image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }
}

function selectAnswer(selectedIndex) {
    console.log("Answer selected", selectedIndex);
    const question = quizData[currentQuestion];
    const selectedOption = question.options[selectedIndex];
    
    for (const [personality, score] of Object.entries(selectedOption.scores)) {
        personalityScores[personality] = (personalityScores[personality] || 0) + score;
    }

    currentQuestion++;
    loadQuestion();
}

function showResult() {
    console.log("Showing result");
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('restart-btn').style.display = 'block';

    const result = calculatePersonalityResult();
    document.getElementById('personality-type').textContent = result.type;
    document.getElementById('personality-description').textContent = result.description;

    const resultImage = document.getElementById('result-image');
    if (result.image) {
        resultImage.src = result.image;
        resultImage.style.display = 'block';
    } else {
        resultImage.style.display = 'none';
    }

    console.log("Quiz container display:", document.getElementById('quiz-container').style.display);
    console.log("Result screen display:", document.getElementById('result-screen').style.display);
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

function restartQuiz() {
    console.log("Restarting quiz");
    currentQuestion = 0;
    personalityScores = {};
    startQuiz();
}

// Make sure to call this function when the restart button is clicked
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

// Export the startQuiz function so it can be called from other scripts
window.startQuiz = startQuiz;