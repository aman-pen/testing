import React from "react";
import "./css/Donate.scss";
import { Row, Col } from "reactstrap";
import DonateImg1 from "./images/website/DonateImg-1.jpg";
import DonateImg2 from "./images/website/DonateImg-2.jpg";
import DonateImg3 from "./images/website/DonateImg-3.jpg";
import DonateImg4 from "./images/website/DonateImg-4.jpg";
import OpenQuotes from "./images/website/open-quotes.png";
import ClosedQuotes from "./images/website/closed-quotes.png";
import HeaderData from "./content/HeaderData.json";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";

export const Donate = () => {
  return (
    <div className="aug2021-donate">
      <div className="aug2021-donate-bg">
        <h1 className="aug2021-donate-heading"> SUPPORT A CAUSE </h1>
        <Row className="aug2021-donate-imgs">
          <Col xs={6} md={3} className="aug2021-donate-imgs1">
            <LazyLoad className="aug2021-dono-images" debounce={false}>
              <ImageLoader src={DonateImg1} alt="donate-imgs1" />
            </LazyLoad>
          </Col>
          <Col xs={6} md={3} className="aug2021-donate-imgs2">
            <LazyLoad className="aug2021-dono-images" debounce={false}>
              <ImageLoader src={DonateImg2} alt="donate-imgs2" />
            </LazyLoad>
          </Col>
          <Col xs={6} md={3} className="aug2021-donate-imgs3">
            <LazyLoad className="aug2021-dono-images" debounce={false}>
              <ImageLoader src={DonateImg3} alt="donate-imgs3" />
            </LazyLoad>
          </Col>
          <Col xs={6} md={3} className="aug2021-donate-imgs4">
            <LazyLoad className="aug2021-dono-images" debounce={false}>
              <ImageLoader src={DonateImg4} alt="donate-imgs4" />
            </LazyLoad>
          </Col>
        </Row>
        <div className="aug2021-donate-quote">
          <img
            src={OpenQuotes}
            alt="open-quotes"
            className="aug2021-open-quotes"
          />
          <span className="aug2021-donate-quote-span">Giving is Receiving</span>
          <img
            src={ClosedQuotes}
            alt="closed-quotes"
            className="aug2021-closed-quotes"
          />
        </div>
        <div className="aug2021-donate-para-text">
          <b>Youth Ubaal Foundation</b> is a small organisation that works for
          the betterment of society by raising social awareness amongst the
          youth. They have actively been working towards providing disaster
          relief during the pandemic and also opened mini kitchens to provide
          two time healthy meals to the children residing in the slums of Delhi.
          We have joined hands with Youth Ubaal in an attempt to raise awareness
          about this beautiful cause. Let us do our part to contribute and make
          sure no one sleeps hungry during this challenging time.
        </div>
        <div className="aug2021-donation-btn">
          <div className="aug2021-donate-btn btn">
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
