/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./css/Modal.scss";
// import speaker1 from "./images/speakers/Speaker1.png";
import Speakers from "./content/SpeakersData.json";

const ModalAgenda = ({ modal, toggle, data }) => {
  const closeBtn = <button className="aug2021-close" onClick={toggle}></button>;
  return (
    <div>
      <Modal className="aug2021-agenda-dialog" isOpen={modal} toggle={toggle}>
        <div className="aug2021-modalHeader">
          <ModalHeader toggle={toggle} close={closeBtn}>
            {data.sessionTime}
          </ModalHeader>
        </div>
        <ModalBody>
          <div className="aug2021-session-Title pb-5">
            <span>{data.sessionTitle}</span>
          </div>
          <div className="aug2021-session-introtext">
            <span>{data.sessionDescription}</span>
          </div>
          <div className="aug2021-divider"></div>
          <h2 className="text-center py-4">Speakers</h2>
          <div className="aug2021-speaker-array row">
            {data.speaker1Id != null ? (
              <div className="col">
                <img
                  src={`${
                    Speakers.filter((s) => s.speakerId === data.speaker1Id)[0]
                      .speakerImage
                  }`}
                  className="aug2021-speaker-img mb-3"
                  alt="speaker"
                />
                <p className="aug2021-speaker-name">
                  {
                    Speakers.filter((s) => s.speakerId === data.speaker1Id)[0]
                      .speakerName
                  }
                </p>
              </div>
            ) : null}

            {data.speaker2Id != null ? (
              <div className="col">
                <img
                  src={`${
                    Speakers.filter((s) => s.speakerId === data.speaker2Id)[0]
                      .speakerImage
                  }`}
                  className="aug2021-speaker-img mb-3"
                  alt="speaker"
                />
                <p className="aug2021-speaker-name">
                  {
                    Speakers.filter((s) => s.speakerId === data.speaker2Id)[0]
                      .speakerName
                  }
                </p>
              </div>
            ) : null}

            {data.speaker3Id != null ? (
              <div className="col">
                <img
                  src={`${
                    Speakers.filter((s) => s.speakerId === data.speaker3Id)[0]
                      .speakerImage
                  }`}
                  className="aug2021-speaker-img mb-3"
                  alt="speaker"
                />
                <p className="aug2021-speaker-name">
                  {
                    Speakers.filter((s) => s.speakerId === data.speaker3Id)[0]
                      .speakerName
                  }
                </p>
              </div>
            ) : null}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalAgenda;
