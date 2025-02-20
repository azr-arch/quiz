import { useQuizContext } from "../providers/quiz-provider";

const AttemptHistory = () => {
    const { attempts, clearAttempts, toggleShowAttempts } = useQuizContext();

    return (
        <>
            <div className="bg-white absolute inset-0 flex items-center justify-center">
                <div className="rounded-lg bg-slate-100 py-4 border border-slate-300 shadow-md max-w-md w-full ">
                    <div className="px-5 py-2">
                        <h2 className="text-2xl font-bold text-slate-800">Previous Attempts</h2>
                    </div>
                    <div className="h-px bg-slate-200 " />
                    <div className="py-2 px-4">
                        {attempts.length > 0 ? (
                            <ul className="space-y-2 max-h-60 overflow-y-scroll">
                                {attempts.map((attempt, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between p-2 border-b border-slate-200"
                                    >
                                        <span className="text-sm text-slate-600">
                                            {new Date(attempt.timestamp).toLocaleString()}
                                        </span>
                                        <span className="font-semibold text-brand">
                                            {attempt.score ?? "N/A"} / 10
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500 px-5 py-2">
                                No previous attempts found.
                            </p>
                        )}
                    </div>

                    <div className="flex justify-between mt-4 px-4">
                        <button
                            disabled={attempts.length === 0}
                            className="px-4 py-2 bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={clearAttempts}
                        >
                            Clear All Attempts
                        </button>
                        <button
                            className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark"
                            onClick={toggleShowAttempts}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AttemptHistory;
