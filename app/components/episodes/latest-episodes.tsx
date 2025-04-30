import { use } from "react";
import { getEpisodes } from "../../actions";
import { EpisodeList } from "./episode-list";
import { Category } from "@/app/types/category";

export function LatestEpisodes({category, count}: {category: Category, count: number}) {
    const latestEpisodes = use(getEpisodes(0, count, category));

    return (
        <div className="bg-gray-900 grid grid-cols-12 gap-y-10 pb-10">
            <div className="col-start-2 col-span-10">
                <EpisodeList episodes={latestEpisodes} />
            </div>
        </div>
    )
}