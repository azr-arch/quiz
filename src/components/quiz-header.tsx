import { Timer } from "./timer";

export const QuizHeader = () => {
    return (
        <div className="flex items-center px-5 justify-between py-2">
            <h2 className="text-2xl text-slate-950 font-medium tracking-tight">Quiz App</h2>

            {/* Timer Component */}
            <Timer />
        </div>
    );
};
