import Image from "next/image";
import icon from "@/public/postsript-icon.jpg";

export function Hero() {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1 p-8 lg:p-24 flex flex-col justify-center">
                <div className="overflow-hidden rounded-xl">
                    <Image 
                        src={icon} 
                        alt="The Postscript Show logo against a gradient background"
                        className="h-full w-auto"
                    />
                </div>
            </div>
            <div className="col-span-2 p-16 flex flex-col justify-center">
                <h2 className="lg:my-3 my-1 lg:text-3xl text-xl uppercase text-gray-500">Hosted by Brandon Briscoe</h2>
                <p className="lg:my-4 my-1 lg:text-3xl text-lg font-light italic">The Postscript is a podcast and YouTube series that invites listeners into in-depth theological and ministry conversations with pastors, Bible scholars, missionaries, and professors.</p>
            </div>
        </div>
    )
}