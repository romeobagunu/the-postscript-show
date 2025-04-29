import { Suspense } from "react";
import { LatestEpisodes } from "./components/episodes/latest-episodes";
import { Hero } from "./components/hero";
import { Host } from "./components/host";
import { LatestEpisodesSkeleton } from "./components/episodes/latest-episodes.skeleton";

export default function Home() {
  return (
    <div className="container lg:max-w-1/2 mx-auto">
      <Hero />
      <div className="mt-8 grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <Suspense fallback={<LatestEpisodesSkeleton />}>
            <LatestEpisodes />
          </Suspense>
        </div>
        <div className="col-span-4">
          <Host />
        </div>
      </div>
    </div>);
}
