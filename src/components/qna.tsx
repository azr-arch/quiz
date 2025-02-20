import { useQuizContext } from "../providers/quiz-provider";
import { MCQAnswer } from "../quiz-data";

export const QnA = () => {
    const {
        questions,
        currentQuestionIndex,
        nextQuestion,
        selectAnswer,
        selectedAnswers,
        prevQuestion,
        submitQuiz,
        toggleShowAttempts,
    } = useQuizContext();

    const currentQuestion = questions[currentQuestionIndex];
    const options = currentQuestion.options;

    return (
        <div className="px-5 py-2 space-y-5">
            <p className="text-xs text-slate-500 font-medium uppercase">
                {questions.length - currentQuestionIndex} Questions left
            </p>

            <div className="flex flex-col items-start">
                {/* Question */}
                <p className="text-lg font-medium mb-5 text-neutral-800">
                    {questions[currentQuestionIndex].question}
                </p>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 text-neutral-800 gap-2">
                    {/* No options means question is integer based */}
                    {!options ? (
                        <div>
                            <input
                                key={currentQuestionIndex}
                                name={`answer-${currentQuestion.id}`}
                                type="string"
                                pattern="^\d*$"
                                className="peer py-2 px-5 w-full border border-slate-500 outline focus-visible:outline-brand rounded-md invalid:border-rose-500 invalid:text-rose-600 invalid:focus-visible:ring-rose-500"
                                onChange={(e) => {
                                    // Dealing with NaN
                                    if (e.target.value === "") {
                                        // omit value in selected answer
                                        return;
                                    }

                                    // Convert string to int
                                    const intValue = parseInt(e.target.value);
                                    selectAnswer(currentQuestion.id, intValue);
                                }}
                                value={selectedAnswers[currentQuestion.id]}
                            />

                            <span className="peer-invalid:text-red-500 text-xs peer-invalid:block hidden mt-2 ml-0.5">
                                Please enter a valid integer
                            </span>
                        </div>
                    ) : (
                        Object.entries(options).map(([key, value], idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="text-center capitalize rounded-md select-none"
                                >
                                    <div>
                                        <input
                                            id={`${currentQuestion.id}-option-${key}`}
                                            type="radio"
                                            name={`options-${currentQuestion.id}`}
                                            className="hidden peer"
                                            onChange={() =>
                                                selectAnswer(currentQuestion.id, key as MCQAnswer)
                                            }
                                            checked={selectedAnswers[currentQuestion.id] === key}
                                        />
                                        <label
                                            htmlFor={`${currentQuestion.id}-option-${key}`}
                                            className="flex py-2 px-5 rounded-md border peer-not-checked:hover:bg-slate-100  border-slate-200 items-center gap-x-4 peer-checked:border-brand peer-checked:bg-brand/10"
                                        >
                                            <p className="text-slate-950">{value as string}</p>
                                        </label>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            <div className="mt-5 pt-2 w-full flex items-center justify-between">
                <button
                    onClick={toggleShowAttempts}
                    className="px-6 py-1 text-xs lg:text-sm text-slate-500 font-medium uppercase tracking-tight rounded-md hover:bg-slate-100 border-slate-200 border transition "
                >
                    Show history
                </button>
                <div className="inline-flex gap-x-2">
                    <button
                        onClick={prevQuestion}
                        disabled={currentQuestionIndex === 0}
                        className=" text-slate-900 disabled:bg-slate-200/50 disabled:text-slate-400 disabled:cursor-not-allowed hover:bg-slate-300/50 transition-colors  px-6 py-1 rounded-md border border-slate-300"
                    >
                        Prev
                    </button>

                    {questions.length - 1 === currentQuestionIndex ? (
                        // User;s on last question, then show submit
                        <button
                            onClick={submitQuiz}
                            className="transition-colors bg-green-600 hover:bg-green-500 text-white px-6 py-1 rounded-md"
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            onClick={nextQuestion}
                            className=" bg-brand disabled:bg-brand/50 disabled:cursor-not-allowed hover:bg-brand/80 transition-colors text-white px-6 py-1 rounded-md "
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
