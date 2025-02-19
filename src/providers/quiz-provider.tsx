import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { MCQAnswer, Question, questions } from "../quiz-data";
import { getStoredAttempts, storeAttempt } from "../db";

interface QuizContextType {
    questions: Question[];
    currentQuestionIndex: number;
    selectedAnswers: Record<number, MCQAnswer | number>; // Question Id --> SelectedAnswer
    quizCompleted: boolean;
    attempts: any[];
    selectAnswer: (questionId: number, answer: MCQAnswer | number) => void;
    nextQuestion: () => void;
    // Should add prevQuestion ????
    submitQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, MCQAnswer | number>>({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    // time left ??
    const [attempts, setAttempts] = useState<any[]>([]);

    // Load past attempts from indexedDB
    useEffect(() => {
        getStoredAttempts()
            .then(setAttempts)
            .catch((err) => console.log({ err }));
    }, []);

    // Handle answer selection
    const handleSelectAnswer = (questionId: number, answer: MCQAnswer | number) => {
        setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };

    // Navigation through questions
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    // Handle prev ???

    // Handling submit
    const submitQuiz = () => {
        setQuizCompleted(true);
        const attempt = {
            timestamp: new Date().toISOString(),
            selectedAnswers,
        };
        storeAttempt(attempt);
    };

    return (
        <QuizContext.Provider
            value={{
                questions,
                currentQuestionIndex,
                selectedAnswers,
                quizCompleted,
                selectAnswer: handleSelectAnswer,
                nextQuestion: handleNextQuestion,
                submitQuiz,
                attempts,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => useContext(QuizContext);
