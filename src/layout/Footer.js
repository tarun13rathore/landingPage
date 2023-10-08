import React, { useRef } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Footer = () => {
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
  return (
    <>
      <footer id="footer">
        <div className="foot">
          <div class="foot-col-2">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a onClick={scrollToHomeSection}>Home</a>
              </li>
              <li>
                <a onClick={scrollToServiceSection}>Service</a>
              </li>
              <li>
                <a onClick={scrollToContactSection}>Contact</a>
              </li>
              <li>
                <a onClick={scrollToAboutSection}>About</a>
              </li>
            </ul>
          </div>

          <div class="foot-col-3">
            <h4>Social Media</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/yourpage"
                  className="social-icon"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yourprofile"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div class="foot-col-4">
            <input text="email" placeholder="Subscribe Here..." />
            <button>
              <BsFillArrowRightCircleFill />
            </button>
            <p>Tower 14/701, Global Heights Sohna Road Gurugram</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
