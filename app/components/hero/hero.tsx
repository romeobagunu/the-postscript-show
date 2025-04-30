
import Image from 'next/image';
import logoWhite from '@/public/PostscriptWhite_Flat.png';

import styles from './hero.module.css';

export function Hero() {
    return (<>
            <div 
                className={styles.gradientBackground + 
                " h-[66vh] flex flex-col items-center justify-center"}
            >
                <div className="size-1/2 relative">
                    <Image 
                        src={logoWhite}
                        alt="The Postscript"
                        layout="fill"
                        objectFit='contain'
                    />
                </div>
                <div className="w-3/4">
                    <h1 className="font-serif italic text-center text-white px-8 text-4xl">
                        <span>The Postscript is a podcast and YouTube series that invites listeners into </span>
                        <span className="">in-depth theological and ministry conversations</span>
                        <span> with </span><span className="">pastors, Bible scholars, missionaries, and professors</span>
                    </h1>
                </div>
            </div>
        </>)
}