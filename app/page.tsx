import { Suspense } from "react";
import { LatestEpisodes } from "./components/episodes/latest-episodes";
import { Hero } from "./components/hero/hero";
import { Host } from "./components/host";
import { LatestEpisodesSkeleton } from "./components/episodes/latest-episodes.skeleton";

export default function Home() {
  return (
    <>
        <Hero />
      <Suspense fallback={<LatestEpisodesSkeleton />}>
        <LatestEpisodes />
      </Suspense>
      <div className="container grid grid-cols-12">
        <div className="col-span-4">
          <Host />
        </div>
      </div>
    </>);
}
