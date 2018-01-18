import React from 'react';
import { Container } from 'semantic-ui-react';

const Video = () => {
	return (
		<Container>
			<video src='https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4' autoPlay loop></video>
		</Container>
	);
}

export default Video;