const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Enthusiastic full stack developer offering experience in Angular,
              Spring-Boot, REST and Oracle SQL in the reinsurance domain as well
              as proficiency in multiple programming languages, application
              development, and client presentations.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img
                src="assets/img/profile-pic.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Developer</h3>
              <p className="font-italic">
                Developed full stack web application to facilitate data entry,
                quoting, special acceptances, document generation and bordeaux
                reporting using Angular-Spring Boot framework.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>23 March 1994</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>+1 (682) 283 5495</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>Masters</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <span>ambar.dudhane@outlook.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>Arlington, TX</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
};

export default About;
