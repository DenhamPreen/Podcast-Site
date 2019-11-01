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
    speaker
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
            <h4>Chatting with:</h4>
            <h5>{speaker}</h5>
          </div>
          {description && (
            <Fragment>
              <h4>Company description:</h4>
              <h5>{description}</h5>
            </Fragment>
          )}
          <a href={website_url} className="btn btn-dark my-1" target="_blank">
            Visit website
          </a>
          <div>
            <button
              className="btn btn-dark my-1"
              onMouseEnter={() => updateListenEpisodeText("Coming Soon")}
              onMouseLeave={() => updateListenEpisodeText("Play Podcast")}
              disabled
            >
              {listenEpisodeText}
            </button>
          </div>
        </div>
      </div>
      {/* <div className='card'>
        <h3>Episode details:</h3>
        <h3>Chatting with:</h3>
        <h3>Some other information:</h3>
      </div> */}
    </Fragment>
  );
};

export default Episode;
