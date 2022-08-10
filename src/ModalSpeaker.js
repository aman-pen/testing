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
  const closeBtn = <button className="oct2022-close" onClick={toggle}></button>;
  const CurrentSessions = Sessions.filter(
    (s) =>
      s.speaker1Id === data.speakerId ||
      s.speaker2Id === data.speakerId ||
      s.speaker3Id === data.speakerId
  );
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="oct2022-modalHeader">
          <ModalHeader toggle={toggle} close={closeBtn}>
            {data.speakerName}
            {/* <button type="button" className="oct2022-close-icon"></button> */}
          </ModalHeader>
        </div>
        <div className="nopadding">
          <div className="p-5 text-center">
            <img
              src={`${data.speakerImage}`}
              alt={data.speakerAltText}
              className="oct2022-modal-image modal-image"
            />
          </div>
          <div className="oct2022-bg-grey bg-grey oct2022-speaker-details speaker-details">
            <h4 className="mb-4">BIO</h4>
            <p className="oct2022-speaker-information speaker-information">
              {data.speakerInformation}
            </p>

            {CurrentSessions.length > 0
              ? CurrentSessions.map((sdata) => {
                  return (
                    <div className="oct2022-speaker-session-details">
                      <div className="oct2022-divider"></div>
                      <div className="oct2022-row row">
                        <div className="oct2022-modal-track-num col-4">
                          Track {sdata.trackId}
                        </div>
                        <div className="col-8 oct2022-speaker-session-time">
                          <span>{sdata.sessionTime}</span>
                        </div>
                      </div>
                      <div className="oct2022-speaker-session-title">
                        {sdata.sessionTitle}
                      </div>
                    </div>
                  );
                })
              : null}

            <div className="oct2022-divider"></div>
            <div className="oct2022-image-array">
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
