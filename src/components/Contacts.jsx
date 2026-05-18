import React from "react";
import '../styles/Component.css';
import Map from "../static/map.png";
import Mail from "../static/mail.png";
import Facebook from "../static/facebook.png";
import Linkedin from "../static/linkedin.png";
import Calling from "../static/Contactme.png";

function Contacts() {
   return (
    <div className="contacts-page container-fluid h-100 py-4">
      <div className="row h-100 align-items-center position-relative">
        <div className="col-12 col-md-5 text-center text-md-start ps-md-5 mb-5 mb-md-0">
            <img 
              src={Map}
              alt="Vilnius" 
              className="vilnius-map img-fluid"
            />
        </div>

        <div className="col-12 col-md-7 d-flex flex-column align-items-center justify-content-end pb-5 position-relative h-100">
          <div className="connect-box text-center mt-5">
            {/* CV Atsisiuntimo mygtukas */}
            <div className="cv-container mb-4">
              <a 
                href="/static/Beata_CV.pdf" 
                download="Beata_CV.pdf"
                className="btn btn-dark cv-btn px-4 py-2 text-uppercase fw-bold"
              >
                Atsisiųsti CV
              </a>
            </div>

            <h3 className="section-title text-dark tracking-wide mb-3">SUSISIEKIME</h3>
            
            {/* Ikonos */}
            <div className="social-icons d-flex gap-3 justify-content-center">
              <a href="https://www.linkedin.com/in/beata-balnaite-3434b2349/" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="social-png" />
              </a>
              <a href="mailto:beata.balnaite@gmail.com">
                <img src={Mail} alt="Email" className="social-png" />
              </a>
              <a href="https://www.facebook.com/beata.balnaite" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Facebook" className="social-png" />
              </a>
            </div>

          </div>

          <img 
            src={Calling}
            alt="Beata-susisiekime" 
            className="corner-avatar img-fluid d-none d-md-block"
          />
        </div>
      </div>
    </div>
  );
}

export default Contacts;