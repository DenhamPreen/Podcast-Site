import React, { useEffect, useContext } from 'react';
import EpisodeContext from '../../context/episode/episodeContext';

const Episode = ({ match }) => {
  const episodeContext = useContext(EpisodeContext);

  const { getUser, loading, user } = episodeContext;

  useEffect(() => {
    getUser(match.params.episode_id);
    //console.log(match.params.episode_id);
  }, []);

  // this is now working and pulling from the context api
  const { path } = user;

  return (
    <div>
      <p>This is from Episode : {match.params.episode_id}</p>
      <p>This is it boy: {path}</p>
    </div>
  );
};

export default Episode;
