import React, { Component } from 'react';

export default class PodcastItem extends Component {
  render() {
    const { login, avatar_url } = this.props.episode;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '90px' }}
        />
        <h3>{login}</h3>
        <div>
          {/* Okay so here would ideally have a link or something to component 
        showing the full details about the episode. We can pass this.props.episode */}
          <button className='btn btn-dark btn-sm my-1'> More</button>
        </div>
      </div>
    );
  }
}
