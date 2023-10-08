import React from "react";
import {
  Button,
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import tech1 from "../Asset/img/img1.png";
import tech2 from "../Asset/img/img2.png";
import tech3 from "../Asset/img/img3.png";
import "./Style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Service = () => {
  return (
    <>
      {/* --------------service------------ */}
      <section className="service">
        <Container fluid>
          <h1>SERVICE</h1>
          <Container>
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card className="card1">
                  <Card.Img variant="top" src={tech1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <p className="cont" style={{ fontSize: "1vw" }}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="card1">
                  <Card.Img variant="top" src={tech1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <p className="cont" style={{ fontSize: "1vw" }}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="card1">
                  <Card.Img variant="top" src={tech2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <p className="cont" style={{ fontSize: "1vw" }}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Card className="card1">
                  <Card.Img variant="top" src={tech3} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <p className="cont" style={{ fontSize: "1vw" }}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Swiper>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Service;
