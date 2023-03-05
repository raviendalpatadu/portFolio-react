import React from "react";
import './index.css';
import myabout from '../../assets/imgs/my2.png';

function AboutMe() {
  return (
      <div className="container">
        <section className="section is-medium" id="about">
          
          <div className="columns">
            <div
              className="column is-half is-hidden-touch"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
            <div className="circle-about mx-auto">
              <img className="pl-6" src={myabout} alt="my2" />
            </div>
            </div>

              <div
                className="column is-half is-hidden-desktop"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
              >
              <div className="circle-about-mobile mx-auto">
                <img className="p-1" src={myabout} alt="my2" />
              </div>
              </div>

            <div
              className="column is-half my-auto"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <h1 className="title">About me</h1>
              <p className="is-nurito has-text-justified">
                I am an undergraduate student studying Information Systems with a
                focus on web development. I have a strong foundation in
                programming, scripting, and styling languages such as Python, PHP,
                C, JavaScript, HTML, CSS and have experience building dynamic
                websites using frameworks such as React. I have worked on
                developing and maintaining web applications for various personal
                projects, and have gained valuable skills in problem solving and
                project management. I am excited to continue learning and growing
                as a web developer, and am eager to apply my skills in a
                professional setting.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
}

export default AboutMe;
