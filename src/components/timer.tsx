import { useEffect, useState } from "react";

export const Timer = () => {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes <= 0) {
                    clearInterval(interval);
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

    return (
        <div className="flex items-center gap-x-4">
            <span className="uppercase text-slate-500 text-xs font-medium">time remaining</span>

            <div className="w-14 h-14 rounded-full border-2 border-brand bg-slate-100 flex items-center justify-center">
                <span className="text-xs">
                    {minutes}: {seconds}
                </span>
            </div>
        </div>
    );
};
