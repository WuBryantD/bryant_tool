import React from 'react';
import Card from './components/Card'
import CreateTravel from './components/CreateTravel'
import {
  Container,
  Row,
  Col,
  Carousel
} from 'react-bootstrap'


function App() {
  return (
    <div style={{ backgroundColor: '#DDD' }}>
      {/* <CreateTravel /> */}
      <Container style={{ width: '100vw', backgroundColor: '#F7F7F7' }}>
        <Row style={{ backgroundColor: '#333', color: 'white' }}>
          <Col>LOGO</Col>
          <Col>Login / SignUp</Col>
          <Col>身分</Col>
          <Col>齒輪</Col>
        </Row>
        <Row style={{ backgroundColor: 'black' }}>
          <Col>
            <Carousel >
              <Carousel.Item >
                <img
                  style={{ width: '100VW', height: '400px' }}
                  className="d-block w-100"
                  src="http://i.imgur.com/CYSkN.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: '100VW', height: '400px' }}
                  className="d-block w-100"
                  src="http://img.netbian.com/file/2017/1211/c57358788acf48e2bdcd48729d2df99a.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: '100VW', height: '400px' }}
                  className="d-block w-100"
                  src="http://i.imgur.com/dHiqo.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel></Col>
        </Row>
        <Row style={{ height: '100%' }}>
          <Col xs='false' lg='2' style={{ backgroundColor: 'gray', color: 'white', borderStyle: 'solid', borderWidth: '0 0.5px', borderColor: 'black' }} >1 of 3</Col>
          <Col xs='12' lg='10' style={{ borderStyle: 'solid', borderWidth: '0 0.5px 0 0 ' }}>
            <CreateTravel />
            {/* <Card /> */}
          </Col>
        </Row>
        <Row style={{ backgroundColor: 'gray', borderStyle: 'solid', borderWidth: '0.5px' }}>
          Footer
        </Row>
      </Container>
    </div>
  );
}

export default App;
