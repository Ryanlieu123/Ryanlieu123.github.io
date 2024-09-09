document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const startAdventureBtn = document.getElementById('start-adventure-btn');
    const restartBtn = document.getElementById('restart-btn');

    console.log('Start Quiz Button:', startQuizBtn);
    console.log('Start Adventure Button:', startAdventureBtn);
    console.log('Restart Button:', restartBtn);

    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            console.log('Start Quiz clicked');
            startQuiz();
        });
    }

    if (startAdventureBtn) {
        startAdventureBtn.addEventListener('click', () => {
            console.log('Start Adventure clicked');
            startAdventure();
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            console.log('Restart clicked');
            restart();
        });
    }
});

function restart() {
    console.log('Restarting');
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('adventure-container').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('choice-screen').style.display = 'block';
}