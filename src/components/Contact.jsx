import { FaAngleDoubleDown } from "react-icons/fa";
import destination from "../assets/destination.png";
import burj_al_arab from "../assets/burj-al-arab.png";
// import minare_paksitan from "../assets/minar-e-pakistan.png";
// import hassan_tower from "../assets/hassan_tower.png";
import uae_flag from "../assets/uae_flag.png";
// import pakistan_flag from "../assets/pakistan_flag.png";
// import morocco_flag from "../assets/morocco_flag.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";

function Contact() {
  return (
    <section className="section">
      <div className="divider is-size-5">Contact</div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container has-text-centered"
      >
        <img src={destination} alt="location" width="48" />
        <h5 className="menu-label my-2 has-text-weight-semibold has-text-warning box has-background-dark">
          Timezones I can easily workwith (GMT+4) (GMT+5) (GMT+1)
        </h5>
        <div className="columns is-desktop pt-2 is-flex-direction-row is-justify-content-space-between is-align-content-center is-align-items-center">
          <div className="column p-2 m-2">
            <div className="card has-background-dark">
              <div className="card-content">
                <h5 className="has-text-weight-semibold p-2">E-mail</h5>
                <div className="content">
                  <img src={email} width="32px" />
                </div>
                <div className="divider">
                  <FaAngleDoubleDown />
                </div>
                <h5 className="has-text-weight-semibold p-2 has-text-warning">
                  devsameem@gmail.com
                </h5>
              </div>
            </div>
          </div>

          <div className="column p-2 m-2 has-text-centered">
            <div className="card has-background-dark">
              <div className="card-content">
                <h5 className="has-text-weight-semibold p-2 has-text-warning">
                  United Arab Emirates
                </h5>
                <div className="content">
                  <img src={burj_al_arab} width="64px" />
                </div>
                <div className="divider">
                  <FaAngleDoubleDown />
                </div>
                <img src={uae_flag} width="24px" />
              </div>
            </div>
          </div>

          <div className="column p-2 m-2">
            <div className="card has-background-dark">
              <div className="card-content">
                <h5 className="has-text-weight-semibold p-2">
                  Call / WhatsApp
                </h5>
                <div className="content">
                  <img src={phone} width="32px" />
                </div>
                <div className="divider">
                  <FaAngleDoubleDown />
                </div>
                <h5 className="has-text-weight-semibold p-2 has-text-warning">
                  +971 507837858
                </h5>
              </div>
            </div>
          </div>

          {/* <div className="column p-2 m-2 box has-background-white-bis">
              <h5 className="has-text-weight-semibold p-2">Pakistan (GMT+5)</h5>
              <img src={minare_paksitan} width="72px" />
              <br />
              <img src={pakistan_flag} width="32px" className="m-2" />
            </div>
            <div className="column p-2 m-2 box has-background-white-bis">
              <h5 className="has-text-weight-semibold p-2">Morocco (GMT+1)</h5>
              <img src={hassan_tower} width="72px" />
              <br />
              <img src={morocco_flag} width="32px" className="m-2" />
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
