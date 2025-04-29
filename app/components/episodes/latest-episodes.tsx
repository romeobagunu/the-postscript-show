import { use } from "react";
import { getEpisodes } from "../../actions";
import { EpisodeList } from "./episode-list";

export function LatestEpisodes() {
    const episodes = use(getEpisodes());

    return (
        <div className="max-w-220">
            <h2 className="font-condensed text-center text-xl uppercase text-gray-700">Latest Episodes</h2>
            <EpisodeList episodes={episodes} />
        </div>
    )
}