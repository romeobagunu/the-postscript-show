import Image from "next/image"
import brandon from "@/public/brandon.png"

export function Host() {
    return (
        <div className="w-full flex flex-col">
            <div>
                <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden">
                    <div className="absolute z-10 h-full w-1/3 left-0 bg-gradient-to-r from-amber-200/40 to-transparent"></div>
                    <div className="absolute z-10 right-0 h-full w-1/2 bg-gradient-to-l from-fuchsia-500/60 to-transparent"></div>
                    <div className="absolute size-full">
                        <Image 
                            src={brandon}
                            alt="The Postscript host Brandon Briscoe at a desk with a microphone"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="mt-3 flex gap-2 items-center text-3xl font-condensed">
                <h3>Brandon Briscoe</h3>
                <span>&middot;</span>
                <h4>Host</h4>
            </div>
            <div className="text-sm w-full font-serif italic text-gray-400">
                <ul>
                    <li>Provost of the Living Faith Bible Institute</li>
                    <li>Associate Pastor at Midtown Baptist Temple</li>
                </ul>
            </div>
        </div>
    )
}