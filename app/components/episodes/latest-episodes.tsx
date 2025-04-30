import { use } from "react";
import { getEpisodes } from "../../actions";
import { EpisodeList } from "./episode-list";
import { FeaturedEpisode } from "./featured-episode";

export function LatestEpisodes() {
    const episodes = use(getEpisodes());
    const mostRecentEpisode = episodes[0]
    const nextLatestEpisodes = episodes.slice(1,4)

    return (
        <div className="bg-gray-800">
            <FeaturedEpisode episode={mostRecentEpisode} />
            <EpisodeList episodes={nextLatestEpisodes} />
        </div>
    )
}