const Footer = () => {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <h3>Ambar Dudhane</h3>

          <div className="social-links">
            <a
              href="https://www.instagram.com/ambardudhane/"
              className="instagram"
            >
              <i className="bx bxl-instagram" />
            </a>

            <a
              href="https://www.linkedin.com/in/ambardudhane/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          {/* <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>MyResume</span>
            </strong>
            . All Rights Reserved
          </div> */}
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: [license-url] */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};

export default Footer;
