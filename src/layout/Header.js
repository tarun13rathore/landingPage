import React, { useRef, useEffect } from "react";
import { Button, NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Footer from "../layout/Footer";
import "./LayoutStyle.scss";
import logo from "../Asset/img/logo.png";

const Header = () => {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);

  //about
  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth", // You can use 'auto' for instant scroll
        block: "start", // 'start' will scroll to the top of the element
      });
    }
  };

  //contact
  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth", // You can use 'auto' for instant scroll
        block: "start", // 'start' will scroll to the top of the element
      });
    }
  };

  //service
  const scrollToServiceSection = () => {
    if (serviceSectionRef.current) {
      serviceSectionRef.current.scrollIntoView({
        behavior: "smooth", // You can use 'auto' for instant scroll
        block: "start", // 'start' will scroll to the top of the element
      });
    }
  };

  //home
  const scrollToHomeSection = () => {
    if (homeSectionRef.current) {
      homeSectionRef.current.scrollIntoView({
        behavior: "smooth", // You can use 'auto' for instant scroll
        block: "start", // 'start' will scroll to the top of the element
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const menuBar = document.querySelector(".menu-bar");
      const scrollThreshold = 100; // Adjust this value as needed

      if (window.pageYOffset > scrollThreshold) {
        menuBar.style.background = "rgba(255, 255, 255, 0.9)"; // Set the background color with transparency
        // You can also update other styles here
      } else {
        menuBar.style.background = "transparent";
        // Reset other styles if needed
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="menu-bar">
        <header className="headerStyle">
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand onClick={scrollToHomeSection}>
                <img src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto ">
                  <Nav.Link onClick={scrollToHomeSection}>Home</Nav.Link>
                  <Nav.Link onClick={scrollToServiceSection}>Service</Nav.Link>
                  <Nav.Link onClick={scrollToAboutSection}>About</Nav.Link>
                  <Nav.Link onClick={scrollToContactSection}>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
      <section ref={homeSectionRef}>
        <Home />
      </section>

      <section ref={serviceSectionRef}>
        <Service />
      </section>
      <section ref={aboutSectionRef}>
        <About />
      </section>

      <section ref={contactSectionRef}>
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Header;
