import Image from "next/image";

import { Episode } from "@/app/types/episode";
import { toAbbreviatedDate, toMinutes } from "@/app/lib/episodeHelpers";

export function EpisodeListItem({ episode }: {episode : Episode}) {
    return (
        <div className="p-4 bg-white rounded-2xl shadow-xl grid grid-cols-12 gap-x-4 ">
            <div className="col-span-4 flex justify-center align-middle aspect-square rounded-2xl overflow-hidden">
                <a href={episode.link}>
                    <Image
                        alt={`Episode image for ${episode.title}`}
                        src={episode.image}
                        height="3000"
                        width="3000"
                        className="size-full hover:cursor-pointer hover:brightness-50"
                    />
                </a>
            </div>
            <div className="col-span-8 flex flex-col">
                <a href={episode.link}>
                    <h3 className="font-condensed uppercase hover:underline text-4xl text-gray-600">{episode.title}</h3>
                </a>
                <div className="flex gap-2 text-gray-400 uppercase text-sm">
                    <p>{toAbbreviatedDate(episode.pubDate)}</p>
                    <span>&middot;</span>
                    <p>{toMinutes(episode.length)}</p>
                </div>
            </div>
        </div>
    )
}