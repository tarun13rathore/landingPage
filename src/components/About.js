import React from "react";
import tech4 from "../Asset/img/about.png";
import { Container, Row, Col } from "react-bootstrap";
import tech1 from "../Asset/img/img1.png";
import tech2 from "../Asset/img/img2.png";
import tech3 from "../Asset/img/img3.png";
import "./Style.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const About = () => {
  return (
    <>
      <section className="about">
        <Container>
          <h1>ABOUT</h1>
          <Row>
            <Col>
              <img src={tech4} alt="img" className="img-fluid" />
            </Col>
            <Col>
              <div className="heding">
                <h4 className="mt-5" style={{ fontSize: "2vw" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </h4>
                <h4 style={{ fontSize: "2vw" }}>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting,
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------------Team---------- */}
      <section className="team">
        <Container className="altCenter">
          <h1>TEAM</h1>
          <Container className="swip">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <Container className="swipContainer">
                    <Row>
                      <Col className="col1">
                        <img src={tech1} alt="img" className="teamImg" />
                      </Col>
                      <Col className="col2">
                        <div className="cont">
                          <h2>Lorem Ipsum</h2>
                          <p>
                            "There is no one who loves pain itself, who seeks
                            after it and wants to have it, simply because it is
                            pain..."
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Container className="swipContainer">
                    <Row>
                      <Col className="col1">
                        <img src={tech1} alt="img" className="teamImg" />
                      </Col>
                      <Col className="col2">
                        <div className="cont">
                          <h2>Lorem Ipsum</h2>
                          <p>
                            "There is no one who loves pain itself, who seeks
                            after it and wants to have it, simply because it is
                            pain..."
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Container className="swipContainer">
                    <Row>
                      <Col className="col1">
                        <img src={tech3} alt="img" className="teamImg" />
                      </Col>
                      <Col className="col2">
                        <div className="cont">
                          <h2>Lorem Ipsum</h2>
                          <p>
                            "There is no one who loves pain itself, who seeks
                            after it and wants to have it, simply because it is
                            pain..."
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Container className="swipContainer">
                    <Row>
                      <Col className="col1">
                        <img src={tech2} alt="img" className="teamImg" />
                      </Col>
                      <Col className="col2">
                        <div className="cont">
                          <h2>Lorem Ipsum</h2>
                          <p>
                            "There is no one who loves pain itself, who seeks
                            after it and wants to have it, simply because it is
                            pain..."
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default About;
