import { QnA } from "./qna";
import { QuizHeader } from "./quiz-header";

const Quiz = () => {
    return (
        <div className="max-w-2xl h-fit w-full border border-slate-200 bg-slate-50 py-2 rounded-md drop-shadow-lg">
            {/* Header */}
            <QuizHeader />

            {/* Separator */}
            <div className="bg-slate-200 w-full h-px my-2" />

            {/* Main quiz content */}
            <QnA />
        </div>
    );
};

export default Quiz;
