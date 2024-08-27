import "./App.css";
import { useEffect, useState } from "react";
import developerbg from "./assets/dev.svg";
import cardbg from "./assets/dark-bg.jpg";
import avatar from "./assets/dev_icon.png";
import footer_bg from "./assets/footer_bg.png";
import bike from "./assets/bike.png";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { PiCodeBlockLight } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { PiUserDuotone } from "react-icons/pi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiHandWavingBold } from "react-icons/pi";
import { FaChevronCircleUp } from "react-icons/fa";

const App = () => {
  const [b2tVisible, setb2tVisible] = useState(false);

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

    // });
  }, []);

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

  window.addEventListener("scroll", toggleVisible);

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
                  <a className="navbar-item ">
                    <FaHouse />
                    Home
                  </a>
                  <a className="navbar-item ">
                    <PiUserDuotone /> About
                  </a>
                  <a className="navbar-item ">
                    <TbDeviceDesktopAnalytics /> Projects
                  </a>
                  <a className="navbar-item ">
                    <IoDocumentTextOutline />
                    Resume
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
                JavaScript Developer
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
              <div className="divider">About</div>

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

        <div className="container p-2 is-flex is-justify-content-start">
          <div className="columns is-flex-direction-row is-justify-content-center">
            <div className="column">
              <h1 className="is-size-2">Experience</h1>

              <ul className="timeline">
                <li className="timeline-header">
                  <span className="button is-primary">Current</span>
                </li>
                <li className="timeline-item is-warning">
                  <div className="timeline-tag is-icon">
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
                  <span className="button is-primary">Start</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-foot mt-5">
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
        </div>
      </section>
      <footer className="footer has-background-light">
        <div className="content has-text-centered">
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
              <img src={bike} className="w3-hide-small img-thumbail" />
            </div>
          </div>
          <div className="container text-center mt-2">
            <h5 className="footer-text">
              Crafted with <i className="fa fa-heart m-1"></i> by Muhammad
              Sameem
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
