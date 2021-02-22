const Facts = () => {
  return (
    <>
      <section id="facts" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Tools</h2>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">Eclipse</span>
              </div>
              <div className="progress">
                <span className="skill">Oracle Jdeveloper 12c</span>
              </div>
              <div className="progress">
                <span className="skill">Visual Studio Code</span>
              </div>
              <div className="progress">
                <span className="skill">JIRA</span>
              </div>

              <div className="progress">
                <span className="skill">SourceTree</span>
              </div>
              <div className="progress">
                <span className="skill">GitHub Desktop</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">SQL Developer</span>
              </div>
              <div className="progress">
                <span className="skill">Splunk</span>
              </div>
              <div className="progress">
                <span className="skill">Bitbucket</span>
              </div>
              <div className="progress">
                <span className="skill">GitHub</span>
              </div>
              <div className="progress">
                <span className="skill">JetBrains Pycharm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Facts Section */}
    </>
  );
};

export default Facts;
