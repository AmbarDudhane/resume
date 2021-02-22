const Skills = () => {
  return (
    <>
      {/* ======= Skills Section ======= */}
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">HTML</span>
              </div>
              <div className="progress">
                <span className="skill">CSS</span>
              </div>
              <div className="progress">
                <span className="skill">JavaScript</span>
              </div>
              <div className="progress">
                <span className="skill">Python</span>
              </div>

              <div className="progress">
                <span className="skill">SQL</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">PHP</span>
              </div>
              <div className="progress">
                <span className="skill">Java</span>
              </div>
              <div className="progress">
                <span className="skill">Spring-Boot</span>
              </div>
              <div className="progress">
                <span className="skill">Angular</span>
              </div>
              <div className="progress">
                <span className="skill">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skills Section */}
    </>
  );
};

export default Skills;
