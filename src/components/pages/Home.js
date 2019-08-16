import React, { Fragment } from 'react';
import applePodcastsImg from '../../img/applepodcasts.png';
import spotifyPodcastsImg from '../../img/spotifypodcasts.png';
import googlePodcastsImg from '../../img/googlepodcasts.png';

const Home = () => {
  return (
    <div>
      <div className='grid-2'>
        <div>
          <h1>Coming soon...</h1>
          <p>
            Interesting in learning from the top minds that formulated some of
            the most innovative startups?
            <br />
            You've come to the right place. Denham and JonJon talk to founders
            and leaders of disruptive start ups that focus on tech.
            <br />
            Season 1 focusses on start ups based in Cape Town, South Africa.
          </p>
          <br />
          <ul>
            <li>
              #1 - <strong>Invictus Capital</strong> with Co-founder Matt
              Finlayson
            </li>
            <li>
              #2 - <strong>House Me</strong> with Co-founder and CTO Kyle
              Bradley
            </li>
            <li>
              #3 - <strong>Molecule.io</strong> with lead dev Kent{' '}
            </li>
            <li />
          </ul>
        </div>
        <div>
          <img src={applePodcastsImg} />
          <img src={spotifyPodcastsImg} />
          <img src={googlePodcastsImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
