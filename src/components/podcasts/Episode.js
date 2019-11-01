import React, { useEffect, useContext, Fragment, useState } from "react";
import EpisodeContext from "../../context/episode/episodeContext";
import { Link } from "react-router-dom";

const Episode = ({ match }) => {
  const episodeContext = useContext(EpisodeContext);

  const [listenEpisodeText, updateListenEpisodeText] = useState("Play Podcast");

  const { getEpisode, episode } = episodeContext;

  useEffect(() => {
    getEpisode(match.params.path);
  }, []);

  const {
    title,
    description,
    avatar_url,
    website_url,
    location,
    speaker,
    episode_description
  } = episode;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{title}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          <div>
            <h4>Chatting with: <small>{speaker}</small></h4>
          </div>
          {description && (
            <Fragment>
              <h4>Company description:</h4>
              <h5>{description}</h5>
            </Fragment>
          )}
            <a            
              onMouseEnter={() => updateListenEpisodeText("Coming Soon")}
              onMouseLeave={() => updateListenEpisodeText("Play Podcast")}
              disabled
            >
           Coming Soon 
            </a>
          <a href={website_url} className="btn btn-dark my-1" target="_blank">
            Visit website
          </a>
          
            <div>
          </div>
        </div>
      </div>
      <div className="card">
        <h4>Episode description:</h4>
        <h5>{episode_description}</h5>
      </div>
    </Fragment>
  );
};

export default Episode;
