import { useState } from "react";
import Quiz from "./components/quiz";
import { QuizProvider } from "./providers/quiz-provider";
import { StartModal } from "./components/start-modal";

export type ActiveModal = "start" | "quiz";

function App() {
    const [activeModal, setActiveModal] = useState<ActiveModal>("start");

    const handleActiveModalChange = (type: ActiveModal) => {
        setActiveModal(type);
    };

    // Show startmodal or do quiz
    const components = {
        start: <StartModal handleActiveModalChange={handleActiveModalChange} />,
        quiz: <Quiz />,
    };

    return (
        <main className="w-full min-h-screen bg-white flex items-center justify-center">
            <QuizProvider>{components[activeModal]}</QuizProvider>
        </main>
    );
}

export default App;
