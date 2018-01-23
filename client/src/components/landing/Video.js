import React from 'react';
import { Container } from 'semantic-ui-react';

const Video = () => {
  return (
    <Container fluid className='video-container'>
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
