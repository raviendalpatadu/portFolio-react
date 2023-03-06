import React from "react";
import './index.css';
import stc from "../../assets/imgs/stcb.png";
import ucsc from "../../assets/imgs/ucsc.png";


function Education() {
  return (
    <>
    <section className="section is-medium is-hidden-touch" id="Education">
        <div className="container">
          <h1 className="title is-size-1 mb-9" data-aos="fade-up">Education</h1>
          <div className="columns mx-6 my-6" data-aos="fade-right" data-aos-duration="2000">
            <div className="column is-3">
              <div className="image is-150x150 bgcolor-brand-edu has-circle">
                <img className="" src={ucsc} alt="" />
              </div>
            </div>
            <div className="column is-9 is-align-self-center ml-9 is-nunito">
              <h1 className="title is-size-2">Bsc. in Information Systems</h1>
              <p className="is-nutito mr-6">
                Currently reading for my Bachelors' Degree in Information
                Systems at University of Colombo School of Computing (UCSC).
              </p>
            </div>
          </div>
          <div className="columns mx-6 my-6" data-aos="fade-left" data-aos-duration="2000">
            <div className="column is-3">
              <div className="image is-150x150 bgcolor-brand-edu has-circle">
                <img className="" src={stc} alt="" />
              </div>
            </div>
            <div className="column is-9 is-align-self-center ml-9 is-nunito">
              <h1 className="title is-size-2">Primary and Secondary Education</h1>
              <p className="is-nutito mr-6">
                Passed General Certificate of Education Exams; Ordinary Level Exam with 6 A passes and 3 B passes and Advanced Level with 1 A pass, 1 C pass and 1 S pass.
              </p>
            </div>
          </div>
        </div>
    </section>
      <section className="section is-hidden-desktop" id="Education">
        <div className="container">
          <h1 className="title is-size-1 mb-6" data-aos="fade-up">Education</h1>
          <div
            className="columns"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="column is-full">
              <div className="image bgcolor-brand-edu has-circle">
                <img className="" src={ucsc} alt="" />
              </div>
            </div>
            <div className="column is-full is-align-self-center is-nunito">
              <h1 className="title is-size-2">Bsc. in Information Systems</h1>
              <p className="is-nutito">
                Currently reading for my Bachelors' Degree in Information
                Systems at University of Colombo School of Computing (UCSC).
              </p>
            </div>
          </div>
          <div
            className="columns"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <div className="column is-full">
              <div className="image bgcolor-brand-edu has-circle">
                <img className="" src={stc} alt="" />
              </div>
            </div>
            <div className="column is-full is-align-self-center is-nunito">
              <h1 className="title is-size-2">Primary and Secondary Education</h1>
              <p className="is-nutito">
                Passed General Certificate of Education Exams; Ordinary Level Exam with 6 A passes and 3 B passes and Advanced Level with 1 A pass, 1 C pass and 1 S pass.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
    );
}

export default Education;
