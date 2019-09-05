import React, { useReducer } from 'react';
import EpisodeContext from './episodeContext';
import EpisodeReducer from './episodeReducer';
import { SEARCH_USERS, SET_LOADING, GET_USER } from '../types';

const EpisodeState = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  };

  const [state, dispatch] = useReducer(EpisodeReducer, initialState);

  // declaring our state here. Might be a better Idea to do it in intial state
  // but didnt work last time i tried this.

  let data = {
    items: [
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
    ]
  };

  // Search Users
  const searchUsers = async text => {
    setLoading();

    dispatch({
      type: SEARCH_USERS,
      payload: data.items
    });
  };

  // Get User
  const getUser = async episode_id => {
    setLoading();

    dispatch({
      type: GET_USER,
      payload: data.items[episode_id - 1]
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <EpisodeContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};

export default EpisodeState;
