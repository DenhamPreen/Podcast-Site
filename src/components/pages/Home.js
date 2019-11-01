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
      <h3>
        Interesting in learning from top minds who founded innovative startups?
      </h3>
        <h4>
        Denham and JonJon bring you the inside scoop from the founders of the
        hottest tech start ups in their podcast where it started.
        </h4>          
        <br/>
      <Podcasts />
    </div>
  );
};

export default Home;
