import React, { useState } from "react";
import "./Speaker.scss";
import SpeakersData from "./content/SpeakersData.json";
import ModalSpeaker from "./ModalSpeaker";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft_logo.png";
import Twitterlogo from "./images/website/twitterblue.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";

export const Speaker = () => {
  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };
  return (
    <>
      <div className="speakers" id="speakers">
        <h1 className="speaker-heading text-center">Speakers</h1>
        <div className="row justify-content-center">
          {SpeakersData.map((data) => {
            return (
              <>
                {data.keynoteSpeaker === "false" && (
                  <div
                    className="col-xs-12 col-md-6 speaker-card-wrapper col-xl-4"
                    key={data.speakerId}
                  >
                    <Card className="speaker-card shadow nopadding">
                      <div className="speaker-image">
                        <div id="cube">
                          <div class="square-holder">
                            <div class="square" id="square"></div>
                          </div>
                        </div>
                        <LazyLoad height={400} debounce={false}>
                          <ImageLoader
                            onClick={() => toggle(data)}
                            src={`${data.speakerImage}`}
                            alt={data.speakerAltText}
                          />
                        </LazyLoad>
                      </div>

                      <div
                        className="card-title-wrapper"
                        onClick={() => toggle(data)}
                      >
                        <CardTitle tag="h3" className="text-center ">
                          {data.speakerName}
                        </CardTitle>
                      </div>
                      <CardBody>
                        <div className="cursor-click">
                          <CardSubtitle
                            onClick={() => toggle(data)}
                            tag="p"
                            className="mb-2 text-start nopadding col"
                          >
                            {data.speakerTitle}
                          </CardSubtitle>
                          <CardText onClick={() => toggle(data)}>
                            {data.speakerSubTitle}
                          </CardText>
                        </div>

                        <div className="social-media-array">
                          {data.MVPstatus === "true" ? (
                            <div>
                              <img
                                src={MVPlogo}
                                alt="MVP"
                                className="card-socialmedia nopadding align-self-start cursor-none"
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
                                className="card-socialmedia nopadding align-self-start"
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
                                className="card-socialmedia nopadding align-self-start"
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
                                className="card-socialmedia nopadding align-self-start"
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
        </div>
      </div>
      {modal == true ? (
        <ModalSpeaker data={clickedData} modal={modal} toggle={toggle} />
      ) : (
        <></>
      )}
    </>
  );
};
