import developerbg from "../assets/dev.svg";
import { FaCodeBranch } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { PiUserDuotone } from "react-icons/pi";
import { TbDeviceDesktopAnalytics, TbMessage2Pin } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiHandWavingBold } from "react-icons/pi";
import { PiCertificateLight } from "react-icons/pi";

function Header() {
  return (
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
  );
}

export default Header;
