import React, { useState } from "react";
import "./css/Speaker.scss";
import SpeakersData from "./content/SpeakersData.json";
import ModalKeynote from "./ModalKeynote";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Twitterlogo from "./images/website/twitterblue.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft_logo.png";
import { ComingSoon } from "./ComingSoon";

export const KeyNoteSpeaker = () => {
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
        <div className="mt-4 mb-4">
          <ComingSoon />
        </div>
        {/* <div className="row justify-content-center">
          {SpeakersData.map((data) => {
            return (
              <>
                {data.keynoteSpeaker === "true" && (
                  <div
                    className="p-4 col-xs-12 col-md-6 col-xl-4 "
                    key={data.speakerId}
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
                            src={`${data.speakerImage}`}
                            alt={data.speakerAltText}
                          />
                        </LazyLoad>
                      </div>
                      <CardBody>
                        <div className="row w-100 flex-nowrap oct2022-cursor-click">
                          <CardTitle
                            tag="h3"
                            className="nopadding col"
                            onClick={() => toggle(data)}
                          >
                            {data.speakerName}
                          </CardTitle>
                        </div>
                        <CardSubtitle
                          tag="p"
                          className="mb-2 text-muted oct2022-cursor-click"
                          onClick={() => toggle(data)}
                        >
                          {data.speakerTitle}, {data.speakerSubTitle}
                        </CardSubtitle>
                        <div className="oct2022-social-media-array">
                          {data.MVPstatus === "true" ? (
                            <div>
                              <img
                                src={MVPlogo}
                                alt="MVP"
                                className="oct2022-card-linkedIn nopadding align-self-start oct2022-cursor-none"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data.MicrosoftEmployee === "true" ? (
                            <div>
                              <img
                                src={Microsoftlogo}
                                alt="Microsoft Employee"
                                className="oct2022-card-linkedIn nopadding align-self-start"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data.speakerLinkedIn !== null ? (
                            <a
                              href={data.speakerLinkedIn}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={LinkedInlogo}
                                alt="LinkedIn logo"
                                className="oct2022-card-linkedIn nopadding align-self-start"
                              />
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.speakerTwitter !== null ? (
                            <a
                              href={data.speakerTwitter}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={Twitterlogo}
                                alt="Twitter logo"
                                className="oct2022-card-linkedIn nopadding align-self-start"
                              />
                            </a>
                          ) : (
                            <></>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )}
              </>
            );
          })}
        </div> */}
      </div>
      {modal === true ? (
        <ModalKeynote data={clickedData} modal={modal} toggle={toggle} />
      ) : (
        <></>
      )}
    </>
  );
};
