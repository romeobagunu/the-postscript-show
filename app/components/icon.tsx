import Image from "next/image";
import icon from "@/public/postsript-icon.jpg";

export function Icon() {
    return (
        <div className="h-full w-auto overflow-hidden rounded-xl">
            <Image 
                src={icon} 
                alt="The Postscript Show logo against a gradient background"
                className="h-full w-auto rounded-xl"
            />
        </div>
    )
}