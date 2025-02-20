import { ActiveModal } from "../App";
import { useQuizContext } from "../providers/quiz-provider";

export function StartModal({
    handleActiveModalChange,
}: {
    handleActiveModalChange: (type: ActiveModal) => void;
}) {
    const { toggleShowAttempts } = useQuizContext();

    return (
        // <div className="fixed inset-0 bg-slate-200 bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 space-y-6">
                <h2 className="text-3xl font-bold text-center text-slate-800">
                    Welcome to the Quiz!
                </h2>
                <p className="text-slate-600 text-center">
                    Are you ready to test your knowledge? You'll have 30 minutes to answer a series
                    of multiple-choice and numerical questions.
                </p>
                <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Multiple choice questions
                    </li>
                    <li className="flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Numerical answer questions
                    </li>
                    <li className="flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        30-minute time limit
                    </li>
                </ul>
            </div>
            <div className="bg-slate-50 px-6 py-4 rounded-b-lg flex items-center justify-between gap-2">
                <button
                    onClick={() => toggleShowAttempts()}
                    className="w-full bg-slate-200 hover:bg-slate-300  transition-colors text-slate-900 px-6 py-2 rounded-md font-semibold"
                >
                    Show history
                </button>

                <button
                    onClick={() => handleActiveModalChange("quiz")}
                    className="w-full bg-brand hover:bg-brand/80 transition-colors text-white px-6 py-2 rounded-md font-semibold"
                >
                    Start Quiz
                </button>
            </div>
        </div>
        // </div>
    );
}
