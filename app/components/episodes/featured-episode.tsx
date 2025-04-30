import Image from "next/image";

import { Episode } from "@/app/types/episode";
import { toAbbreviatedDate, toMinutes } from "@/app/lib/episodeHelpers";

import styles from './featured-episode.module.css';

export function FeaturedEpisode({ episode }: {episode: Episode}) {
    return (
            <div className="h-96 grid grid-cols-12 bg-white rounded-2xl content-center">
                <div className="col-span-4 flex justify-center items-center">
                    <a href={episode.link} className="block h-6/10 aspect-square hover:cursor-pointer hover:brightness-50 rounded-2xl overflow-hidden">
                        <Image
                            alt={`Episode image for ${episode.title}`}
                            src={episode.image}
                            height="3000"
                            width="3000"
                            className="size-full"
                        />
                    </a>
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                    <div className="py-2 flex gap-2 text-gray-400 uppercase text-xl">
                        <p className="text-green-500">Latest Episode</p>
                        <span>&middot;</span>
                        <p>{toAbbreviatedDate(episode.pubDate)}</p>
                        <span>&middot;</span>
                        <p>{toMinutes(episode.length)}</p>
                    </div>
                    <a href={episode.link}>
                        <h3 className="font-condensed uppercase hover:underline text-5xl">{episode.title}</h3>
                    </a>
                    <div
                        dangerouslySetInnerHTML={{ __html: episode.description}}
                        className={styles.descriptionContainer + " py-2 w-4/5 text-gray-500"}
                    ></div>
                </div>
            </div>
    )
}