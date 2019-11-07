import React from "react";
import { Link } from "react-router-dom";
import ComingSoon from "../../img/comingsoon.png";

const PodcastItem = ({
  episode: { title, episode_id, avatar_url, path, speaker, spotify_url }
}) => {
  return (
    <Link to={`/episode/${path}`}>
      <div
        className="card text-center hover-card"
        style={{ position: "relative" }}
      >
        {spotify_url == "" && (
          <img
            src={ComingSoon}
            alt=""
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "100px",
              transform: "translate(5px, -5px)"
            }}
          />
        )}
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "90px" }}
        />
        <h3>{title}</h3>
        <h6>{speaker}</h6>
        <p style={{ fontSize: "0.8rem" }}>
          <small>Episode: {episode_id}</small>
        </p>
        <div>
          <Link to={`/episode/${path}`} className="btn btn-light btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default PodcastItem;
