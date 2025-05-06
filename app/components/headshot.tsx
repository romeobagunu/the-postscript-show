import Image from "next/image"
import headshot from "@/public/brandon.jpg";

export function Headshot({size = 36}) {
    return (
        <div className={`relative h-${size} aspect-square overflow-hidden rounded-full`}>
            <Image 
                src={headshot}
                alt="A headshot of Brandon Briscoe, host of The Postscript Show"
                fill
                className="object-cover"
            />
        </div>
    )
}