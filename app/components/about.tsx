import { Interview } from "./interview";
import { SiSpotify, SiYoutube } from "react-icons/si"

export function About() {
    return (
        <div className="h-[100vh] bg-gray-900 grid grid-cols-12">
            <div className="col-start-2 col-span-3 h-full flex flex-col gap-8 justify-center text-white ">
                    <h1 className="font-serif text-3xl">
                        <span className="italic">The Postscript</span> is a podcast and YouTube series that invites listeners into 
                        in-depth theological and ministry conversations with pastors, Bible scholars, missionaries, and professors.
                    </h1>
                    <div className="flex gap-4">
                        <a 
                            className="block border border-white rounded-2xl py-1 px-2 hover:border-green-500 hover:text-green-500"
                            href="https://open.spotify.com/show/3sWcPlzlLIZQhjTOnwELpo"
                        >
                            <div className="flex gap-2 items-center">
                                <SiSpotify className="inline-block"/>
                                <span>Follow on Spotify</span>
                            </div>
                        </a>
                        <a 
                            className="block border border-white rounded-2xl py-1 px-2 hover:border-red-500 hover:text-red-500"
                            href="https://www.youtube.com/@thepostscriptshow"
                        >
                            <div className="flex gap-2 items-center">
                                <SiYoutube className="inline-block"/>
                                <span>Subscribe on YouTube</span>
                            </div>
                        </a>
                    </div>
            </div>
            <div className="col-start-6 col-span-6 h-full flex justify-center items-center">
                <div className="w-full aspect-video rounded-2xl overflow-hidden">
                    <Interview />
                </div>
            </div>
        </div>
    )
}