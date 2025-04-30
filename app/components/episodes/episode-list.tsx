import { Episode } from "@/app/types/episode";
import { EpisodeListItem } from "./episode-list-item";

export function EpisodeList({episodes}: {episodes: Episode[]}) {
    
    return (
        <ol className="grid grid-cols-12 m-8 gap-4">
                {episodes.map(e => (
                    <li key={e.episode}
                        className="col-span-4"
                    >
                        <EpisodeListItem episode={e} />
                    </li>
                ))}
        </ol>
    )
}