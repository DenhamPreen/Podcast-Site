import React from "react";

const About = () => {
  return (
    <div className="container">
      <h2> Where it started? </h2>
      <br />
      <p>
        Denham and Jon Jon met in their computer science honours class. Denham
        looked like he had no friends and Jon Jon took a leap of faith and
        invited him to join the cool kids for lunch. They have been building
        exciting things ever since.
      </p>
      <br />
      <p>
        Check out one of their current projects {""}
        <a href="https://wildcards.world?ref=podcast" style={{color: '#afa'}}>wildcards.world</a> that
        raises funding for animal conservation.
      </p>
      <br />
      <h3>Get in touch with us to find out more</h3>
      <div style={gridStyle}>
        <div>
        <a
          href={"https://jonjonclark.com"}
          target="_blank"
          style={{color: '#afa'}}
          >
          Jon Jon
        </a>
        <a
          href={"mailto:jonjonclark@gmail.com"}
          target="_blank"
          ><h5>jonjonclark@gmail.com </h5>
          </a>
          </div>
          <div>
        <a
          href={"https://denhampreen.com"}
          target="_blank"
          style={{color: '#afa'}}
          >
          Denham
        </a>
          <a
          href={"mailto:denhampreen@gmail.com"}
          target="_blank"
          >    
        <h5>denhampreen@gmail.com</h5>
        </a>
          </div>
      </div>
      <br />
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(250px, 1fr))",
  gridGap: "1rem",
  objectFit: "cover"
};

export default About;
