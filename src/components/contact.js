import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GetInfo from "../functions/getInfo";
import { StyledContact } from "../styled/contact.styled";
import Github from "../assets/icons/github";
import LinkedIn from "../assets/icons/linkedin";

const Contact = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    AOS.init();
    GetInfo(setInfo);
  }, []);
  return (
    <StyledContact id='contact'>
      <div
        class="contact-header"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h2>(003) SLIDE IN MY DMS</h2>

      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <div class="email">
          <p className="email-header">Say Hi</p>
          <p>{info.Email}</p>
        </div>

        <div className="social">
          {/* <p className="socials-header">Check it out</p> */}
          <div class="socials">
            <a class="socials-link" href={info.Github}>
              <p>Github</p>
              <Github height={"40"} width={"40"} fill={"#f5f5f5"} />
            </a>
            <a class="socials-link" href={info.LinkedIn}>
              <p>LinkedIn</p>
              <LinkedIn height={"40"} width={"40"} fill={"#f5f5f5"} />
            </a>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
