import React from "react";
import './index.css';
import pms from "../../assets/imgs/pharmacy.png";
import advocate from "../../assets/imgs/advocate.png";
import rubc from "../../assets/imgs/internet.png";

function Projects() {
  return (
    <section className="section is-medium" id="projects">
        <div className="columns">
          <div className="column is-6 mx-auto">
            <h1
              className="title is-2 has-text-centered is-border-bottom-brand"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              Projects
            </h1>

            <div
              className="card is-horizontal columns mt-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <div
                className="card-content column is-three-sevenths is-align-self-center"
              >
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-3 is-playfair-display">Advocate</p>
                  </div>
                </div>

                <div
                  className="content has-text-justified ml-4 is-nunito has-text-grey-light"
                >
                  A lawyer management system is a tool used by law firms to
                  organize and streamline their practice. It allows attorneys to
                  track cases, schedule appointments, manage documents, and
                  communicate with clients.
                </div>

                <a className="button is-rounded is-small ml-4" href="https://github.com/raviendalpatadu/advocate">
                  View Project
                </a>
              </div>
              <div className="card-image column is-four-sevenths">
                <figure className="image is-4by5">
                  <img src={advocate} alt="advocate" />
                </figure>
              </div>
            </div>
            <div
              className="card is-horizontal columns mt-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <div className="card-image column is-four-sevenths">
                <figure className="image is-4by5">
                  <img src={pms} alt="internet" />
                </figure>
              </div>
              <div
                className="card-content column is-three-sevenths is-align-self-center"
              >
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-3 is-playfair-display has-text-right">
                      Pharmacy <br className="is-hidden-touch"/>Management system
                    </p>
                  </div>
                </div>

                <div
                  className="content has-text-justified ml-4 is-nunito has-text-grey-light"
                >
                  A pharmacy management system is a computerized system used by
                  pharmacies to manage medication orders, patient records, and
                  billing information. It aims to improve efficiency, reduce
                  errors, and enhance patient safety in the dispensing of
                  medications.
                </div>
                <a className="button is-rounded is-small ml-4">
                  View Project
                </a>
              </div>
            </div>

            <div
              className="card is-horizontal columns mt-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <div
                className="card-content column is-three-sevenths is-align-self-center"
              >
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-3 is-playfair-display">RUB C</p>
                  </div>
                </div>

                <div
                  className="content has-text-justified ml-4 is-nunito has-text-grey-light"
                >
                  RUB C is a tool that allows users to test the speed of their
                  internet connection. It measures the time it takes for data to
                  be sent from a user's device to a server and back, and
                  calculates the resulting speed in megabits per second (Mbps).
                  Speed checkers are useful for diagnosing and troubleshooting
                  slow or unstable internet connections.
                </div>
                <a className="button is-rounded is-small ml-4" href="https://github.com/raviendalpatadu/Measuring-the-quality-of-internet">
                  View Project
                </a>
              </div>
              <div className="card-image column is-four-sevenths">
                <figure className="image is-4by5">
                  <img src={rubc} alt="internet" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Projects;
