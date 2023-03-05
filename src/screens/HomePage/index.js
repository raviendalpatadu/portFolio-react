import React from "react";
import './index.css';
import my from '../../assets/imgs/my.png';


function HomePage() {
  return (
    <section className="hero">
        <div className="hero columns mb-6">
          <div
            className="column is-half ml-6 hero-text-margin-y"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1
              className="title has-text-left textcolor-brand is-size-5 mb-0 is-nunito"
            >
              Undergraduate <br className="is-hidden-desktop" />at UCSC
            </h1>
            <h1
              className="hero-header title has-text-left is-size-1 has-text-darker"
            >
              Hello,<br className="is-hidden-desktop" />my name is <br className="is-hidden-touch"/>
              Ravien Dalpatadu
            </h1>
            <h1 className="title has-text-left is-size-5">
              Undergraduate | Archer | Web Developer
            </h1>
            <h1 className="has-text-left is-size-5 has-text-grey-light is-nunito">
              A person who desire to succeed in all <br />
              academic and sports endeavors presented.
            </h1>

            <div className="field is-grouped my-5">
              <p className="control">
                <a href="#projects"
                  className="button bgcolor-brand is-size-5 is-roboto has-text-black"
                >
                  Projects
                </a>
              </p>
              <p className="control">
                <a href="https://www.linkedin.com/in/ravien-dalpatadu-8718b7223/" target="_blank" className="button is-size-5 is-black-outlined btn-outline">
                  <span className="icon is-small">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  <span className="is-roboto">Linkedln</span>
                </a>
              </p>
            </div>
          </div>

          <div className="column is-half is-hidden-touch mt-0">
            <span className="circle is-clipped">
              <img className="hero-img" src={my} alt="my.png"/>
            </span>
          </div>
          
          <div className="column is-half is-hidden-desktop mt-0">
            <div className="circle-mobile is-clipped">
              <img className="hero-img" src={my} alt="my.png"/>
            </div>
          </div>
        </div>
      </section>
  );
}

export default HomePage;
