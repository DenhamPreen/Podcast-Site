import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class PodcastItem extends Component {
  render() {
    const { path, title, season_id, episode_id, avatar_url } = this.props.episode;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '90px' }}
        />
        <h3>{title}</h3>
        <div>
          <Link to={`/season/${season_id}/episode/${episode_id}`}>More</Link>
        </div>
      </div>
    );
  }
}
