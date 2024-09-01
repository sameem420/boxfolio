import "./App.css";
import { useEffect, useState } from "react";
import developerbg from "./assets/dev.svg";
import cardbg from "./assets/dark-bg.jpg";
import avatar from "./assets/dev_icon.png";
import footer_bg from "./assets/footer_bg.png";
import bike from "./assets/bike.png";
import car from "./assets/car.png";
import arcgis_enterprise from "./assets/skills/ArcGIS-Enterprise.png";
import arcgis_quickcapture from "./assets/skills/arcgis-quickcapture.png";
import arcgis_online from "./assets/skills/arcgis-online.svg";
import survey123 from "./assets/skills/survey123.svg";
import arcmap from "./assets/skills/arcMap.png";
import arcgis_workforce from "./assets/skills/arcgis-workforce.png";
import arcgis_fieldmaps from "./assets/skills/arcgis-fieldmaps.png";
import arcgis_dashboards from "./assets/skills/arcgis-dashboards.png";
import qgis from "./assets/skills/qgis.svg";
import {
  SiArcgis,
  SiBulma,
  SiEsri,
  SiGithub,
  SiJquery,
  SiMicrosoftsqlserver,
  SiOracle,
  SiTailwindcss,
} from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { PiCertificateLight, PiCodeBlockLight } from "react-icons/pi";
import {
  FaBootstrap,
  FaChrome,
  FaCodeBranch,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSquareJs,
} from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { PiUserDuotone } from "react-icons/pi";
import { TbDeviceDesktopAnalytics, TbMessage2Pin, TbSql } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiHandWavingBold } from "react-icons/pi";
import { FaChevronCircleUp } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { VscVscode, VscVscodeInsiders } from "react-icons/vsc";

