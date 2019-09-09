import React, { useContext, useEffect } from 'react';
//import applePodcastsImg from '../../img/applepodcasts.png';
//import spotifyPodcastsImg from '../../img/spotifypodcasts.png';
//import googlePodcastsImg from '../../img/googlepodcasts.png';
import Podcasts from '../podcasts/Podcasts';
import EpisodeContext from '../../context/episode/episodeContext';

const Home = () => {
  const episodeContext = useContext(EpisodeContext);
  const { getEpisodes } = episodeContext;
  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div className='text-center'>
      <h2>Meet the founders</h2>
      <h3>
        Chatting to some of the hottest tech start ups to find out... where it
        started
      </h3>
      <Podcasts />
    </div>
  );
};

export default Home;
