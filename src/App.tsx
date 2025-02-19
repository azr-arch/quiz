import Quiz from "./components/quiz";
import { QuizProvider } from "./providers/quiz-provider";

function App() {
    return (
        <main className="w-full min-h-screen bg-white flex items-center justify-center">
            <QuizProvider>
                <Quiz />
            </QuizProvider>
        </main>
    );
}

export default App;
