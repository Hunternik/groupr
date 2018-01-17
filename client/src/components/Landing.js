import React, { Component } from 'react';
import whiteboarding from "../assets/images/Wall-Sketching/MP4/Wall-Sketching.mp4";

class Landing extends Component {
    render() {
        return (
            <div class="homepage-hero-module">
                <div class="video-container">
                    <div class="title-container">
                        <div class="headline">
                            <h1>BasicReqMeetup</h1>

                        </div>
                        <div class="description">
                            <div class="inner">Connecting quality candidates with quality companies</div>
                        </div>
                    </div>
                    <div class="filter"></div>
                    <video autoplay loop class="fillWidth">
                        <source src={whiteboarding} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                </div>
            </div>
        );
    }
}

export default Landing;
