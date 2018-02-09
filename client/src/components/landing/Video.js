import React from "react";
import { Container, Header } from "semantic-ui-react";

const Video = () => {
  return (
    <Container fluid className="video-container">
      <h1 className="video-header logo-text" style={{ color: '#3ebcb2'}}>Grouper</h1>
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
