import React, { Component } from 'react';
import PodcastItem from './PodcastItem';

export default class Podcasts extends Component {
  state = {
    episodes: [
      {
        login: 'Invictus Capital',
        season_id: 1,
        episode_id: 1,
        avatar_url: 'https://avatars3.githubusercontent.com/u/20556729?v=4'
      },
      {
        login: 'HouseMe',
        season_id: 1,
        episode_id: 2,
        avatar_url: 'https://avatars3.githubusercontent.com/u/26438203?v=4'
      },
      {
        login: 'Molecule',
        season_id: 1,
        episode_id: 3,
        avatar_url: 'https://avatars1.githubusercontent.com/u/6032276?v=4'
      },
      {
        login: 'PocketJam',
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
