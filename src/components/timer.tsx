import { useEffect, useState } from "react";
import { useQuizContext } from "../providers/quiz-provider";

export const Timer = () => {
    const { submitQuiz } = useQuizContext();
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes <= 0) {
                    clearInterval(interval);

                    // Submit the quiz
                    submitQuiz();
                } else {
                    setMinutes((prev) => prev - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds((prev) => prev - 1);
            }
        }, 1000);

        // Clean up
        return () => {
            clearInterval(interval);
        };
    }, [seconds, minutes]);

    const formatMinutes = formatTime(minutes);
    const formatSeconds = formatTime(seconds);

    return (
        <div className="flex items-center gap-x-4">
            <span className="uppercase text-slate-500 text-xs font-medium">time remaining</span>

            <div className="w-14 h-14 rounded-full border-2 border-brand bg-slate-100 flex items-center justify-center">
                <span className="text-xs">
                    {formatMinutes}: {formatSeconds}
                </span>
            </div>
        </div>
    );
};

const formatTime = (time: number) => {
    // Trick to check if its one digit
    const isOneDigit = Math.floor(time / 10) === 0;
    return isOneDigit ? `0${time}` : time;
};
