import React, { Fragment } from 'react';
import applePodcastsImg from '../../img/applepodcasts.png';
import spotifyPodcastsImg from '../../img/spotifypodcasts.png';
import googlePodcastsImg from '../../img/googlepodcasts.png';

const Home = () => {
  return (
    <div>
      <div className='home grid-2'>
        <div style={{padding: '3rem'}}>
          <h1>Coming soon...</h1>
            <br />            
          <p>
            Interesting in learning from the top minds that formulated some of
            the most innovative startups?
            <br />
            <br />
            You've come to the right place. Denham and JonJon talk to founders
            and leaders of tech start ups that are disrupting their industries.
            <br />
            <br />
            <strong>Season 1</strong> focusses on start ups based in Cape Town, South Africa.
          </p>
          <br />
          <ul>
            <li>
              #1 - <strong><a href='https://invictuscapital.com?ref=podcast'>Invictus Capital</a></strong> with Co-founder Matt
              Finlayson
            </li>
            <li>
              #2 - <strong><a href='https://house.me?ref=podcast'>House Me</a></strong> with Co-founder and CTO Kyle
              Bradley
            </li>
            <li>
              #3 - <strong><a href='https://molecule.io?ref=podcast'>Molecule.io</a></strong> with lead dev Kent Fourie
            </li>            
            {/* <li>
              #4 - <strong></strong>To be announced
            </li>            
            <li>
              #5 - <strong></strong>To be announced
            </li>            
            <li>
              #6 - <strong></strong>To be announced
            </li>            
            <li>
              #7 - <strong></strong>To be announced
            </li>            
            <li>
              #8 - <strong></strong>To be announced
            </li>             */}
          </ul>
        </div>
        <div style={{padding: '3rem'}}>
          <img src={applePodcastsImg} />
          <img src={spotifyPodcastsImg} />
          <img src={googlePodcastsImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
