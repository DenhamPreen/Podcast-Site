import React, { useReducer } from 'react';
import EpisodeContext from './episodeContext';
import EpisodeReducer from './episodeReducer';
import { GET_EPISODES, GET_EPISODE } from '../types';

const EpisodeState = props => {
  const initialState = {
    episodes: [
      {
        path: 'invictuscapital',
        title: 'Invictus Capital',
        season_id: 1,
        episode_id: 1,
        avatar_url: '/assets/images/invictus.jpg',        
        description:
          'A complete range of fund choices for the investor wanting diversified exposure to the cryptocurrency market.',
        website_url: 'https://invictuscapital.com',
        location: 'Cape Town'
      },
      {
        path: 'houseme',
        title: 'HouseME',
        season_id: 1,
        episode_id: 2,
        avatar_url: '/assets/images/houseme.png',        
        description:
          'HouseME is a digital platform connecting dream tenants to great landlords.',
        website_url: 'https://house.me',
        location: 'Cape Town'
      },
      {
        path: 'molecule',
        title: 'Molecule',
        season_id: 1,
        episode_id: 3,
        avatar_url: '/assets/images/molecule.png',
        website_url: 'https://molecule.io',
        location: 'Cape Town'
      },
      {
        path: 'pocketjam',
        title: 'PocketJam',
        season_id: 1,
        episode_id: 4,
        avatar_url: '/assets/images/pocketjam.svg',
        website_url: 'https://pocketjam.io',
        location: 'Cape Town'
      },
      {
        path: 'ucook',
        title: 'Ucook',
        season_id: 1,
        episode_id: 5,
        avatar_url: '/assets/images/ucook.png',
        website_url: 'https://www.ucook.co.za',
        location: 'Cape Town'
      }
    ],
    episode: {}
  };

  const [state, dispatch] = useReducer(EpisodeReducer, initialState);

  const getEpisodes = () => {
    dispatch({
      type: GET_EPISODES,
      payload: state.episodes
    });
  };

  const getEpisode = async path => {
    dispatch({
      type: GET_EPISODE,
      payload: state.episodes.find(obj => obj.path == path)
    });
  };

  return (
    <EpisodeContext.Provider
      value={{
        episodes: state.episodes,
        episode: state.episode,
        getEpisodes,
        getEpisode
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};

export default EpisodeState;
