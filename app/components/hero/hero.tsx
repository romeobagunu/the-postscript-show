
import Image from 'next/image';
import logoWhite from '@/public/PostscriptWhite_Flat.png';

import styles from './hero.module.css';

export function Hero() {
    return (<>
            <div 
                className={styles.gradientBackground + 
                " h-76 flex flex-col items-center justify-center"}
            >
                <div className="size-3/4 relative">
                    <Image 
                        src={logoWhite}
                        alt="The Postscript"
                        layout="fill"
                        objectFit='contain'
                    />
                </div>
            </div>
        </>)
}