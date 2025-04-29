import Image from 'next/image'
import heroBackground from '@/public/hero-bg-interview.png'

export function Hero() {
    return (<>
        <div className="aspect-video w-full relative">
            <div className="absolute top-0 h-full aspect-video rounded-2xl overflow-hidden">
                <Image
                    src={heroBackground}
                    alt="An interview from the Postscript"
                    fill
                    objectFit='cover'
                    priority
                    className="brightness-115"
                />
            </div>
            <div className="absolute top-0 h-1/3 w-full rounded-2xl bg-gradient-to-b from-amber-200/40 to-transparent"></div>
            <div className="absolute bottom-0 h-1/2 w-full  rounded-2xl bg-gradient-to-t from-fuchsia-500/60 to-transparent"></div>
        </div>
        <div className="w-full p-8">
            <h1 className="font-serif italic text-center text-4xl">
                {/* <span>The Postscript is a podcast and YouTube series that invites listeners into </span> */}
                <span className="">In-depth theological and ministry conversations</span>
                <span> with </span><span className="">pastors, Bible scholars, missionaries, and professors</span>
            </h1>
        </div>
        </>)
}