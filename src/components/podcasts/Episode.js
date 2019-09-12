import React, { useEffect, useContext, Fragment } from 'react';
import EpisodeContext from '../../context/episode/episodeContext';
import { Link } from 'react-router-dom';

const Episode = ({ match }) => {
  const episodeContext = useContext(EpisodeContext);

  const { getEpisode, episode } = episodeContext;

  useEffect(() => {
    getEpisode(match.params.path);
  }, []);

  const { title, description, avatar_url, website_url, location } = episode;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{title}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          <div>
            <h3>Chatting with:</h3>
          </div>
          {description && (
            <Fragment>
              <h3>Company description:</h3>
              <p>{description}</p>
            </Fragment>
          )}
          <a href={website_url} className='btn btn-dark my-1'>
            Visit website
          </a>
          <div>
            <button className='btn btn-dark my-1'> Play podcast button </button>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3>Episode details:</h3>
        <h3>Chatting with:</h3>
        <h3>Some other information:</h3>
      </div>
    </Fragment>
  );
};

export default Episode;
