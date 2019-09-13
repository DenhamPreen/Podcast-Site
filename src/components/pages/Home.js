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
      <h4>
        Interesting in learning from the top minds that formulated some of the most innovative startups?
<br />
        You've come to the right place. Denham and JonJon talk to founders and leaders of tech start ups that are disrupting their industries.</h4>
<br />
       <h3>
       Season 1 focusses on start ups based in Cape Town, South Africa.    
         </h3> 
      <Podcasts />
      <br />
      <br />
        <h3>Coming Soon...</h3>
      <h4>
       Season 2 focusses on global tech start ups based in the worlds largest start up campus, Station F in Paris    
         </h4> 
    </div>
  );
};

export default Home;
