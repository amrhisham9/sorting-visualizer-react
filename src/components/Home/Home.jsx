import React from "react";
import "./Home.css";
import image from "./images/nImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import timeEventsManager from "time-events-manager";
import Wobble from "react-reveal/Wobble";
import Fade from "react-reveal/Fade";
import Typical from "react-typical";

function Home() {
  timeEventsManager.timeoutCollection.removeAll();
  return (
    <div>
      <Container>
        <Row>
          <Col className="col11">
            <Fade duration={1800}>
              <h1 className="heading">
                Welcome To <span>Sortilizer</span>,
              </h1>
            </Fade>
            <Fade left delay={300} duration={1500}>
              <h3 className="description">
                By using Sortilizer, one can easily visualize
                <br />
                <span>
                <Typical
                  steps={["Bubble Sort", 1500, "Selection Sort", 1500, "Insertion Sort", 1500, "Merge Sort", 1500, "Quick Sort", 1500, "Heap Sort", 1500]}
                  loop={Infinity}
                  wrapper="b"
                />
                </span><br /> and be able to deeply
                understand them.
              </h3>
            </Fade>

            <Fade delay={1000} duration={2000}>
              <button className="start-sortilizing-btn">
                <Link
                  className="start-sortilizing-lnk"
                  to="/sorting-visualizer"
                >
                  Start Sortilizing!
                </Link>
              </button>
            </Fade>
          </Col>

          <Col>
            <Fade right delay={500} duration={1400}>
              <img className="img" src={image} />
            </Fade>
          </Col>
        </Row>
      </Container>

      <footer className="footer-home">
        <p>
          Designed & Built by{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amr-hisham-668a211a5"
          >
            Amr Hisham
          </a>
          , 2020.
        </p>
      </footer>
    </div>
  );
}

export default Home;
