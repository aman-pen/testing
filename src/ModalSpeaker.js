import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Modal.scss";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import twitterlogo from "./images/website/twitterblue.png";
import Sessions from "./content/Sessions.json";

const ModalSpeaker = ({ modal, toggle, data }) => {
  const closeBtn = <button className="close" onClick={toggle}></button>;
  const CurrentSessions = Sessions.filter(
    (s) =>
      s.speaker1Id == data.speakerId ||
      s.speaker2Id == data.speakerId ||
      s.speaker3Id == data.speakerId
  );
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {data.speakerName}
          {/* <button type="button" className="close-icon"></button> */}
        </ModalHeader>
        <ModalBody className="nopadding">
          <div className="p-5 text-center">
            <img
              src={`${data.speakerImage}`}
              alt={data.speakerAltText}
              className="modal-image"
            />
          </div>
          <div className="bg-grey speaker-details">
            <h4 className="mb-4">BIO</h4>
            <p className="speaker-information">{data.speakerInformation}</p>

            {CurrentSessions.length > 0
              ? CurrentSessions.map((sdata) => {
                  return (
                    <div className="speaker-session-details">
                      <div className="divider"></div>
                      <div className="row">
                        <div className="modal-track-num col-4">
                          Track {sdata.trackId}
                        </div>
                        <div className="col-8 speaker-session-time"><span>{sdata.sessionTime}</span></div>
                      </div>
                      <div className="speaker-session-title">
                        {sdata.sessionTitle}
                      </div>
                    </div>
                  );
                })
              : null}

            <div className="divider"></div>
            <div className="image-array">
              <a href={data.speakerLinkedIn} target="_blank">
                <img src={LinkedInlogo} alt="LinkedIn logo" className="mr-4" />
              </a>
              <a href={data.speakerTwitter} target="_blank">
                <img src={twitterlogo} alt="Twitter logo" />
              </a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalSpeaker;
