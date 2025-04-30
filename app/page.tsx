import { Suspense } from "react";
import { LatestEpisodes } from "./components/episodes/latest-episodes";
import { Hero } from "./components/hero";
import { Host } from "./components/host";
import { LatestEpisodesSkeleton } from "./components/episodes/latest-episodes.skeleton";

export default function Home() {
  return (
    <>
      <div className="h-[66vh] w-full">
        <Hero />
      </div>
      <div className="h-[66vh] w-full">
          <Suspense fallback={<LatestEpisodesSkeleton />}>
            <LatestEpisodes />
          </Suspense>
      </div>
      <div className="container grid grid-cols-12">
        <div className="col-span-4">
          <Host />
        </div>
      </div>
    </>);
}
