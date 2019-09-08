import React, { Fragment, useContext, useEffect } from 'react';
import applePodcastsImg from '../../img/applepodcasts.png';
import spotifyPodcastsImg from '../../img/spotifypodcasts.png';
import googlePodcastsImg from '../../img/googlepodcasts.png';
import Podcasts from '../podcasts/Podcasts';
import EpisodeContext from '../../context/episode/episodeContext';

const Home = () => {
  const episodeContext = useContext(EpisodeContext);
  const { getEpisodes } = episodeContext;
  useEffect(() => {
    getEpisodes('text');
  }, []);

  return (
    <div>
      <h3>Tech focussed podcast listening to innovative company founders</h3>
      <Podcasts />
    </div>
  );
};

export default Home;
