import React, { useContext, useEffect } from "react";
//import applePodcastsImg from '../../img/applepodcasts.png';
//import spotifyPodcastsImg from '../../img/spotifypodcasts.png';
//import googlePodcastsImg from '../../img/googlepodcasts.png';
import Podcasts from "../podcasts/Podcasts";
import EpisodeContext from "../../context/episode/episodeContext";

const Home = () => {
  const episodeContext = useContext(EpisodeContext);
  const { getEpisodes } = episodeContext;
  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div className="text-center">
      {/* <h2>Meet the founders</h2> */}
      <h5>
        Interesting in learning from top minds who founded innovative startups?
        <br />
        Denham and JonJon bring you the inside scoop from the founders of the
        hottest tech start ups in the industry.
      </h5>
      <br />
      <h6>Season 1 focusses on start ups based in Cape Town, South Africa. </h6>

      <Podcasts />
    </div>
  );
};

export default Home;
