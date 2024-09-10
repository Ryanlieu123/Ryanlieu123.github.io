const adventureData = {
    'storyIntro': "You've always",
    'start': {
        text: "You find yourself at a crossroad in a dense forest. Do you go left or right?",
        options: [
            { text: "Go left", next: "left_path" },
            { text: "Go right", next: "right_path" }
        ]
    },
    'left_path': {
        text: "You encounter a rushing river. Do you try to swim across or look for a bridge?",
        options: [
            { text: "Swim across", next: "swim_river" },
            { text: "Look for a bridge", next: "find_bridge" }
        ]
    },
    'right_path': {
        text: "You come across an old cabin. Do you enter or continue on the path?",
        options: [
            { text: "Enter the cabin", next: "enter_cabin" },
            { text: "Continue on the path", next: "continue_path" }
        ]
    },
    'swim_river': {
        type: 'ending',
        text: "You bravely swim across but get swept away by the current. Your adventure ends here."
    },
    'find_bridge': {
        type: 'ending',
        text: "You find an old bridge and safely cross. You discover a hidden treasure on the other side!"
    },
    'enter_cabin': {
        type: 'ending',
        text: "Inside the cabin, you find a magic portal that transports you to a fantastical realm!"
    },
    'continue_path': {
        type: 'ending',
        text: "The path leads you out of the forest to a beautiful meadow. You decide to build a new life here."
    }
};