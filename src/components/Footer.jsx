import footer_bg from "../assets/footer_bg.png";
import bike from "../assets/bike.png";
import car from "../assets/car.png";
import { FaChevronCircleUp } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { useEffect, useState } from "react";

function Footer() {
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
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
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
  );
}

export default Footer;
