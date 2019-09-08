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
        avatar_url: 'https://avatars3.githubusercontent.com/u/20556729?v=4'
      },
      {
        path: 'houseme',
        title: 'HouseMe',
        season_id: 1,
        episode_id: 2,
        avatar_url: 'https://avatars3.githubusercontent.com/u/26438203?v=4'
      },
      {
        path: 'molecule',
        title: 'Molecule',
        season_id: 1,
        episode_id: 3,
        avatar_url: 'https://avatars1.githubusercontent.com/u/6032276?v=4'
      },
      {
        path: 'pocketjam',
        title: 'PocketJam',
        season_id: 1,
        episode_id: 4,
        avatar_url: 'https://avatars1.githubusercontent.com/u/6032276?v=4'
      }
    ],
    episode: {}
  };

  const [state, dispatch] = useReducer(EpisodeReducer, initialState);

  const getEpisodes = async text => {
    dispatch({
      type: GET_EPISODES,
      payload: state.episodes
    });
  };

  const getEpisode = async episode_id => {
    dispatch({
      type: GET_EPISODE,
      payload: state.episodes[episode_id - 1]
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
