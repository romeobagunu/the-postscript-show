import { Suspense } from "react";
import { LatestEpisodes } from "./components/episodes/latest-episodes";
import { Hero } from "./components/hero/hero";
import { Host } from "./components/host";
import { LatestEpisodesSkeleton } from "./components/episodes/latest-episodes.skeleton";
import { About } from "./components/about";
import { Category } from "./types/category";
import { LatestEpisode } from "./components/episodes/latest-episode";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestEpisode />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LatestEpisodes category={Category.Postscript} count={3} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LatestEpisodes category={Category.PsPlus} count={3} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <LatestEpisodes category={Category.Shorts} count={3} />
      </Suspense>
      <div className="container grid grid-cols-12">
        <div className="col-span-4">
          <Host />
        </div>
      </div>
    </>);
}
