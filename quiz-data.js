const quizData = [
    {
        question: "<strong>The Forest of Bobs</strong><br>You've always heard tales about the Forest of Bobs—an ancient, mysterious woodland said to be both beautiful and dangerous. Some say the trees whisper secrets, others claim that the deeper you go, the more the forest reveals about who you truly are. One quiet afternoon, you decide to explore it for yourself.",
        image: "images/Q1.jpg",
        options: [
            { text: "You head into the Forest", scores: { introvert: 1, extrovert: 1, analytical: 1, creative: 1 } },
        ]
    },
    {
        question: "<strong>Part 1: The Entrance</strong><br>You stand at the edge of the forest. The air is cool and the wind rustles the leaves, almost as if it's inviting you in. You take a step forward and feel the crunch of the dirt path beneath your boots.<br><br>Suddenly, you hear a rustling in the bushes ahead. What do you do?",
        image: "images/Q1.jpg",
        options: [
            { text: "You call out loudly, “Who's there?”", scores: { introvert: 0, extrovert: 2, analytical: 0, creative: 1 } },
            { text: "You decide to stay quiet, hoping to pass by unnoticed", scores: { introvert: 2, extrovert: 0, analytical: 1, creative: 0 } },
        ]
    },
    {
        question: "The rustling is now getting louder.<br>Do you investigate or back away?",
        image: "images/Q1.jpg",
        options: [
            { text: "You approach cautiously but with excitement”", scores: { introvert: 0, extrovert: 1, analytical: 0, creative: 2 } },
            { text: "You back away, unsure if it's safe to get involved", scores: { introvert: 1, extrovert: 0, analytical: 2, creative: 0 } },
        ]
    },
    {
        question: "<strong>Part 2: The Fork in the Path</strong><br>The path splits into two. One trail is overgrown, its entrance almost hidden by thick vines and shadows. The other is clear, bathed in sunlight with flowers blooming along its edges.<br><br>Which path will you choose?",
        image: "images/Q1.jpg",
        options: [
            { text: "You opt for the overgrown path, feeling an urge to challenge yourself and explore the unknown.", scores: { introvert: 0, extrovert: 2, analytical: 0, creative: 1 } },
            { text: "You choose the sunny path, preferring a peaceful and quiet walk where you can be alone with your thoughts.", scores: { introvert: 2, extrovert: 0, analytical: 1, creative: 0 } },
        ]
    },
    {
        question: "As you approach your path you hear a loud fart in the distance and it begins to smell.",
        image: "images/Q1.jpg",
        options: [
            { text: "You continue on your chosen path without hesitation, driven by a desire for adventure, no matter the risk.", scores: { introvert: 0, extrovert: 1, analytical: 0, creative: 2 } },
            { text: "You pick the other path, deciding that it's better to play it safe and avoid potential danger.", scores: { introvert: 1, extrovert: 0, analytical: 2, creative: 0 } },
        ]
    },
    {
        question: "<strong>Part 3: The Clearing</strong><br>After walking for some time, you come across a clearing in the middle of the forest. In the center stands an ancient, moss-covered statue of the Bobs god. The air feels different here—thicker, charged with energy.",
        image: "images/Q1.jpg",
        options: [
            { text: "You step forward and place your hand on the statue, calling out to the Bobs god", scores: { introvert: 0, extrovert: 2, analytical: 0, creative: 1 } },
            { text: "You stay on the edge of the clearing, watching and waiting, scared of angering the Bobs god", scores: { introvert: 2, extrovert: 0, analytical: 1, creative: 0 } },
        ]
    },
    {
        question: "Suddenly the statue of the Bobs god begins to shake and collapse revealing a human in the centre.",
        image: "images/Q1.jpg",
        options: [
            { text: "You examine the human closely, inspecting the details", scores: { introvert: 0, extrovert: 1, analytical: 0, creative: 2 } },
            { text: "You take a few steps back, deciding it's better to avoid the human", scores: { introvert: 1, extrovert: 0, analytical: 2, creative: 0 } },
        ]
    },
    {
        question: "<strong>Part 4: The Ending</strong><br>Once the rubble has settled you realise that the human turned out to be your partner Bobs.",
        image: "images/Q1.jpg",
        options: [
            { text: "You run up to Bobs happy to see them", scores: { introvert: 1, extrovert: 0, analytical: 2, creative: 0 } },
            { text: "You exclaim 'Bobs how did you get here?'", scores: { introvert: 0, extrovert: 2, analytical: 0, creative: 1 } },
        ]
    },
];

const personalityTypes = {
    introvert: {
        type: "The Thoughtful Introvert",
        image: "images/Q1.jpg",
        description: "You are introspective and value deep, meaningful connections. You recharge by spending time alone and excel in environments that allow for focused, independent work."
    },
    extrovert: {
        type: "The Energetic Extrovert",
        image: "images/Q1.jpg",
        description: "You thrive in social situations and gain energy from interacting with others. You're outgoing, enthusiastic, and often the life of the party."
    },
    analytical: {
        type: "The Logical Analyzer",
        image: "images/Q1.jpg",
        description: "You approach problems methodically and rely on facts and data to make decisions. Your strength lies in your ability to think critically and solve complex problems."
    },
    creative: {
        type: "The Imaginative Creator",
        image: "images/Q1.jpg",
        description: "You have a rich inner world and excel at thinking outside the box. Your creativity allows you to come up with unique solutions and express yourself in innovative ways."
    }
};