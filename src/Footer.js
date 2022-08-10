import React from "react";
import "./css/Footer.scss";
import footerData from "./content/Footerdata.json";
import footerLogo from "./images/website/transparentLogo.png";
// import NavbarData from "./content/NavbarData.json";
import linkedInLogo from "./images/website/LinkedIn-white.png";
import FaceboolLogo from "./images/website/Facebook-white.png";
import TwitterLogo from "./images/website/twittericon.png";

export const Footer = () => {
  return (
    <div className="oct2022-footer" id="footer">
      <div className="row oct2022-footer-wrapper">
        <div className="col-xs-12 col-lg-4 oct2022-footer-logo-wrapper row">
          <img src={footerLogo} className="oct2022-footerlogo" alt="logo" />
        </div>
        <div className="col-xs-12 col-lg-4 oct2022-contact-us-wrapper">
          <h4 className="text-center">Contact Us</h4>
          <div>
            {footerData.map((data) => {
              return (
                <div className="text-center">
                  <p> Email: {data.email}</p>
                  <p> Mobile: {data.mobile}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-xs-12 col-lg-4 oct2022-social-media-wrapper">
          <h4 className="text-center">Social Media</h4>
          <div className="row ">
            {footerData.map((data) => {
              return (
                <div className="col-10 col-xs-12 col-lg-12 oct2022-media-array text-center">
                  <a
                    className="oct2022-social-media-icon"
                    target="_blank"
                    href={data.linkedInLink}
                    rel="noreferrer"
                  >
                    <img src={linkedInLogo} alt="" />
                  </a>
                  <a
                    className="oct2022-social-media-icon"
                    target="_blank"
                    href={data.TwitterLink}
                    rel="noreferrer"
                  >
                    <img src={TwitterLogo} alt="" />
                  </a>
                  <a
                    className="oct2022-social-media-icon"
                    target="_blank"
                    href={data.facebookLink}
                    rel="noreferrer"
                  >
                    <img src={FaceboolLogo} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row oct2022-copyright">
        <div className="col">
          <span>
            All Rights Reserved © Microsoft 365 ,Power Platform & Cloud Security
            UG - India
          </span>
        </div>
      </div>
    </div>
  );
};
