import Contactus from "./contactus";

const Contact = () => {
  return (
    <>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row mt-1">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>607 Summit Ave, Arlington, TX 76013</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>ambar.dudhane@outlook.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+1 (682) 283 5495</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <Contactus />
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
};

export default Contact;
