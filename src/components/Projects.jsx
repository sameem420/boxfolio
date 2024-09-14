import cripeImage from "../assets/projects/cripe.png";
import youvidImage from "../assets/projects/youvid.png";
import jsonblogsImage from "../assets/projects/jsonblogs.png";
import imgalleryImage from "../assets/projects/imgallery.png";
import saylaniwebImage from "../assets/projects/saylaniweb.png";
import memegenImage from "../assets/projects/memegen.png";
import miniprojectsImage from "../assets/projects/10miniprojects.png";
import ilogsImage from "../assets/projects/ilogs.png";
import { TbArrowForward, TbDeviceDesktopAnalytics } from "react-icons/tb";

function Projects() {
  return (
    <section className="section">
      <div className="divider is-size-5">Some Things I&apos;ve Built</div>
      <div className="container has-text-centered">
        <div
          data-aos="zoom-in"
          className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-space-evenly is-align-items-stretch"
        >
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              Cri.pe
            </p>
            <img src={cripeImage} alt="Cri.pe" className="image is-16by9" />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <TbArrowForward /> Implemented functionality to generate short
              links right from the landing page
              <li>
                <TbArrowForward /> Implemented & Integrated Login, Signup, Short
                URL APIs, JWT Auth for Users
              </li>
              <li>
                <TbArrowForward /> Managed all the data flow through Redux
                (thunk, saga)
              </li>
              <li>
                <TbArrowForward /> Integrated tawk.to Chat, Google Analytics
              </li>
            </ul>
          </div>
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              imGallery
            </p>
            <img src={imgalleryImage} alt="Cri.pe" className="image is-16by9" />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <TbArrowForward /> imgallery - Search for your favorite images
              <li>
                <TbArrowForward /> - Integrated unsplash API
              </li>
              <li>
                <TbArrowForward /> Search for images from unsplash API
              </li>
              <li>
                <TbArrowForward /> Top relavent results displayed in columns
              </li>
            </ul>
          </div>
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              JSONBlogs
            </p>
            <img src={jsonblogsImage} alt="Cri.pe" className="image is-16by9" />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <TbArrowForward />
              Integrated JSONplaceholderAPI to fetch blogs & authors data
              <li>
                <TbArrowForward /> isplayed blogs in a List with their
                respective author
              </li>
            </ul>
          </div>
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              YouVid App
            </p>
            <img src={youvidImage} alt="Cri.pe" className="image is-16by9" />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <TbArrowForward />
              Easily search for Youtube videos
              <li>
                <TbArrowForward />
                Integrated Youtube API
              </li>
              <li>
                <TbArrowForward /> Play your favorite youtube videos right from
                the application
              </li>
            </ul>
          </div>
        </div>

        <div className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-space-evenly is-align-items-stretch">
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              Saylani Website
            </p>
            <img
              src={saylaniwebImage}
              alt="Cri.pe"
              className="image is-16by9"
            />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <li>
                <TbArrowForward /> Saylani Responsive Homepage developed using
                HTML, CSS, JavaScript & Bootstrap
              </li>
            </ul>
          </div>
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              Meme Generator
            </p>
            <img src={memegenImage} alt="Cri.pe" className="image is-16by9" />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <li>
                <TbArrowForward /> Generate Memes Online
              </li>
            </ul>
          </div>
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              10 Mini Projects Challenge
            </p>
            <img
              src={miniprojectsImage}
              alt="Cri.pe"
              className="image is-16by9"
            />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <TbArrowForward />
              10 Mini Projects Challenge using HTML, CSS and JavaScript
            </ul>
          </div>
          <div className="column p-1">
            <p className="menu-label mt-2 has-text-weight-semibold has-text-dark pb-2">
              iLogs App
            </p>
            <img src={ilogsImage} alt="Cri.pe" className="image is-16by9" />
            <ul className="box mt-2 has-background-dark has-text-light p-2 is-uppercase has-text-left">
              <TbArrowForward />
              Take notes easily on the web
              <li>
                <TbArrowForward />
                Store your notes permanently, Come back later and notes are
                there (Edit or Delete Them)
              </li>
              <li>
                <TbArrowForward /> Easily add notes to Favorite Tab
              </li>
            </ul>
          </div>
        </div>

        <button className="button is-link is-rounded">
          <a
            className="navbar-item"
            target="_blank"
            rel="noopener"
            href="https://github.com/sameem420"
          >
            <TbDeviceDesktopAnalytics className="is-size-5" />
            View More Projects!
          </a>
        </button>
      </div>
    </section>
  );
}

export default Projects;
