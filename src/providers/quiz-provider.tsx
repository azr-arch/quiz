import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { MCQAnswer, Question, questions } from "../quiz-data";
import { getStoredAttempts, storeAttempt, clearStoreAttempts } from "../db";
import Scoreboard from "../components/scoreboard";
import AttemptHistory from "../components/attempt-history";

interface QuizContextType {
    questions: Question[];
    currentQuestionIndex: number;
    selectedAnswers: Record<number, MCQAnswer | number>; // Question Id --> SelectedAnswer
    quizCompleted: boolean;
    attempts: any[];
    showAttempts: boolean;
    toggleShowAttempts: () => void;
    selectAnswer: (questionId: number, answer: MCQAnswer | number) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;
    submitQuiz: () => void;
    clearAttempts: () => void;
    score: number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, MCQAnswer | number>>({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [attempts, setAttempts] = useState<any[]>([]);
    const [showAttempts, setShowAttempts] = useState(false);
    const [score, setScore] = useState(0);

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

    const handlePrevQuestion = () => {
        if (currentQuestionIndex === 0) {
            return;
        }
        setCurrentQuestionIndex((prev) => prev - 1);
    };

    // Handling submit
    const submitQuiz = () => {
        setQuizCompleted(true);

        // Calculate score
        let calculatedScore = 0;
        questions.forEach((question) => {
            const userAnswer = selectedAnswers[question.id];

            // Check if user's answer matches the correct answer
            if (userAnswer === question.correctAnswer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);

        const attempt = {
            timestamp: new Date().toISOString(),
            selectedAnswers,
            score: calculatedScore,
        };
        storeAttempt(attempt);
        setAttempts((prev) => [...prev, attempt]);
    };

    const toggleShowAttempts = () => {
        setShowAttempts((prev) => !prev);
    };

    // Clear all attempts
    const clearAttempts = () => {
        clearStoreAttempts()
            .then(() => setAttempts([]))
            .catch(() => console.error("Error while clearing attempts"));
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
                prevQuestion: handlePrevQuestion,
                submitQuiz,
                attempts,
                showAttempts,
                toggleShowAttempts,
                clearAttempts,
                score,
            }}
        >
            {showAttempts ? (
                <AttemptHistory />
            ) : (
                <>
                    {children}
                    {quizCompleted && <Scoreboard />}
                </>
            )}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => {
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error("useQuizContext must be used within QuizProvider");
    }

    return context;
};
