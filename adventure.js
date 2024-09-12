function startAdventure() {
    document.getElementById('choice-screen').style.display = 'none';
    document.getElementById('adventure-container').style.display = 'block';
    showAdventureStory();
}

function showAdventureStory() {
    const storyScreen = document.getElementById('adventure-story-screen');
    const storyText = document.getElementById('adventure-story-text');
    const storyImage = document.getElementById('story-image');

    storyScreen.style.display = 'block';
    document.getElementById('adventure-screen').style.display = 'none';
    storyText.textContent = adventureData.storyIntro.text

    if (adventureData.storyIntro.image) {
        storyImage.src = adventureData.storyIntro.image;
        storyImage.style.display = 'block';
    } else {
        storyImage.style.display = 'none';
    }

    document.getElementById('start-adventure-game-btn').addEventListener('click', startAdventureGame);
}

function startAdventureGame() {
    document.getElementById('adventure-story-screen').style.display = 'none';
    document.getElementById('adventure-container').style.display = 'block';
    currentScenario = 'start';
    loadScenario(currentScenario);
}

function loadScenario(scenarioId) {
    if (!adventureData || !adventureData[scenarioId]) {
        console.error('Scenario not found:', scenarioId);
        return;
    }

    document.getElementById('adventure-screen').style.display = 'block';

    const scenario = adventureData[scenarioId];
    const scenarioElement = document.getElementById('adventure-scenario');
    const optionsContainer = document.getElementById('adventure-options');
    
    if (scenarioElement) scenarioElement.innerHTML = scenario.text;
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
    
    const scenarioImage = document.getElementById('scenario-image');
    if (scenario.image) {
        scenarioImage.src = scenario.image;
        scenarioImage.style.display = 'block';
    } else {
        scenarioImage.style.display = 'none';
    }

        scenario.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.addEventListener('click', () => selectAdventureOption(option.next));
            optionsContainer.appendChild(button);
        });
    }
}

function selectAdventureOption(nextScenario) {
    if (!adventureData[nextScenario]) {
        console.error('Next scenario not found:', nextScenario);
        return;
    }

    if (adventureData[nextScenario].type === 'ending') {
        showAdventureEnding(nextScenario);
    } else {
        loadScenario(nextScenario);
    }
}

function showAdventureEnding(endingId) {
    if (!adventureData[endingId]) {
        console.error('Ending scenario not found:', endingId);
        return;
    }

    const ending = adventureData[endingId];
    const adventureScreen = document.getElementById('adventure-screen');
    const adventureResultScreen = document.getElementById('adventure-result-screen');
    const adventureOutcome = document.getElementById('adventure-outcome');
    const restartBtn = document.getElementById('restart-btn');
    
    if (adventureScreen) adventureScreen.style.display = 'none';
    if (adventureResultScreen) adventureResultScreen.style.display = 'block';
    if (adventureOutcome) adventureOutcome.innerHTML = ending.text;
    if (restartBtn) restartBtn.style.display = 'block';
}

function restartAdventure() {
    currentScenario = 'start';
    const adventureResultScreen = document.getElementById('adventure-result-screen');
    const adventureScreen = document.getElementById('adventure-screen');
    const restartBtn = document.getElementById('restart-btn');
    
    if (adventureResultScreen) adventureResultScreen.style.display = 'none';
    if (adventureScreen) adventureScreen.style.display = 'block';
    if (restartBtn) restartBtn.style.display = 'none';
    
    loadScenario(currentScenario);
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const startAdventureBtn = document.getElementById('start-adventure-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    if (startAdventureBtn) {
        startAdventureBtn.addEventListener('click', startAdventure);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartAdventure);
    }
});