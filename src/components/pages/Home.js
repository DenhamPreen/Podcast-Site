import React, { Fragment } from 'react';
import applePodcastsImg from '../../img/applepodcasts.png'
import spotifyPodcastsImg from '../../img/spotifypodcasts.png'
import googlePodcastsImg from '../../img/googlepodcasts.png'

const Home = () => {
  return (
    <div>
      <div className="grid-2">
        <div>
          <h1>Coming soon...</h1>
          <p>Denham and JonJon Talk Startups is a 45min podcast on disruptive
             startups in South Africa with a strong focus on tech</p>
             <br/>
             <ul>
               <li>#1 - <strong>Invictus Capital</strong> with Co-founder Matt Finlay</li>
               <li>#2 - </li>
               <li></li>
             </ul>
        </div>
        <div>
          <img src={applePodcastsImg} />
          <img src={spotifyPodcastsImg}/>
          <img src={googlePodcastsImg}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
