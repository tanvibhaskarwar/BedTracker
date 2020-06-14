import React from "react";
import image0 from "../image/covid.jpeg";
import image from "../image/consult.jpg";
import image2 from "../image/bed.jpeg";
import image3 from "../image/testing1.png";
import image4 from "../image/fever.png";
import image5 from "../image/sneezing.png";
import image6 from "../image/sore_throat.png";
import image7 from "../image/shortness.png";
import image8 from "../image/headache.png";
import image9 from "../image/avoid_touching_door.png";
import image10 from "../image/cover_when_coughing.png";
import image11 from "../image/no_hand_shaking.png";
import image12 from "../image/proper_hand_waching.png";
import image13 from "../image/use_disinfecting_wipes.png";
import image14 from "../image/use_paper_towel.png";

import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Cards() {
  return (
    <Router>
      <div
        clasName="homepage"
        style={{ backgroundImage: "url(" + image0 + "), opacity:0.9" }}
      >
        <div align="center">
          <h1>Our Services</h1>
        </div>
        <div className="container">
          <div className="pads">
            <div className="box">
              <a href="https://www.tmf-group.com/en/services/companies/consultancy-solutions/covid-19/">
                <div
                  className="circle"
                  style={{ backgroundImage: "url(" + image + ")" }}
                  height="100px"
                ></div>
              </a>
              <div align="center">
                <h2>CONSULTANCY</h2>
              </div>
            </div>
          </div>
          <div className="pads1">
            <div className="box2">
              <Link className="nav-link" to={"/HospCards.js"}>
                <div
                  className="circle"
                  href="./HospCards"
                  style={{ backgroundImage: "url(" + image2 + ")" }}
                ></div>
              </Link>

              <div align="center">
                <h2>ICU BEDS</h2>
              </div>
            </div>
          </div>
          <div
            className="box3"
            style={{ backgroundImage: "url(" + image3 + ")" }}
          >
            <div align="center">
              <h2>Testing</h2>
            </div>
          </div>
        </div>
        <div className="conatiner2">
          <div align="center">
            <h1>Symptoms for Covid-19</h1>
          </div>
          <div align="center">
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image4 + ")" }}
            >
              <h3>fever</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image5 + ")" }}
            >
              <h3>sneezing</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image6 + ")" }}
            >
              <h3>sore throat</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image7 + ")" }}
            >
              <h3>shortness</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image8 + ")" }}
            >
              <h3>headache</h3>
            </div>
          </div>
        </div>
        <div className="conatiner3">
          <div align="center">
            <h1>Precautions against Covid-19</h1>
          </div>
          <div align="center">
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image9 + ")" }}
            >
              <h3>no touching</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image10 + ")" }}
            >
              <h3>cover</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image11 + ")" }}
            >
              <h3>no handshaking</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image12 + ")" }}
            >
              <h3>wash hands</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image13 + ")" }}
            >
              <h3>use wipes</h3>
            </div>
            <div
              className="fever-box"
              style={{ backgroundImage: "url(" + image14 + ")" }}
            >
              <h3>paper towels</h3>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