const App = () => {
  const [b2tVisible, setb2tVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setb2tVisible(true);
    } else if (scrolled <= 300) {
      setb2tVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        console.log(el);
        const $target = document.getElementById(target);
        // console.log($target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
    // });
  }, []);

  return (
    <>
      <section className="hero is-large">
        <div className="hero-head">
          <nav className="navbar" id="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" id="logo-text">
                  {/* <img
                    src="https://bulma.io/assets/images/bulma-type-white.png"
                    alt="Logo"
                  /> */}
                  Muhammad Sameem
                </a>
                <span
                  className="navbar-burger has-text-white"
                  data-target="navbarMenuHeroB"
                  onClick={(el) => {
                    const target = document.getElementById("navbarMenuHeroB");
                    el.target.classList.toggle("is-active");
                    target.classList.toggle("is-active");
                  }}
                >
                  <span></span>

                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <FaHouse /> Home
                  </a>
                  <a className="navbar-item">
                    <PiUserDuotone /> About
                  </a>
                  <a className="navbar-item">
                    <TbDeviceDesktopAnalytics /> Projects
                  </a>
                  <a className="navbar-item">
                    <PiCertificateLight /> Certifications
                  </a>
                  <a className="navbar-item">
                    <TbMessage2Pin /> Contact
                  </a>
                  <a className="navbar-item">
                    <IoDocumentTextOutline /> Resume
                  </a>
                  <div className="navbar-item">
                    <a
                      className="button"
                      href="https://github.com/sameem420"
                      target="_blank"
                    >
                      <span className="icon">
                        <FaCodeBranch />
                      </span>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body" id="hero-bg">
          <div className="columns">
            <div className="column is-6">
              <p className="title is-size-2 has-text-white-bis">
                Hi{" "}
                <span className="has-text-warning">
                  <PiHandWavingBold />
                </span>
                , <br /> I am Muhammad Sameem
              </p>
              <p className="subtitle is-size-4 has-text-grey-lighter">
                Full-Stack Developer - GIS
              </p>
            </div>
            <div className="column is-6">
              <figure className="image is-3by2">
                <img className="is-rounded" src={developerbg} />
              </figure>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="container p-2 is-flex is-justify-content-center">
          <div className="columns is-flex-direction-row is-justify-content-center is-align-items-center">
            <div className="column is-5 mt-4">
              <div className="card">
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
                An Optimistic and Ambitious Front-End Developer with over 2
                years of experience specializing in GIS development. Expert in
                crafting and enhancing intuitive and interactive, immersive,
                user-friendly, and feature-rich applications using HTML, CSS,
                JavaScript, React, and both ESRI and open-source tools. Skilled
                in integrating GIS APIs like Google Maps, Leaflet, OpenLayers,
                and ArcGIS to deliver dynamic mapping and spatial data-based
                solutions. Committed to enhancing user experience and
                application performance through efficient coding, responsive
                design, and load time optimization. Proven problem-solver with a
                track record of taking ownership of projects, mentoring
                developers, and contributing to collaborative team environments.
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

        <div className="container p-2 is-flex is-justify-content-center">
          <div className="columns is-flex-direction-row is-justify-content-center is-align-items-center">
            <div className="column">
              <h1 className="divider is-size-5">Experience</h1>

              <ul className="timeline box">
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
                    <p className="heading">October 2022 - Present</p>
                    <p>GIS Developer - SIME Dubai UAE</p>
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
                    <p className="heading">January 2022 - September 2022</p>
                    <p>React Developer - Freelance</p>
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
                    <p className="heading">February 2021 - December 2021</p>
                    <p>React Developer - Ripe.ai (Remote) USA</p>
                  </div>
                </li>
                <li className="timeline-header">
                  <span className="button is-link">Start</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="hero-foot mt-5">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Home</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}
      </section>

      <section className="section">
        <div className="divider is-size-5">Skills</div>
        <div className="container has-text-centered">
          <div className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
            <div className="column p-2">
              <FaHtml5 className="is-size-2 has-text-danger-50" />
              <p className="mt-2 has-text-weight-semibold">HTML</p>
            </div>
            <div className="column p-2">
              <FaCss3Alt className="is-size-2 has-text-link" />
              <p className="mt-2 has-text-weight-semibold">CSS</p>
            </div>
            <div className="column p-2">
              <FaSquareJs className="is-size-2 has-text-warning" />
              <p className="mt-2 has-text-weight-semibold">JavaScript</p>
            </div>
            <div className="column p-2">
              <SiJquery className="is-size-2 has-text-link-40" />
              <p className="mt-2 has-text-weight-semibold">JQuery</p>
            </div>
            <div className="column sp-2">
              <FaPython className="is-size-2 has-text-info" />
              <p className="mt-2 has-text-weight-semibold">Python</p>
            </div>
            <div className="column p-2">
              <TbSql className="is-size-2 has-text-warning" />
              <p className="mt-2 has-text-weight-semibold">SQL</p>
            </div>
            <div className="column p-2">
              <FaBootstrap className="is-size-2 has-text-link-100-invert" />
              <p className="mt-2 has-text-weight-semibold">Bootstrap</p>
            </div>
            <div className="column p-2">
              <SiBulma className="is-size-2 has-text-primary-45" />
              <p className="mt-2 has-text-weight-semibold">Bulma CSS</p>
            </div>
            <div className="column p-2">
              <SiTailwindcss className="is-size-2 has-text-info-45" />
              <p className="mt-2 has-text-weight-semibold">Tailwind CSS</p>
            </div>
          </div>

          <div className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
            <div className="column p-2">
              <FaGitAlt className="is-size-2 has-text-danger" />
              <p className="mt-2 has-text-weight-semibold">Git</p>
            </div>
            <div className="column p-2">
              <FaGithub className="is-size-2 has-text-dark" />
              <p className="mt-2 has-text-weight-semibold">GitHub</p>
            </div>
            <div className="column p-2">
              <FaChrome className="is-size-2 has-text-info" />
              <p className="mt-2 has-text-weight-semibold">Chrome Dev Tools</p>
            </div>
            <div className="column p-2">
              <FaReact className="is-size-2 has-text-info-50" />
              <p className="mt-2 has-text-weight-semibold">React JS</p>
            </div>
            <div className="column p-2">
              <FaNodeJs className="is-size-2 has-text-primary-20" />
              <p className="mt-2 has-text-weight-semibold">Node JS</p>
            </div>
            <div className="column p-2">
              <SiMicrosoftsqlserver className="is-size-2 has-text-danger-100-invert" />
              <p className="mt-2 has-text-weight-semibold">MS SQL Server</p>
            </div>
            <div className="column p-2">
              <SiOracle className="is-size-2 has-text-danger" />
              <p className="mt-2 has-text-weight-semibold">
                Oracle SQL Developer
              </p>
            </div>
            <div className="column p-2">
              <VscVscode className="is-size-2 has-text-link" />
              <p className="mt-2 has-text-weight-semibold">VS Code</p>
            </div>

            <div className="column p-2">
              <img width="36px" src={arcmap} alt="ArcMap / ArcGIS Desktop" />
              <p className="mt-2 has-text-weight-semibold">ArcGIS Desktop</p>
            </div>
          </div>

          <div className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
            <div className="column p-2">
              <SiArcgis className="is-size-2 has-text-link" />
              <p className="mt-2 has-text-weight-semibold">ArcGIS Pro</p>
            </div>
            <div className="column p-2">
              <img
                width="36px"
                src={arcgis_enterprise}
                alt="ArcGIS Enterprise"
              />
              <p className="mt-2 has-text-weight-semibold">ArcGIS Enterprise</p>
            </div>
            <div className="column p-2">
              <img width="36px" src={arcgis_online} alt="ArcGIS Online" />
              <p className="mt-2 has-text-weight-semibold">ArcGIS Online</p>
            </div>
            <div className="column p-2">
              <img width="36px" src={survey123} alt="ArcGIS Online" />
              <p className="mt-2 has-text-weight-semibold">Survey123</p>
            </div>
            <div className="column p-2">
              <img
                width="36px"
                src={arcgis_quickcapture}
                alt="ArcGIS Quick Capture"
              />
              <p className="mt-2 has-text-weight-semibold">Quick Capture</p>
            </div>
            <div className="column p-2">
              <img width="36px" src={arcgis_fieldmaps} alt="ArcGIS Fieldmaps" />
              <p className="mt-2 has-text-weight-semibold">Fieldmaps</p>
            </div>
            <div className="column p-2">
              <img width="36px" src={arcgis_workforce} alt="ArcGIS Workforce" />
              <p className="mt-2 has-text-weight-semibold">Workforce</p>
            </div>
            <div className="column p-2">
              <img
                width="36px"
                src={arcgis_dashboards}
                alt="ArcGIS Dashboards"
              />
              <p className="mt-2 has-text-weight-semibold">Dashboards</p>
            </div>
            <div className="column p-2">
              <img width="36px" src={qgis} alt="QGIS" />
              <p className="mt-2 has-text-weight-semibold">QGIS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="divider is-size-5">Certifications</div>
        <div className="container has-text-centered">
          <div className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
            <div className="column p-2">
              <FaHtml5 className="is-size-2 has-text-danger-50" />
              <p className="mt-2 has-text-weight-semibold">HTML</p>
            </div>
            <div className="column p-2">
              <FaCss3Alt className="is-size-2 has-text-link" />
              <p className="mt-2 has-text-weight-semibold">CSS</p>
            </div>
            <div className="column p-2">
              <FaSquareJs className="is-size-2 has-text-warning" />
              <p className="mt-2 has-text-weight-semibold">JavaScript</p>
            </div>
            <div className="column p-2">
              <SiJquery className="is-size-2 has-text-link-40" />
              <p className="mt-2 has-text-weight-semibold">JQuery</p>
            </div>
            <div className="column sp-2">
              <FaPython className="is-size-2 has-text-info" />
              <p className="mt-2 has-text-weight-semibold">Python</p>
            </div>
            <div className="column p-2">
              <TbSql className="is-size-2 has-text-warning" />
              <p className="mt-2 has-text-weight-semibold">SQL</p>
            </div>
            <div className="column p-2">
              <FaBootstrap className="is-size-2 has-text-link-100-invert" />
              <p className="mt-2 has-text-weight-semibold">Bootstrap</p>
            </div>
            <div className="column p-2">
              <SiBulma className="is-size-2 has-text-primary-45" />
              <p className="mt-2 has-text-weight-semibold">Bulma CSS</p>
            </div>
            <div className="column p-2">
              <SiTailwindcss className="is-size-2 has-text-info-45" />
              <p className="mt-2 has-text-weight-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="divider is-size-5">Contact</div>
        <div className="container has-text-centered">
          <div className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
            <div className="column p-2">
              <FaHtml5 className="is-size-2 has-text-danger-50" />
              <p className="mt-2 has-text-weight-semibold">HTML</p>
            </div>
            <div className="column p-2">
              <FaCss3Alt className="is-size-2 has-text-link" />
              <p className="mt-2 has-text-weight-semibold">CSS</p>
            </div>
            <div className="column p-2">
              <FaSquareJs className="is-size-2 has-text-warning" />
              <p className="mt-2 has-text-weight-semibold">JavaScript</p>
            </div>
            <div className="column p-2">
              <SiJquery className="is-size-2 has-text-link-40" />
              <p className="mt-2 has-text-weight-semibold">JQuery</p>
            </div>
            <div className="column sp-2">
              <FaPython className="is-size-2 has-text-info" />
              <p className="mt-2 has-text-weight-semibold">Python</p>
            </div>
            <div className="column p-2">
              <TbSql className="is-size-2 has-text-warning" />
              <p className="mt-2 has-text-weight-semibold">SQL</p>
            </div>
            <div className="column p-2">
              <FaBootstrap className="is-size-2 has-text-link-100-invert" />
              <p className="mt-2 has-text-weight-semibold">Bootstrap</p>
            </div>
            <div className="column p-2">
              <SiBulma className="is-size-2 has-text-primary-45" />
              <p className="mt-2 has-text-weight-semibold">Bulma CSS</p>
            </div>
            <div className="column p-2">
              <SiTailwindcss className="is-size-2 has-text-info-45" />
              <p className="mt-2 has-text-weight-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="box has-background-white mt-2">
        <div className="box has-text-centered has-background-link-100">
          <button
            id="back2Top"
            title="Back to top"
            onClick={scrollToTop}
            style={{ display: b2tVisible ? "inline" : "none" }}
          >
            <FaChevronCircleUp id="b2tIcon" />
          </button>
          <div className="footer-top">
            <img src={footer_bg} className="img-fluid" />
            <div className="footer-images">
              <div>
                <img
                  src={bike}
                  className="w3-hide-small img-thumbail"
                  id="bikeIcon"
                />
              </div>
              <div className="has-text-left pt-0">
                <img
                  src={car}
                  className="w3-hide-small img-thumbail "
                  id="carIcon"
                />
              </div>
            </div>
          </div>
          <div className="box has-text-dark has-background-link-100 text-center py-0">
            <h5 className="footer-text is-uppercase has-text-weight-bold">
              Crafted with{" "}
              <GiTechnoHeart className="has-text-danger is-size-5 has-text-weight-semibold" />{" "}
              by Muhammad Sameem
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
