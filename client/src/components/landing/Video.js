import React from 'react';
import { Container } from 'semantic-ui-react';
import './landing.css';

const Video = () => {
  return (
    <Container fluid className="video-container">
      <h1 className="video-header logo-text" style={{ color: '#3ebcb2'}}>Groupr</h1>
      <h2 className="video-subheader logo-text">DO WHAT YOU LOVE</h2>
      <video
        className="video"
        autoPlay
        loop
        src="https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
      />
    </Container>
  );
};

export default Video;
