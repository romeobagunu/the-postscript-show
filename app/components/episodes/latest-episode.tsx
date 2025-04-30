import { use } from "react";
import { getEpisodes } from "../../actions";
import { FeaturedEpisode } from "./featured-episode";
import { Category } from "@/app/types/category";

export function LatestEpisode() {
    const mostRecentEpisode = use(getEpisodes(0, 1, Category.Postscript))[0];

    return (
        <div className="grid grid-cols-12 gap-y-10 pb-10">
            <div className="col-start-3 col-span-8">
                <FeaturedEpisode episode={mostRecentEpisode} />
            </div>
        </div>
    )
}