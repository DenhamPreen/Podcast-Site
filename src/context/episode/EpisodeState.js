import React, { useReducer } from "react";
import EpisodeContext from "./episodeContext";
import EpisodeReducer from "./episodeReducer";
import { GET_EPISODES, GET_EPISODE, PLAY_EPISODE, OPEN_PLAYER } from "../types";

const EpisodeState = props => {
  const initialState = {
    episodes: [
      {
        path: "invictus-capital",
        title: "Invictus Capital",
        season_id: 1,
        episode_id: 1,
        avatar_url: "/assets/images/invictus.jpg",
        description:
          "A complete range of fund choices for the investor wanting diversified exposure to the cryptocurrency market.",
        website_url: "https://invictuscapital.com",
        speaker: "Co-founder Matt Finlayson",
        location: "Cape Town, South Africa",
        episode_description:
          "At the tender age of 22, Matt Finlayson was in the final year of his engineering degree, about to start working on his final thesis. The next few months were frantic as Matt and his friends realised they had the opportunity to build the worlds first crypto index fund, C20 (crypto20). Matt walks us through the idea, the sleepless nights, and ultimately what it took to raise 38 million dollars in just a couple of months.",
        spotify_url:
          "https://open.spotify.com/show/1QaspSzirKAqrKXdPzxNjv?si=P9DmGPOERKSnRF4sa6Q8aA",
        podcast_embed_url:
          "https://open.spotify.com/embed-podcast/episode/1M6RwCsv4hsKRu2JooF9GM"
      },
      {
        path: "house-me",
        title: "HouseME",
        season_id: 1,
        episode_id: 2,
        avatar_url: "/assets/images/houseme.png",
        description:
          "HouseME is a digital platform connecting dream tenants to great landlords.",
        website_url: "https://house.me",
        speaker: "Co-founder Kyle Bradley",
        location: "Cape Town, South Africa",
        episode_description:
          "Winning start up of the year in 2018 in Cape Town, Kyle sheds light on the idea of HouseME and how they are disrupting the current housing industry. We talk past struggles, future plans, and best advice for those looking to shake up an industry.",
        spotify_url: "https://open.spotify.com/episode/3kPQX27ZGQMnA604wdeMwh",
        podcast_embed_url:
          "https://open.spotify.com/embed-podcast/episode/3kPQX27ZGQMnA604wdeMwh"
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
        location: "Cape Town, South Africa",
        episode_description:
          "Alexandria speaks in this hilarious episode on what worked and didn't work on her journey to set up Digs Connect. Find out why Digs Connect brought 10 000 rolls of branded toilet paper in from China amongst other amazing ways this start up goes about succeeding. We also hear about the journey to raise funding from Alexandria. This is one you don't want to miss.",
        spotify_url: "",
        podcast_embed_url: ""
      },
      {
        path: "pocket-jam",
        title: "PocketJam",
        season_id: 1,
        episode_id: 4,
        description:
          "PocketJam is an app that teaches your child to earn and save their pocket money using math challenges and savings rewards.",
        avatar_url: "/assets/images/pocketjam.svg",
        website_url: "https://pocketjam.io",
        speaker: "Co-founder Nick Hill",
        location: "Cape Town, South Africa",
        episode_description:
          "Nick tells us all about the pocket jam experience, from a small proof of concept, to an incubator overseas in Switzerland. Get the inside scoop on how to bring your ideas to life!",
        spotify_url: "",
        podcast_embed_url: ""
      },
      {
        path: "ucook",
        title: "UCOOK",
        season_id: 1,
        episode_id: 5,
        description:
          "UCOOK delivers fresh ingredients directly to your home so you can make delicious meals in exactly the right proportions. We deliver your ingredients for the week every Monday.",
        avatar_url: "/assets/images/ucook.png",
        website_url: "https://www.ucook.co.za",
        speaker: "Co-founder David Torr",
        location: "Cape Town, South Africa",
        episode_description:
          "Dave details the hilarious and successful story of UCOOK in this episode. From delivering their first boxes straight from the garage without a recipe card, to shipping out tens of thousands of boxes every month. Find out where it started.",
        spotify_url: "",
        podcast_embed_url: ""
      },
      {
        path: "future-females",
        title: "Future Females",
        season_id: 1,
        episode_id: 6,
        description:
          "We aim to increase the number of and success of female entrepreneurs.",
        avatar_url: "/assets/images/future.png",
        website_url: "https://futurefemales.co",
        speaker: "Co-founder Lauren Dallas",
        location: "Cape Town, South Africa",
        episode_description:
          "Lauren tells us about her travels around the world and journey to starting the worldwide movement, future females. This inspiring chat is one not to miss. ",
        spotify_url: "",
        podcast_embed_url: ""
      },
      {
        path: "molecule",
        title: "Molecule",
        season_id: 1,
        episode_id: 7,
        description:
          "Molecule is a software platform to accelerate innovation in the pharmaceutical industry. It connects scientists, patients and industry to advance drug development in a collaborative open market.",
        avatar_url: "/assets/images/molecule.png",
        website_url: "https://molecule.to",
        speaker: "Head of Tech Kent Fourie",
        location: "Cape Town, South Africa",
        episode_description:
          "Strap yourself in, this one is for the technical folks, where Kent discusses the crazy awesome tech they are building at molecule.  ",
        spotify_url: ""
      }
    ],
    episode: {},
    currentlyPlaying:
      "https://open.spotify.com/embed-podcast/show/1QaspSzirKAqrKXdPzxNjv",
    openPlayer: false
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

  const playEpisode = async podcast_embed_url => {
    dispatch({
      type: PLAY_EPISODE,
      payload: podcast_embed_url
    });
  };

  const openThePlayer = async () => {
    dispatch({
      type: OPEN_PLAYER,
      payload: !state.openPlayer
    });
  };

  return (
    <EpisodeContext.Provider
      value={{
        episodes: state.episodes,
        episode: state.episode,
        currentlyPlaying: state.currentlyPlaying,
        openPlayer: state.openPlayer,
        getEpisodes,
        getEpisode,
        playEpisode,
        openThePlayer
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};

export default EpisodeState;
