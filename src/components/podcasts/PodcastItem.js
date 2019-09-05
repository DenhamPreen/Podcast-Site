import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PodcastItem = ({ user: { title, episode_id, avatar_url } }) => {
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
        <Link
          to={`/episode/${episode_id}`}
          className='btn btn-dark btn-sm my-1'
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default PodcastItem;
