import Image from 'next/image'
import interview from '@/public/hero-bg-interview.png'

export function Interview() {
    return (
        <div className="w-full aspect-video relative">
            <div className="h-full aspect-video rounded-2xl overflow-hidden">
                <Image
                    src={interview}
                    alt="An interview from the Postscript"
                    fill
                    priority
                    className="brightness-115"
                    style={{ objectFit: "cover", objectPosition: "0% 15%" }}
                />
            </div>
            <div className="absolute top-0 h-1/3 w-full bg-gradient-to-b from-amber-200/40 to-transparent"></div>
            <div className="absolute bottom-0 h-1/2 w-full  bg-gradient-to-t from-fuchsia-500/60 to-transparent"></div>
        </div>
    )
}