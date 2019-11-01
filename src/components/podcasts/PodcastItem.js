import React from 'react';
import { Link } from 'react-router-dom';

const PodcastItem = ({
  episode: { title, episode_id, avatar_url, path, speaker }
}) => {
  return (
    <Link
    to={`/episode/${path}`}
  ><div className='card text-center hover-card'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '90px' }}
      />
      <h3>{title}</h3>
      <h6>
        {speaker}
      </h6>
      <p style={{fontSize: '0.8rem'}}><small>Episode: {episode_id}</small></p>
      <div>
        <Link
          to={`/episode/${path}`}
          className='btn btn-light btn-sm my-1'
        >
          More
        </Link>
      </div>
    </div>
    </Link>
  );
};

export default PodcastItem;
