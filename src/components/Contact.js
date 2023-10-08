import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import tech5 from "../Asset/img/contact.png";

const Contact = () => {
  return (
    <>
      {/* ---------------contact us------------ */}
      <section className="contact">
        <Container>
          <h1>Contact Us</h1>
          <Row>
            <Col>
              <div className="heding">
                <div className="input">
                  <input className="inpName" placeholder="Enter Your Name" />
                  <input className="inpName" placeholder="Enter Your Email" />
                  <textarea
                    rows="4"
                    cols="60"
                    className="inptext"
                    placeholder="Enter Your Message"
                  />

                  <Button className="submitBtn">Submit</Button>
                </div>
              </div>
            </Col>
            <Col className="imgCont">
              <img src={tech5} alt="img" className="img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
