const Resume = () => {
  return (
    <>
      {/* ======= Resume Section ======= */}
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Ambar Dudhane</h4>
                <p>
                  <em>
                    Enthusiastic full stack developer offering experience in
                    Angular, Spring-Boot, REST and Oracle SQL in the reinsurance
                    domain as well as proficiency in multiple programming
                    languages, application development, and client
                    presentations.
                  </em>
                </p>
                <ul>
                  <li>Arlington, TX</li>
                  <li>(682) 283-5495</li>
                  <li>ambar.dudhane@outlook.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>MS in Computer Science</h4>
                <h5>2019 - 2021</h5>
                <p>
                  <em>University of Texas at Arlington, Arlington, TX</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Engineering in Computer Science</h4>
                <h5>2011 - 2015</h5>
                <p>
                  <em>Pune University, Pune, India</em>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>SOFTWARE DEVELOPER</h4>
                <h5>2016 - 2019</h5>
                <p>
                  <em>L&T INFOTECH </em>
                </p>
                <ul>
                  <li>
                    Developed full stack web application to facilitate data
                    entry, quoting, special acceptances, document generation and
                    bordeaux reporting using Angular-Spring Boot framework.
                  </li>
                  <li>
                    Improved server’s response time by analyzing the code and
                    properly releasing the resources after the use.
                  </li>
                  <li>
                    Deployed application on Oracle WebLogic Server 12c ensuring
                    compatibility on different browsers.
                  </li>
                  <li>
                    Conducted client meetings for requirement walkthrough to get
                    clear understanding of the requirement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section */}
    </>
  );
};

export default Resume;
