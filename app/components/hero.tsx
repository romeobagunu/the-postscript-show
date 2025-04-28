import { Icon } from "./icon"

export function Hero() {
    return (
        <div>
            <div className="h-96 mt-16 grid grid-cols-12 gap-8 container mx-auto max-w-360">
                <div className="col-span-4 flex justify-center items-center">
                    <div className="size-64">
                        <Icon />
                    </div>
                </div>
                <div className="col-span-8 flex flex-col justify-center items-center gap-4">
                    <h1 className="text-5xl w-full">
                        In-depth theological and ministry conversations <br />
                        with pastors, Bible scholars, missionaries, and professors.
                    </h1>
                </div>
            </div>
        </div>
    )
}