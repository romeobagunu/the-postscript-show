
import Image from "next/image";
import logo from '@/public/PostscriptBlack_Flat.png';

export function Logo() {
    return (
            <Image 
                src={logo} 
                alt="The Postscript Show logo"
                className="h-full w-auto"
            />
    )
}