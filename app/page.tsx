import { Suspense } from "react";
import { LatestEpisodes } from "./components/episodes/latest-episodes";
import { Hero } from "./components/hero";

export default function Home() {
  return (<>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestEpisodes />
      </Suspense>
    </>);
}
