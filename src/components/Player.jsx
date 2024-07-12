
import { Col, Container, Image, Row } from "react-bootstrap"

const Player = () => {
    return(
        <Container className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row
            className="h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <Image src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <Image src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <Image src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <Image src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <Image src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    )
}

export default Player