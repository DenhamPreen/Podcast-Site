import { GET_EPISODES, GET_EPISODE, PLAY_EPISODE, OPEN_PLAYER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload
        //loading: false
      };
    case PLAY_EPISODE:
      return {
        ...state,
        currentlyPlaying: action.payload,
        openPlayer: false
        //loading: false
      };
    case OPEN_PLAYER:
      return {
        ...state,
        openPlayer: action.payload
        //loading: false
      };
    case GET_EPISODE:
      return {
        ...state,
        episode: action.payload
        //loading: false
      };
    default:
      return state;
  }
};
