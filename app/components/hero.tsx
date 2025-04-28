import { Icon } from "./icon"

export function Hero() {
    return (
        <div>
            <div className="h-120 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                    <div className="flex flex-col items-center gap-8">
                        <div className="h-60 w-auto">
                            <Icon />    
                        </div>
                        <h1 className="text-5xl text-center w-full">
                            In-depth theological and ministry conversations <br />
                            with pastors, Bible scholars, missionaries, and professors.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}