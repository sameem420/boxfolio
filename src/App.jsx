import "./App.css";
import developerbg from "./assets/developer.svg";
import cardbg from "./assets/dark-bg.jpg";
import profile from "./assets/devsameem.png";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { PiCodeBlockLight } from "react-icons/pi";
import { useEffect } from "react";

const App = () => {
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
                  <a className="navbar-item "> Home</a>
                  <a className="navbar-item "> Contact </a>
                  <a className="navbar-item "> Services </a>
                  <a className="navbar-item "> Project </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body" id="hero-bg">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="title is-size-2 has-text-white-bis">
                  Hi, <br /> I am Muhammad Sameem
                </p>
                <p className="subtitle is-size-4 has-text-grey-lighter">
                  JavaScript Developer
                </p>
              </div>
              <div className="column">
                <figure className="image is-3by2">
                  <img className="is-rounded" src={developerbg} />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 is-flex is-justify-content-center">
          <div className="columns is-flex-direction-row is-justify-content-center">
            <div className="column is-5">
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
                          src={profile}
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Muhammad Sameem</p>
                      <p className="subtitle is-6">A polyglot dev</p>
                    </div>
                  </div>

                  <div className="content pt-4">
                    <nav
                      className="breadcrumb is-flex is-flex-column is-justify-content-center"
                      aria-label="breadcrumbs"
                    >
                      <ul>
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
            <div className="column is-justify-content-center">
              <p>
                I am self-taught and an enthusiastic Software Engineer with
                experience developing web-based softwares. I am focused on
                developing and enhancing immersive, user-friendly, and
                feature-rich applications. I apply analytical skills and a keen
                eye for detail to create unique and effective web solutions,
                provide technical skills and knowledge, design new websites from
                the ground up. I am currently available for work and looking for
                a new role as a Frontend developer.
              </p>
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
    </>
  );
};

export default App;
