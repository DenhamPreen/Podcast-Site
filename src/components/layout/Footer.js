import React, { useContext, useEffect } from "react";
import HamburgerMenu from "react-hamburger-menu";
import EpisodeContext from "../../context/episode/episodeContext";

const Footer = () => {
  const episodeContext = useContext(EpisodeContext);
  const { currentlyPlaying, openPlayer, openThePlayer } = episodeContext;

  return (
    <footer
      className="footer-player"
      style={{ height: !openPlayer ? "180px" : "34px" }}
    >
      <HamburgerMenu
        isOpen={!openPlayer}
        menuClicked={() => {
          openThePlayer();
        }}
        width={30}
        height={30}
        strokeWidth={3}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
        style={{ float: "right" }}
      />
      <center>
        <iframe
          src={currentlyPlaying}
          width="100%"
          height="150"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </center>
    </footer>
  );
};

export default Footer;
