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
        Check out one of there current projects {""}
        <a href="https://wildcards.world?ref=podcast">wildcards.world</a> that
        raises funding for animal conservation.
      </p>
      <br />
      <h3>Get in touch and find out more:</h3>
      <h5>jonjonclark@gmail.com </h5>
      <a
        href={"https://jonjonclark.com"}
        className="btn btn-dark my-1"
        target="_blank"
      >
        Jonjon's website
      </a>
      <h5>denhampreen@gmail.com</h5>
      <a
        href={"https://denhampreen@gmail.com"}
        className="btn btn-dark my-1"
        target="_blank"
      >
        Denham's website
      </a>
      <br />
    </div>
  );
};

export default About;
