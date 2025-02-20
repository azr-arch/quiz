import { useQuizContext } from "../providers/quiz-provider";

const Scoreboard = () => {
    const { questions, showAttempts, score, toggleShowAttempts } = useQuizContext();

    const percentage = (score / 10) * 100; // 1 Mark for every correct ones
    const totalQuestions = questions.length;

    return (
        <div className="absolute bg-white  flex items-center justify-center inset-0 ">
            <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-slate-800">Quiz Completed!</h2>
                <div className="w-48 h-48 mx-auto relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="10"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="10"
                            strokeDasharray={`${percentage * 2.827}, 282.7`}
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-slate-700">{`${score}/${totalQuestions}`}</span>
                    </div>
                </div>
                <p className="text-xl text-slate-600">
                    You scored <span className="font-bold text-slate-800">{score}</span> out of{" "}
                    <span className="font-bold text-slate-800">{totalQuestions}</span> questions
                    correctly.
                </p>
                <div className="space-y-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 rounded-md font-semibold"
                    >
                        Restart Quiz
                    </button>
                    <button
                        onClick={() => toggleShowAttempts()}
                        className="bg-slate-600 hover:bg-slate-700 transition-colors text-white px-6 py-2 rounded-md font-semibold ml-4"
                    >
                        {showAttempts ? "Hide Attempts" : "Show Attempts"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;
