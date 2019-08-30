import React, { Fragment } from 'react';

const About = () => {
  return (
    <div className='container'>
      <h2> About Denham & Jon Jon </h2>
      <br />
      <p>
        Denham and Jon Jon met in their computer science honours class. Denham
        looked like he had no friends and Jon Jon took a leap of faith and
        invited him to join the cool kids for lunch. They have been building
        exciting things ever since.
      </p>
      <br />
      <p>
        Together they are currently working on{' '}
        <a href='https://wildcards.world?ref=podcast'>wildcards.world</a> and
        <a href='https://alwaysforsale.io?ref=podcast'>
          &nbsp;alwaysforsale.io
        </a>{' '}
        - 2 unique projects that combine interesting incentive mechanisms. The
        success of these projects has led them to a move to Station F in Paris
        where they will continue to build.
      </p>
      <br />
      <p>Get in touch with us:</p>
      <p>jonjonclark@gmail.com </p>
      <p>denhampreen@gmail.com</p>
      <br />
    </div>
  );
};

export default About;
