export const QnA = () => {
    return (
        <div className="px-5 py-2 space-y-5">
            <p className="text-xs text-slate-500 font-medium uppercase">5 questions left</p>

            <div className="flex flex-col items-start">
                {/* Question */}
                <p className="text-lg font-medium mb-5 text-neutral-800">
                    Which planet is closest to the Sun
                </p>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 text-neutral-800 gap-2">
                    {/* Answer */}
                    <div className="text-center rounded-md p-2 border-neutral-200 border">
                        <p>Sun</p>
                    </div>
                    <div className="text-center rounded-md p-2 border-neutral-200 border">
                        <p>Moon</p>
                    </div>
                    <div className="text-center rounded-md p-2 border-neutral-200 border">
                        <p>Mars</p>
                    </div>
                    <div className="text-center rounded-md p-2 border-neutral-200 border">
                        <p>Earth</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 pt-2 w-full flex items-center justify-between">
                <button className="px-6 py-1 text-xs lg:text-sm text-slate-500 font-medium uppercase tracking-tight rounded-md hover:bg-slate-100 border-slate-200 border transition ">
                    Show history
                </button>
                <button className=" bg-brand disabled:bg-brand/100 hover:bg-brand/50 transition-colors text-white px-6 py-1 rounded-md ">
                    Next
                </button>
            </div>
        </div>
    );
};
