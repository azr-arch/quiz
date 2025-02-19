export type MCQAnswer = "a" | "b" | "c" | "d";

export type Question = {
    id: number;
    type: "mcq" | "integer";
    question: string;
    options?: {};
    correctAnswer: MCQAnswer | number;
};

export const questions: Question[] = [
    {
        id: 1,
        type: "mcq",
        question: "Which planet is closest to the sun",
        options: {
            a: "venus",
            b: "mercury",
            c: "earth",
            d: "mars",
        },
        correctAnswer: "b",
    },
    {
        id: 2,
        type: "mcq",
        question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner",
        options: {
            a: "stack",
            b: "queue",
            c: "tree",
            d: "graph",
        },
        correctAnswer: "b",
    },
    {
        id: 3,
        type: "mcq",
        question: "Which of the following is primarily used for structuring web pages",
        options: {
            a: "python",
            b: "java",
            c: "html",
            d: "c++",
        },
        correctAnswer: "c",
    },
    {
        id: 4,
        type: "mcq",
        question: "Which chemical symbol stands for Gold",
        options: {
            a: "Au",
            b: "Gd",
            c: "Ag",
            d: "Pt",
        },
        correctAnswer: "a",
    },
    {
        id: 5,
        type: "mcq",
        question: "Which of these processes is not typically involved in refining petroleum",
        options: {
            a: "fractional distillation",
            b: "cracking",
            c: "polymerization",
            d: "filtration",
        },
        correctAnswer: "d",
    },
    {
        id: 6,
        question: "What is the value of 12 + 28",
        type: "integer",
        correctAnswer: 40,
    },
    {
        id: 7,
        question: " How many states are there in the United States?",
        type: "integer",
        correctAnswer: 50,
    },
    {
        id: 8,
        question: "In which year was the Declaration of Independence signed",
        type: "integer",
        correctAnswer: 1776,
    },
    {
        id: 9,
        question: "What is the value of pi rounded to the nearest integer",
        type: "integer",
        correctAnswer: 3,
    },
    {
        id: 10,
        question: "If a car travels at 60 mph for 2 hours, how many miles does it travel",
        type: "integer",
        correctAnswer: 120,
    },
];
