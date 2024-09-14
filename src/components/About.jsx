import avatar from "../assets/dev_icon.png";
import cardbg from "../assets/dark-bg.jpg";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { PiCodeBlockLight } from "react-icons/pi";

function About() {
  return (
    <div className="container p-2 is-flex is-justify-content-center">
      <div
        className="columns is-flex-direction-row is-justify-content-center is-align-items-center "
        data-aos="fade-up"
      >
        <div className="column is-5 mt-4">
          <div className="card has-background-dark">
            <div className="card-image">
              <figure className="image is-3by1">
                <img src={cardbg} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img
                      className="is-rounded"
                      src={avatar}
                      alt="Developer avatar"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Muhammad Sameem</p>
                  <p className="subtitle is-6">A polyglot dev</p>
                </div>
              </div>

              <div className="content pt-4">
                <nav className="breadcrumb " aria-label="breadcrumbs">
                  <ul className="is-flex is-flex-column is-justify-content-center is-align-items-center">
                    <li>
                      <a href="#">
                        <span className="icon is-small">
                          <SiLinkedin />
                        </span>
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon is-small">
                          <SiGithub />
                        </span>
                        <span>Github</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon is-small">
                          <PiCodeBlockLight />
                        </span>
                        <span>LeetCode</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="column has-text-justified">
          <div className="divider is-size-5">About</div>

          <p className="p-2">
            An Optimistic and Ambitious Front-End Developer with over 2 years of
            experience specializing in GIS development. Expert in crafting and
            enhancing intuitive and interactive, immersive, user-friendly, and
            feature-rich applications using HTML, CSS, JavaScript, React, and
            both ESRI and open-source tools. Skilled in integrating GIS APIs
            like Google Maps, Leaflet, OpenLayers, and ArcGIS to deliver dynamic
            mapping and spatial data-based solutions. Committed to enhancing
            user experience and application performance through efficient
            coding, responsive design, and load time optimization. Proven
            problem-solver with a track record of taking ownership of projects,
            mentoring developers, and contributing to collaborative team
            environments.
          </p>
          <aside className="menu p-2">
            <p className="menu-label box has-text-warning has-background-dark p-2 ">
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="menu-list">
              <li>
                <ul>
                  <li className="p-1">
                    <a className="has-text-white-ter has-background-dark">
                      Exploring and Learning new technologies
                    </a>
                  </li>
                  <li className="p-1">
                    <a className="has-text-white-ter has-background-dark">
                      Improve Problem Solving & Soft Skills
                    </a>
                  </li>
                  <li className="p-1">
                    <a className="has-text-white-ter has-background-dark">
                      Playing Open World, FPS and RPG Games
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default About;
