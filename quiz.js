console.log('quiz.js is loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is fully loaded');

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const personalityTypeElement = document.getElementById('personality-type');
    const personalityDescriptionElement = document.getElementById('personality-description');
    const startButton = document.getElementById('start-btn');
    const restartButton = document.getElementById('restart-btn');

    console.log('Elements retrieved:', { startScreen, quizScreen, resultScreen, questionElement, optionsElement, personalityTypeElement, personalityDescriptionElement, startButton, restartButton });

    if (startButton) {
        startButton.addEventListener('click', startQuiz);
        console.log('Start button event listener added');
    } else {
        console.error('Start button not found');
    }

    if (restartButton) {
        restartButton.addEventListener('click', restartQuiz);
        console.log('Restart button event listener added');
    } else {
        console.error('Restart button not found');
    }

    function startQuiz() {
        console.log('startQuiz function called');
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        personalityScores = {};
        loadQuestion();
    }

    // ... rest of your code ...

    console.log('quiz.js finished loading');
});

// Add this at the end of the file
console.log('quiz-data.js content:', quizData, personalityTypes);