import { PiCertificateLight } from "react-icons/pi";

function Certifications() {
  return (
    <section className="section">
      <div className="divider is-size-5">Certifications</div>
      <div className="container has-text-centered">
        <div
          data-aos="zoom-out"
          className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center"
        >
          <div className="column p-1">
            <img
              src="https://drive.google.com/thumbnail?id=1FR2A-n6pK1dMbGmlrj5jRohnpz_PpyhT&sz=w1000"
              alt="Kaggle - Intro to Programming"
              className="image is-3by2"
            />
            {/* <p className="mt-2 has-text-weight-semibold">Bulma CSS</p> */}
          </div>
          <div className="column p-1">
            <img
              src="https://drive.google.com/thumbnail?id=1GyRpfZDmELqrVxqhiwW77NByBAIkqJBS&sz=w1000"
              alt="Kaggle - Python"
              className="image is-3by2"
            />
          </div>
          <div className="column p-1">
            {/* <iframe
                src="https://drive.google.com/file/d/1XD4wYW-qJFOxQILiad3EAqpyIZCvKiov/preview"
                height={"100%"}
              ></iframe> */}
            <img
              src="https://drive.google.com/thumbnail?id=1rUea6LxZSCqCBH2m0Vd59Br92RRg7mvZ&sz=w1000"
              alt="ESRI - Getting Started with GIS"
              className="image is-3by2"
            />
            {/* <p className="mt-2 has-text-weight-semibold">Tailwind CSS</p> */}
          </div>
          <div className="column p-1">
            <img
              src="https://drive.google.com/thumbnail?id=1s2JrAuO7eRsdd-ZrWqu58yq53CpSXMEK&sz=w1000"
              alt="ESRI - Python for Everyone"
              className="image is-3by2"
            />
          </div>
        </div>
        <button className="button is-link is-rounded">
          <a
            className="navbar-item"
            target="_blank"
            rel="noopener"
            href="https://drive.google.com/drive/u/1/folders/1XdY47QkoBJHwJNKpHX_lmPQlw89O4lqc"
          >
            <PiCertificateLight className="is-size-5" />
            View More Certifications!
          </a>
        </button>
      </div>
    </section>
  );
}

export default Certifications;
