import Image from "next/image";
import { use } from "react";
import xss from "xss";
import { getEpisodes } from "../../actions";

import styles from './latest-episodes.module.css';

export function LatestEpisodes() {
    const episodes = use(getEpisodes());
    const render = episodes.slice(0,5).map(e => ({...e, description: xss(e.description)}));

    const abbreviatedMonths: string[] = [
        'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'
    ]
    const toAbbreviatedMonth = (date: Date) => abbreviatedMonths[date.getMonth() - 1];
    const toAbbreviatedDate = (date: Date): string => `${toAbbreviatedMonth(date)} ${date.getDate().toString()}`
    const toMinutes = (lengthInSeconds: number): string => `${Math.floor(lengthInSeconds / 60).toString()} MIN`

    return (
        <div className="max-w-232">
            <h2 className="text-center text-xl uppercase text-bold text-gray-700">Latest Episodes</h2>
            <ol className="flex-col align-middle justify-center">
                {render.map(e => (
                    <li key={e.episode}
                        className="flex gap-2 border-b border-gray-200 py-4"
                    >
                        <div className="min-w-48 flex justify-center align-middle">
                            <a href={e.link}>
                                <Image
                                    alt={`Episode image for ${e.title}`}
                                    src={e.image}
                                    height="150"
                                    width="150"
                                    style={{
                                        'height': '150px',
                                        'width': 'auto'
                                    }}
                                    className="p-2 rounded-2xl hover:cursor-pointer hover:brightness-50"
                                />
                            </a>
                        </div>
                        <div className="flex flex-col justify-center max-w-168 max-h-44">
                            <div className="flex gap-2 text-gray-400 uppercase text-sm">
                                <p>{toAbbreviatedDate(e.pubDate)}</p>
                                <span>&middot;</span>
                                <p>{toMinutes(e.length)}</p>
                            </div>
                            <a href={e.link}>
                                <h3 className="uppercase hover:underline text-2xl">{e.title}</h3>
                            </a>
                            <div
                                dangerouslySetInnerHTML={{ __html: e.description}}
                                className={styles.descriptionContainer + ' overflow-hidden max-h-24 text-gray-500'}
                            ></div>
                            <a className="w-fit text-sky-400 hover:underline" href={e.link}>View more...</a>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}