import React, { useContext } from 'react';
import PodcastItem from './PodcastItem';
import EpisodeContext from '../../context/episode/episodeContext';

const Podcasts = () => {
  const episodeContext = useContext(EpisodeContext);

  const { episodes } = episodeContext;

  return (
    <div style={episodeStyle}>
      {episodes.map(episode => (
        <PodcastItem key={episode.path} episode={episode} />
      ))}
    </div>
  );
};

const episodeStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Podcasts;
