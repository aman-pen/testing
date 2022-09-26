import React from "react";
import "./css/Donate.scss";
import { Row, Col } from "reactstrap";
import DonateImg2 from "./images/website/Donate-1.webp";
import DonateImg1 from "./images/website/Donate-2.webp";
import DonateImg3 from "./images/website/Donate-3.webp";
import DonateImg4 from "./images/website/Donate-4.webp";
import OpenQuotes from "./images/website/open-quotes.png";
import ClosedQuotes from "./images/website/closed-quotes.png";
import HeaderData from "./content/HeaderData.json";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";

export const Donate = () => {
  return (
    <div className="oct2022-donate">
      <div className="oct2022-donate-bg">
        <h1 className="oct2022-donate-heading"> SUPPORT A CAUSE </h1>
        <Row className="oct2022-donate-imgs">
          <Col xs={6} md={3} className="oct2022-donate-imgs1">
            <LazyLoad className="oct2022-dono-images" debounce={false}>
              <ImageLoader src={DonateImg1} alt="donate-imgs1" />
            </LazyLoad>
          </Col>
          <Col xs={6} md={3} className="oct2022-donate-imgs2">
            <LazyLoad className="oct2022-dono-images" debounce={false}>
              <ImageLoader src={DonateImg2} alt="donate-imgs2" />
            </LazyLoad>
          </Col>
          <Col xs={6} md={3} className="oct2022-donate-imgs3">
            <LazyLoad className="oct2022-dono-images" debounce={false}>
              <ImageLoader src={DonateImg3} alt="donate-imgs3" />
            </LazyLoad>
          </Col>
          <Col xs={6} md={3} className="oct2022-donate-imgs4">
            <LazyLoad className="oct2022-dono-images" debounce={false}>
              <ImageLoader src={DonateImg4} alt="donate-imgs4" />
            </LazyLoad>
          </Col>
        </Row>
        <div className="oct2022-donate-quote">
          <img
            src={OpenQuotes}
            alt="open-quotes"
            className="oct2022-open-quotes"
          />
          <span className="oct2022-donate-quote-span">Giving is Receiving</span>
          <img
            src={ClosedQuotes}
            alt="closed-quotes"
            className="oct2022-closed-quotes"
          />
        </div>
        <div className="oct2022-donate-para-text">
          To bring a lasting change in the lives of underprivileged students who are living in utter poverty and unable to access basic education, we are fundraising for them under the project Give India - Hamein Padhao Hamein Badhao in collaboration with <a href="https://scopeforchange.org/" target="_blank" rel="noreferrer" style={{color:"white",textDecoration:"underline"}}>Scope For Change</a>. To help us create more impact and touch more lives, we need your support and contribution. Please back our fundraising so that together we can build a better India for all of us.
        </div>
        <div className="oct2022-donation-btn">
          <div className="oct2022-donate-btn btn">
            <a
              href={HeaderData[0].donationLink}
              target="_blank"
              rel="noreferrer"
            >
              DONATE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
