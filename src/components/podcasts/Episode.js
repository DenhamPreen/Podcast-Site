import React, { useEffect, useContext } from 'react';
import EpisodeContext from '../../context/episode/episodeContext';

const Episode = ({ match }) => {
  const episodeContext = useContext(EpisodeContext);

  const { getEpisode, episode } = episodeContext;

  useEffect(() => {
    getEpisode(match.params.episode_id);
  }, []);

  const { path } = episode;

  return (
    <div>
      <p>This is from Episode : {match.params.episode_id}</p>
      <p>This is it boy: {path}</p>
    </div>
  );
};

export default Episode;
