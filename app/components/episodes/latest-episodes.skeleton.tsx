export function LatestEpisodesSkeleton() {
    const placeholders = [1,2,3,4,5,6,7,8,9,10]
    return (
            <div className="max-w-220">
                <h2 className="text-center text-xl uppercase text-gray-700">Latest Episodes</h2>
                <ol className="flex-col align-middle justify-center">
                {placeholders.map((p) => (
                    <li key={p}
                        className="flex gap-2 border-b border-gray-200 py-4"
                    >
                        <div className="min-w-48 flex justify-center align-middle">
                            <div className="h-[150px] aspect-square p-2">
                                <div className="size-full bg-gray-200 rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center max-w-168 max-h-44">
                            <div className="flex gap-2 text-gray-400 uppercase text-sm">
                                <div className="h-4 w-16 bg-gray-200 rounded-xl"></div>
                                <span>&middot;</span>
                                <div className="h-4 w-16 bg-gray-200 rounded-xl"></div>
                            </div>
                            <div className="my-2 h-6 w-48 bg-gray-400 rounded-xl"></div>
                            <div className="my-0.5 h-2 w-156 bg-gray-200 rounded-xl"></div>
                            <div className="my-0.5 h-2 w-156 bg-gray-200 rounded-xl"></div>
                            <div className="my-0.5 h-2 w-156 bg-gray-200 rounded-xl"></div>
                            <div className="my-1 h-2 w-12 bg-sky-200 rounded-xl"></div>
                        </div>
                    </li>
                ))}
            </ol>
            </div>
    )
}