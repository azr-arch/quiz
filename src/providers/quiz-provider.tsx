import { useContext, createContext, ReactNode } from "react";

const QuizContext = createContext({});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
};

export const useQuizContext = () => useContext(QuizContext);
