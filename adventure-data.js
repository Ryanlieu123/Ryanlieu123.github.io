const adventureData = {
    storyIntro: {
        text: "Legend has it that the Forest of Treasures hides riches beyond imagination, but it also guards deadly traps for those who are unworthy or too greedy. One quiet morning, you decide to set out on a quest to uncover the mysteries of this forest. As you approach its edge, the sunlight filters through the towering trees, casting dancing shadows along the mossy ground. You feel the pull of adventure deep in your bones.",
        image: "images/storyIntro.png",
    },

    start: {
        text: "<strong>Part 1: The path to treasure</strong><br>As you enter the forest, the path quickly splits into two. One trail seems well-worn, with large trees lining the way like silent guardians. The other is less traveled, with twisted vines creeping along the ground, almost as if nature itself is trying to conceal what lies ahead.<br>Which path do you choose?",
        image: "images/start.png",
        options: [
            { text: "The Well-Worn Path: A familiar road, often walked by those before you, offering a sense of security.", next: "wellWornPath" },
            { text: "The Twisted Path: Mysterious and wild, this path calls to those who seek the unknown, willing to face whatever dangers it may hold.", next: "twistedPath" }
        ]
    },

    wellWornPath: {
        text: "<strong>Part 2: Twilight hours</strong><br>The path forward is paved out but you cannot help but feel uneasy. Each new step seems to lead you to towards a dead end. The road splits in 2.<br>Which path do you choose?",
        image: "images/wellWornPath.png",
        options: [
            { text: "The Path of Sunlight: A clear path where beams of sunlight break through the canopy, illuminating the way ahead with golden light.", next: "pathOfSunlight" },
            { text: "The Path of Shadows: A dark, narrow trail that twists and turns, shrouded in thick foliage, where only faint whispers can be heard.", next: "pathOfShadows" }
        ]
    },

    twistedPath: {
        text: "<strong>Part 2: The Second Fork</strong><br>The trees are thicker here, and the air feels heavier, as if the forest is watching your every move. Each new direction seems to hold both promise and risk.<br>Which path do you choose?",
        image: "images/twistedPath.png",
        options: [
            { text: "The Path of Echoes: This path feels alive with sound—the forest echoes your footsteps, and distant noises keep you on edge.", next: "pathOfEchoes" },
            { text: "The Path of Silence: An unnerving quiet blankets this trail, as if the forest itself is holding its breath, waiting for something to happen.", next: "pathOfSilence" }
        ]
    },

    pathOfSunlight: {
        text: "<strong>Part 3: The Final Challenge</strong><br>This is the last decision you'll make before reaching your treasure—or your doom.<br>Which path do you choose?",
        image: "images/pathOfSunlight.png",
        options: [
            { text: "The Path of Flowers: This path is lined with vibrant flowers, their colors so bright they seem to glow.", next: "sunlightFlowers" },
            { text: "The Path of Stones: A rocky trail, uneven underfoot, but the stones seem to shimmer faintly, as if containing some hidden power.", next: "sunlightStones" }
        ]
    },

    pathOfShadows: {
        text: "<strong>Part 3: The Final Challenge</strong><br>This is the last decision you'll make before reaching your treasure—or your doom.<br>Which path do you choose?",
        image: "images/pathOfShadows.png",
        options: [
            { text: "The Path of Roots: Gnarled tree roots weave across this path, making it treacherous, but something glimmers at the end.", next: "shadowsRoots" },
            { text: "The Path of Fog: A thick fog blankets this trail, making it nearly impossible to see more than a few feet ahead. You hear bouncing in the distance", next: "shadowsFog" }
        ]
    },

    pathOfEchoes: {
        text: "<strong>Part 3: The Final Challenge</strong><br>This is the last decision you'll make before reaching your treasure—or your doom.<br>Which path do you choose?",
        image: "images/pathOfShadows.png",
        options: [
            { text: "The Path of Crystals: Glittering crystals jut out from the earth, reflecting light in mesmerizing patterns. The air hums with energy.", next: "echoesCrystals" },
            { text: "The Path of Winds: The wind howls through the trees here, tugging at your clothes as if trying to pull you toward the unknown.", next: "echoesWinds" }
        ]
    },

    pathOfSilence: {
        text: "<strong>Part 3: The Final Challenge</strong><br>This is the last decision you'll make before reaching your treasure—or your doom.<br>Which path do you choose?",
        image: "images/pathOfShadows.png",
        options: [
            { text: "The Path of Gold: A narrow trail littered with golden leaves that crunch beneath your feet. The scent of something sweet lingers in the air.", next: "silenceGold" },
            { text: "The Path of Darkness: No light penetrates this path. It's pitch black, and every step feels like a leap into the abyss.", next: "silenceDarkness" }
        ]
    },

    // Endings
    sunlightFlowers: {
        text: "You find a beautiful meadow with a chest full of sparkling flowers. The treasure is yours, and you leave the forest richer than you ever dreamed.<br><br><strong>Collect your prize!</strong>",
        image: "images/pathOfShadows.png",
        type: "ending"
    },

    sunlightStones: {
        text: "You uncover a cave where the stones glow in the dark. Unfortunately someone has been here before and emptied out the cave.",
        image: "images/pathOfShadows.png",
        type: "ending"
    },

    shadowsRoots: {
        text: "You trip over the roots, falling into a hidden pit. At the bottom, you find a pile of bones and realize you've stumbled into a trap. No treasure here.",
        image: "images/pathOfShadows.png",
        type: "ending"
    },

    shadowsFog: {
        text: "The fog leads you to a clearing where a large stone statue holds a golden ball. The moment you touch it, the fog lifts, and you've earned the forest's second best treasure.<br><br><strong>Collect your prize!</strong>",
        image: "images/pathOfShadows.png",
        type: "ending"
    },

    echoesCrystals: {
        text: "You reach a cave full of shimmering crystals. Among them, you find a flawless diamond, you've earned the forest's best treasure.<br><br><strong>Collect your prize!</strong>",
        image: "images/pathOfShadows.png",
        type: "ending"
    },

    echoesWinds: {
        text: "The wind guides you to an ancient temple hidden deep in the woods. The temple has long been abandoned and nothing remains.",
        image: "images/pathOfShadows.png",
        type: "ending"
    },

    silenceGold: {
        text: "The golden leaves lead you to a hidden grove, where you find a golden chest. Inside a note has been left behind from long ago.<br><br><strong>Collect your note!</strong>",
        image: "images/pathOfShadows.png",
        type: "ending"
    },

    silenceDarkness: {
        text: "The darkness consumes you as you stumble forward blindly. There is no treasure here—only endless night.",
        image: "images/pathOfShadows.png",
        type: "ending"
    }
};