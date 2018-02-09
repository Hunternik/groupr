import React, { Component } from 'react';
import { Card, Image, Icon, Container, Transition } from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

require('./team.css');

class Team extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container className="team-container">
        <Container
          className="team"
          textAlign="center"
          text
          style={{ position: 'relative' }}
        >
          <div className="about-team">
            <h1>Our Team</h1>
          </div>
          <div className="about-team">
            <p>
              We're a bunch of passionate engineers who wanted have a broad
              range of skills and expertise to provide the best networking
              experience for professionals in technology.
            </p>
            <p>
              When we're not coding, you'll finding us climbing Mt. Kilmanjaro,
              gardening, playing Overwatch, playing basketball, or wine tasting
              in Napa.
            </p>
          </div>
          <div className="gallery">
            <Slider {...settings}>
              <Card>
                <Image src="../../assets/images/ProfileImages/james.png" />
                <Card.Content>
                  <Card.Header>James</Card.Header>
                  <Card.Meta>
                    <span className="date">Software Engineer</span>
                  </Card.Meta>
                  <Card.Description>
                    James is a software engineer that loves his dog Blue, shoes,
                    and playing computer games.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://github.com/jmsjtu">
                    <Icon name="code" />
                    GitHub
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src="https://avatars1.githubusercontent.com/u/22055162?s=460&v=4" />
                <Card.Content>
                  <Card.Header>Grace</Card.Header>
                  <Card.Meta>
                    <span className="date">Software Engineer</span>
                  </Card.Meta>
                  <Card.Description>
                    Grace is a software engineer and former actor that loves her
                    dog Mandu, whiskey, and traveling.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://github.com/gracepark">
                    <Icon name="code" />
                    GitHub
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src="https://avatars3.githubusercontent.com/u/27989364?s=400&v=4" />
                <Card.Content>
                  <Card.Header>Donovan</Card.Header>
                  <Card.Meta>
                    <span className="date">Software Engineer</span>
                  </Card.Meta>
                  <Card.Description>
                    Donovan is a software engineer that loves climbing,
                    skateboarding, and being outdoors.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://github.com/dlowkeen">
                    <Icon name="code" />
                    GitHub
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src="https://avatars0.githubusercontent.com/u/27756216?s=460&v=4" />
                <Card.Content>
                  <Card.Header>Mike</Card.Header>
                  <Card.Meta>
                    <span className="date">Software Engineer</span>
                  </Card.Meta>
                  <Card.Description>
                    Mike is a software engineer with years of digital marketing
                    experience and loves BBC.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://github.com/mikeyamato">
                    <Icon name="code" />
                    GitHub
                  </a>
                </Card.Content>
              </Card>
              <Card>
                <Image src="https://avatars0.githubusercontent.com/u/28130499?s=460&v=4" />
                <Card.Content>
                  <Card.Header>Izzy</Card.Header>
                  <Card.Meta>
                    <span className="date">Software Engineer</span>
                  </Card.Meta>
                  <Card.Description>
                    Izzy is a software engineer and former gymnast that loves
                    playing basketball and music.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://github.com/ykeanu">
                    <Icon name="code" />
                    GitHub
                  </a>
                </Card.Content>
              </Card>
            </Slider>
          </div>
        </Container>
      </Container>
    );
  }
}

export default Team;
