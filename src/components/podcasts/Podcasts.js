import React, { useContext, useEffect } from 'react';
import PodcastItem from './PodcastItem';
import EpisodeContext from '../../context/episode/episodeContext';

const Podcasts = () => {
  const episodeContext = useContext(EpisodeContext);

  // const { searchUsers } = episodeContext;
  // useEffect(() => {
  //   searchUsers('text');
  // }, []);

  const { loading, users } = episodeContext;

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <PodcastItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Podcasts;
