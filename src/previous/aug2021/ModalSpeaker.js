import React from "react";
import {
  Modal,
  ModalHeader,
  //  ModalBody
} from "reactstrap";
import "./css/Modal.scss";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import twitterlogo from "./images/website/twitterblue.png";
import Sessions from "./content/Sessions.json";

const ModalSpeaker = ({ modal, toggle, data }) => {
  const closeBtn = <button className="aug2021-close" onClick={toggle}></button>;
  const CurrentSessions = Sessions.filter(
    (s) =>
      s.speaker1Id === data.speakerId ||
      s.speaker2Id === data.speakerId ||
      s.speaker3Id === data.speakerId
  );
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="aug2021-modalHeader">
          <ModalHeader toggle={toggle} close={closeBtn}>
            {data.speakerName}
            {/* <button type="button" className="aug2021-close-icon"></button> */}
          </ModalHeader>
        </div>
        <div className="nopadding">
          <div className="p-5 text-center">
            <img
              src={`${data.speakerImage}`}
              alt={data.speakerAltText}
              className="aug2021-modal-image"
            />
          </div>
          <div className="aug2021-bg-grey bg-grey aug2021-speaker-details">
            <h4 className="mb-4">BIO</h4>
            <p className="aug2021-speaker-information">
              {data.speakerInformation}
            </p>

            {CurrentSessions.length > 0
              ? CurrentSessions.map((sdata) => {
                  return (
                    <div className="aug2021-speaker-session-details">
                      <div className="aug2021-divider"></div>
                      <div className="aug2021-row row">
                        <div className="aug2021-modal-track-num col-4">
                          Track {sdata.trackId}
                        </div>
                        <div className="col-8 aug2021-speaker-session-time">
                          <span>{sdata.sessionTime}</span>
                        </div>
                      </div>
                      <div className="aug2021-speaker-session-title">
                        {sdata.sessionTitle}
                      </div>
                    </div>
                  );
                })
              : null}

            <div className="aug2021-divider"></div>
            <div className="aug2021-image-array">
              {data.speakerLinkedIn !== null && (
                <a href={data.speakerLinkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={LinkedInlogo}
                    alt="LinkedIn logo"
                    className="mr-4 mx-4"
                  />
                </a>
              )}
              {data.speakerTwitter !== null ? (
                <a href={data.speakerTwitter} target="_blank" rel="noreferrer">
                  <img src={twitterlogo} alt="Twitter logo" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSpeaker;
