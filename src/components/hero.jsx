import AOS from "aos";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Ambar Dudhane</h1>
          <p>I'm a Developer</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/ambardudhane/"
              className="instagram"
              target="_blank"
            >
              <i className="bx bxl-instagram" />
            </a>

            <a
              href="https://www.linkedin.com/in/ambardudhane/"
              className="linkedin"
              target="_blank"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
};

export default Hero;
