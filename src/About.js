import React from "react";
import HeaderData from "./content/HeaderData.json";
import "./css/About.scss";

export const About = () => {
  return (
    <div className="oct2022-about">
      <h1 className="oct2022-about-heading"> ABOUT </h1>
      <div className="oct2022-one-day-event">
        A One Day Event Focusing On The <span> Microsoft </span> Cloud Security
        Services
      </div>
      <div className="oct2022-about-para-text">
        India Cloud Security Summit , 2022 is a one day virtual event organized
        by the{" "}
        <span>
          <a
            href="https://www.meetup.com/Microsoft-365-and-Power-Platform-User-group-India/"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft 365 , Power Platform & Cloud Security India User group
          </a>
        </span>
        . This year&#39;s event will focus on the Cloud Security topics related
        to Microsoft 365, Microsoft Azure, Microsoft Power Platform, Dynamics
        365, and Endpoint security. This is the second Cloud Security event from
        the Microsoft Community in India followed by the first one we had on
        2021. You can find all the details about the previous event in this{" "}
        <span>
          <a
            href="https://www.indiacloudsecuritysummit.com/aug2021"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
        </span>
        . The ultimate goal of this one-day virtual event is to cover all the
        aspects of the Microsoft Cloud Security services. In this one-day
        virtual event we will deep-dive into Microsoft&#39;s Cloud Security
        stack with hands-on sessions and labs, delivered to you by industry
        experts, Microsoft MVP&#39;s and RD&#39;s, Microsoft employees and
        community leaders from different parts of the world.
      </div>
      <div className="oct2022-registration-text">
        <a
          className="oct2022-registration-button"
          href={HeaderData[0].registrationLink}
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer">
            <p>Registrations are free !</p>
          </div>
        </a>
      </div>
    </div>
  );
};
