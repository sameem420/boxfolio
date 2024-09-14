import avatar from "../assets/dev_icon.png";

function Experience() {
  return (
    <div className="container p-2 is-flex is-justify-content-center">
      <div
        className="columns is-flex-direction-row is-justify-content-center is-align-items-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="column">
          <h1 className="divider is-size-5">Experience</h1>

          <ul className="timeline box has-background-dark">
            <li className="timeline-header">
              <span className="button is-link">Current</span>
            </li>
            <li className="timeline-item is-warning">
              <div className="timeline-tag is-icon ">
                <figure className="image is-32x32">
                  <img src={avatar} />
                </figure>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-light">October 2022 - Present</p>
                <p className="has-text-warning menu-label">
                  Full-Stack Developer - GIS | SIME Dubai UAE
                </p>
              </div>
            </li>
            {/* <li className="timeline-header">
                  <span className="button is-primary">2022</span>
                </li> */}
            <li className="timeline-item is-danger">
              <div className="timeline-tag is-icon">
                <figure className="image is-32x32">
                  <img src={avatar} />
                </figure>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-light">
                  January 2022 - September 2022
                </p>
                <p className="has-text-warning menu-label">
                  React Developer | Freelance
                </p>
              </div>
            </li>
            {/* <li className="timeline-header">
                  <span className="button is-primary">2021</span>
                </li> */}
            <li className="timeline-item is-danger">
              <div className="timeline-tag is-icon">
                <figure className="image is-32x32">
                  <img src={avatar} />
                </figure>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-light">
                  February 2021 - December 2021
                </p>
                <p className="has-text-warning menu-label">
                  React Developer | Ripe.ai (Remote) USA
                </p>
              </div>
            </li>
            <li className="timeline-header">
              <span className="button is-link">Start</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
