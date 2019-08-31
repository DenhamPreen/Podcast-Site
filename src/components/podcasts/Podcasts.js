import React, { Component } from 'react';
import PodcastItem from './PodcastItem';

export default class Podcasts extends Component {

  // JONJON this cant live here the way we want to make it, 
  // This needs to be kept in global state  

  state = {
    episodes: [
      {
        path: 'invictuscapital',
        title: 'Invictus Capital',
        season_id: 1,
        episode_id: 1,
        avatar_url: 'https://avatars3.githubusercontent.com/u/20556729?v=4'
      },
      {
        path: 'houseme',
        title: 'HouseMe',
        season_id: 1,
        episode_id: 2,
        avatar_url: 'https://avatars3.githubusercontent.com/u/26438203?v=4'
      },
      {
        path: 'molecule',
        title: 'Molecule',
        season_id: 1,
        episode_id: 3,
        avatar_url: 'https://avatars1.githubusercontent.com/u/6032276?v=4'
      },
      {
        path: 'pocketjam',
        title: 'PocketJam',
        season_id: 1,
        episode_id: 4,
        avatar_url: 'https://avatars1.githubusercontent.com/u/6032276?v=4'
      }
    ]
  };
  render() {
    return (
      <div>
        <div style={userStyle}>
          {this.state.episodes.map(episode => (
            <PodcastItem key={episode.episode_id} episode={episode} />
          ))}
        </div>
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
