import React from 'react';
import { Link } from 'react-router-dom';

const PodcastItem = ({
  episode: { title, season_id, episode_id, avatar_url, description, path }
}) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '90px' }}
      />
      <h3>{title}</h3>
      <h6>
        s{season_id}e{episode_id}
      </h6>
      <div>
        <Link
          to={`/episode/${path}`}
          className='btn btn-light btn-sm my-1'
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default PodcastItem;
