import React from "react";
import "./Style.scss";

import { Container, Row, Col } from "react-bootstrap";
import tech from "../Asset/img/tech.png";

const Home = () => {
  return (
    <>
      <section className="homeSection">
        <Container>
          <Row>
            <Col>
              <div className="cont">
                <h1 className="text-start mt-5" style={{ fontSize: "2vw" }}>
                  Lorem ipsum, or lipsum{" "}
                </h1>
                <h4 className="text-start mt-1" style={{ fontSize: "1.5vw" }}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought used in laying out print, graphic or web designs.
                  The passage is attributed to an unknown typesetter in the 15th
                  century who is thought.
                </h4>
              </div>
            </Col>
            <Col>
              <img src={tech} alt="img" className="img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
