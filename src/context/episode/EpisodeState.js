import React, { useReducer } from "react";
import EpisodeContext from "./episodeContext";
import EpisodeReducer from "./episodeReducer";
import { GET_EPISODES, GET_EPISODE } from "../types";

const EpisodeState = props => {
  const initialState = {
    episodes: [
      {
        path: "invictuscapital",
        title: "Invictus Capital",
        season_id: 1,
        episode_id: 1,
        avatar_url: "/assets/images/invictus.jpg",
        description:
          "A complete range of fund choices for the investor wanting diversified exposure to the cryptocurrency market.",
        website_url: "https://invictuscapital.com",
        speaker: "Co-founder Matt Finlayson",
        location: "Cape Town, South Africa"
      },
      {
        path: "houseme",
        title: "HouseME",
        season_id: 1,
        episode_id: 2,
        avatar_url: "/assets/images/houseme.png",
        description:
          "HouseME is a digital platform connecting dream tenants to great landlords.",
        website_url: "https://house.me",
        speaker: "Co-founder Kyle Bradley",
        location: "Cape Town"
      },
      {
        path: "digs-connect",
        title: "Digs Connect",
        season_id: 1,
        episode_id: 3,
        avatar_url: "/assets/images/digsconnect.png",
        description: "Africa's largest Student Accommodation platform.",
        website_url: "https://www.digsconnect.com",
        speaker: "Co-founder & CEO Alexandria Procter",
        location: "Cape Town"
      },
      {
        path: "molecule",
        title: "Molecule",
        season_id: 1,
        episode_id: 4,
        description:
          "Molecule is a software platform to accelerate innovation in the pharmaceutical industry. It connects scientists, patients and industry to advance drug development in a collaborative open market.",
        avatar_url: "/assets/images/molecule.png",
        website_url: "https://molecule.to",
        speaker: "Head of Tech, Kent Fourie",
        location: "Cape Town"
      },
      {
        path: "pocketjam",
        title: "PocketJam",
        season_id: 1,
        episode_id: 5,
        description:
          "PocketJam is an app that teaches your child to earn and save their pocket money using math challenges and savings rewards.",
        avatar_url: "/assets/images/pocketjam.svg",
        website_url: "https://pocketjam.io",
        speaker: "Co-founder Nick Hill",
        location: "Cape Town"
      },
      {
        path: "ucook",
        title: "Ucook",
        season_id: 1,
        episode_id: 6,
        description:
          "UCOOK delivers fresh ingredients directly to your home so you can make delicious meals in exactly the right proportions. We deliver your ingredients for the week every Monday.",
        avatar_url: "/assets/images/ucook.png",
        website_url: "https://www.ucook.co.za",
        speaker: "Co-founder David Torr",
        location: "Cape Town"
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
      payload: state.episodes.find(episode => episode.path == path)
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
