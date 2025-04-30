import Image from "next/image";
import xss from "xss";

import { Episode } from "@/app/types/episode";
import { toAbbreviatedDate, toMinutes } from "@/app/lib/episodeHelpers";

import styles from './episode-list-item.module.css'

export function EpisodeListItem({ episode }: {episode : Episode}) {
    return (
        <div className="py-4 px-2 bg-white rounded-2xl shadow-xl grid grid-cols-12">
            <div className="col-span-4 flex justify-center align-middle">
                <a href={episode.link}>
                    <Image
                        alt={`Episode image for ${episode.title}`}
                        src={episode.image}
                        height="3000"
                        width="3000"
                        style={{
                            'height': '150px',
                            'width': 'auto'
                        }}
                        className="p-2 rounded-2xl hover:cursor-pointer hover:brightness-50"
                    />
                </a>
            </div>
            <div className="col-span-8 flex flex-col justify-center max-w-168 max-h-44">
                <div className="flex gap-2 text-gray-400 uppercase text-sm">
                    <p>{toAbbreviatedDate(episode.pubDate)}</p>
                    <span>&middot;</span>
                    <p>{toMinutes(episode.length)}</p>
                </div>
                <a href={episode.link}>
                    <h3 className="font-condensed uppercase hover:underline text-xl">{episode.title}</h3>
                </a>
                <div
                    dangerouslySetInnerHTML={{ __html: xss(episode.description)}}
                    className={styles.descriptionContainer + ' overflow-hidden max-h-16'}
                ></div>
                <a className="w-fit text-sky-400 hover:underline" href={episode.link}>View more...</a>
            </div>
        </div>
    )
}