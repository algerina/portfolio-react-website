import React from "react";  /* eslint-disable */
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>NextJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Ruby on Rails</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Postgresql</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MySql</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Jest</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Devise-jwt</h4>
            </div>
          </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>NodeJs</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className="experience__backend">
          <h3>Professional Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                <h4>Remote Programing</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                <h4>Pair Programming</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Communication</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>

              <div>
                <h4>Leadership</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Public Speacking</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Time Management</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Mentoring</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
