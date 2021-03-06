import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Portfolio = () => {
  return (
    <>
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Projects</h2>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    FAC HYBRID – A BROKER APPLICATION
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li>
                        Designed reactive forms and implemented pagination which
                        resulted into 30% faster page loading at the client
                        side.
                      </li>
                      <li>
                        Created shared services to consume REST API calls and to
                        communicate between components at the UI.
                      </li>
                      <li>
                        Implemented REST controller in Spring Boot Framework to
                        create RESTful web services using JSON objects as
                        response.
                      </li>
                      <li>
                        Enhanced user experience by implementing module which
                        alerted users about idle session activity.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    FACULTATIVE EXCHANGE
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li>
                        Addressed reinsurance premium calculation error by
                        modifying the UI template and business logic at the
                        backend.
                      </li>
                      <li>
                        Delivered set of enhancements as per client's
                        requirements maintaining the code standards.
                      </li>
                      <li>
                        Resolved production issue of email subject line by
                        adding configuration of UTF-8 in the SMTP server.
                      </li>
                      <li>
                        Executed several change requests to add new
                        functionalities in the application.
                      </li>
                      <li>
                        Started working towards migrating application from
                        WebLogic server 8.1 to Oracle WebLogic Server 12.1
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    EMPLOYEE MANAGEMENT PORTAL
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                      <li>
                        Developed a SPA using Spring-Boot, Angular and MYSQL and
                        deployed the application on Heroku platform.
                      </li>
                      <li>
                        Implemented mailing service in the application using
                        Mailgun add-on on Heroku.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    VIRTUAL PROGRAMMING ASSISTANT USING VCAT
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                      <li>
                        Developed a virtual assistant primarily focused on
                        providing an easy and efficient way for voice-based
                        programming
                      </li>
                      <li>
                        Designed classes which interprets audio commands and
                        interacts with the browser's background
                      </li>
                      <li>
                        Improved application's performance by defining the
                        proper command structure.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    HOTEL SEARCH ENGINE
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ul>
                      <li>
                        Information retrieval is achieved using popular
                        algorithm TF-IDF.
                      </li>
                      <li>
                        Classification is performed on dataset to predict the
                        rating using Naive Bayes classification algorithm.
                      </li>
                      <li>
                        Image captions are generated using inception V3
                        technique on google colab and searched using TF-IDF
                        technique.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    Portfolio App
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <ul>
                      <li>
                        Developed a Single Page Application (SPA) using react js
                      </li>
                      <li>Implemented email functionality using EmailJS</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
    </>
  );
};

export default Portfolio;
