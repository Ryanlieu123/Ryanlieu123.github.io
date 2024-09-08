const quizData = [
    {
        question: "How do you typically spend your free time?",
        options: [
            { text: "Reading a book", scores: { introvert: 2, extrovert: 0, analytical: 1, creative: 1 } },
            { text: "Going out with friends", scores: { introvert: 0, extrovert: 2, analytical: 0, creative: 1 } },
            { text: "Working on a hobby project", scores: { introvert: 1, extrovert: 0, analytical: 1, creative: 2 } },
            { text: "Attending a social event", scores: { introvert: 0, extrovert: 2, analytical: 0, creative: 1 } }
        ]
    },
    {
        question: "When faced with a problem, you usually:",
        options: [
            { text: "Analyze it methodically", scores: { introvert: 1, extrovert: 0, analytical: 2, creative: 0 } },
            { text: "Brainstorm creative solutions", scores: { introvert: 0, extrovert: 1, analytical: 0, creative: 2 } },
            { text: "Discuss it with others", scores: { introvert: 0, extrovert: 2, analytical: 1, creative: 1 } },
            { text: "Reflect on it quietly", scores: { introvert: 2, extrovert: 0, analytical: 1, creative: 1 } }
        ]
    },
    {
        question: "In a group project, you prefer to:",
        options: [
            { text: "Take charge and delegate tasks", scores: { introvert: 0, extrovert: 2, analytical: 1, creative: 1 } },
            { text: "Focus on the details and organization", scores: { introvert: 1, extrovert: 0, analytical: 2, creative: 0 } },
            { text: "Generate ideas and inspire others", scores: { introvert: 0, extrovert: 1, analytical: 0, creative: 2 } },
            { text: "Support the team and maintain harmony", scores: { introvert: 1, extrovert: 1, analytical: 1, creative: 1 } }
        ]
    } 
];

const personalityTypes = {
    introvert: {
        type: "The Thoughtful Introvert",
        description: "You are introspective and value deep, meaningful connections. You recharge by spending time alone and excel in environments that allow for focused, independent work."
    },
    extrovert: {
        type: "The Energetic Extrovert",
        description: "You thrive in social situations and gain energy from interacting with others. You're outgoing, enthusiastic, and often the life of the party."
    },
    analytical: {
        type: "The Logical Analyzer",
        description: "You approach problems methodically and rely on facts and data to make decisions. Your strength lies in your ability to think critically and solve complex problems."
    },
    creative: {
        type: "The Imaginative Creator",
        description: "You have a rich inner world and excel at thinking outside the box. Your creativity allows you to come up with unique solutions and express yourself in innovative ways."
    }
};