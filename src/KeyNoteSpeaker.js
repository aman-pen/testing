import React, { useEffect, useState } from "react";
import "./css/Speaker.scss";
// import SpeakersData from "./content/SpeakersData.json";
import ModalKeynote from "./ModalKeynote";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Twitterlogo from "./images/website/twitterblue.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft_logo.png";
import { ComingSoon } from "./ComingSoon";
import { ApiSpeaker } from "./services/Api";

export const KeyNoteSpeaker = () => {
  const [KeyNoteSpeaker, setKeyNoteSpeaker] = useState([]);

  useEffect(() => {
    let mounted = true;
    ApiSpeaker().then((data) => {
      if (mounted) {
        setKeyNoteSpeaker(data);
      }
    });
    return () => (mounted = false);
  }, []);

  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };
  return (
    <>
      <div className="oct2022-keynote">
        <h1 className="oct2022-keynote-heading text-center">
          KeyNote Speakers
        </h1>
        {/* <div className="mt-4 mb-4">
          <ComingSoon />
        </div> */}
        <div className="row justify-content-center ">
          {KeyNoteSpeaker.filter((data) => data.isTopSpeaker).map((data) => {
            return (
              <>
                <div
                  className="p-4 col-xs-12 col-md-6 col-xl-4 oct2022-keynote-speaker-card"
                  key={data.id}
                >
                  <Card className="oct2022-keynote-card shadow nopadding ">
                    <div className="oct2022-keynote-image">
                      <div id="oct2022-cube">
                        <div className="oct2022-square-holder">
                          <div className="oct2022-square" id="square"></div>
                        </div>
                      </div>
                      <LazyLoad
                        height={400}
                        debounce={false}
                        className="oct2022-cursor-click"
                      >
                        <ImageLoader
                          onClick={() => toggle(data)}
                          src={`${data.profilePicture}`}
                          alt={data.fullName}
                        />
                      </LazyLoad>
                    </div>
                    <CardBody>
                      <div className="row w-100 flex-nowrap oct2022-cursor-click">
                        <CardTitle
                          tag="h3"
                          className="p-2 col"
                          onClick={() => toggle(data)}
                        >
                          {data.fullName}
                        </CardTitle>
                      </div>
                      <CardSubtitle
                        tag="p"
                        className="mb-2 pl-2 pr-2 text-muted oct2022-cursor-click"
                        onClick={() => toggle(data)}
                      >
                        {data.questionAnswers[1].answer}
                        {/* {data.speakerTitle}, {data.speakerSubTitle}   From Previous Data */}
                      </CardSubtitle>
                      <CardText
                        className="oct2022-card-text font-weight-bold text-start nopadding pl-2"
                        onClick={() => toggle(data)}
                      >
                        {data.questionAnswers[0].answer}

                        {/* Were company names in previous iteration of the website */}
                      </CardText>

                      {/* Will have to add it Manually or will se after adding column in sessionize */}
                      <div className="d-flex">
                        {data.categories.name ===
                          "Are you a Microsoft MVP?" && (
                          <div>
                            <img
                              src={MVPlogo}
                              alt="MVP"
                              className="oct2022-card-socialmedia nopadding align-self-start oct2022-cursor-none pr-2"
                            />
                          </div>
                        )}
                        {data.categories[0]?.categoryItems[0]?.name ===
                          "Yes" && (
                          <div>
                            <img
                              src={Microsoftlogo}
                              alt="Microsoft Employee"
                              className="oct2022-card-socialmedia nopadding align-self-start pr-2"
                            />
                          </div>
                        )}
                        {/* --------------------------- */}
                        <div className="d-flex flex-row-reverse">
                          {data.links
                            .filter(
                              (data) =>
                                data.title === "LinkedIn" ||
                                data.title === "Twitter"
                            )
                            .map((link) => {
                              return (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={
                                      link.title === "LinkedIn"
                                        ? LinkedInlogo
                                        : Twitterlogo
                                    }
                                    alt={
                                      link.title === "LinkedIn"
                                        ? "LinkedIn logo"
                                        : "Twitter logo"
                                    }
                                    className="oct2022-card-socialmedia ml-2 pr-2 align-self-start"
                                  />
                                </a>
                              );
                            })}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {modal && (
        <ModalKeynote data={clickedData} modal={modal} toggle={toggle} />
      )}
    </>
  );
};
