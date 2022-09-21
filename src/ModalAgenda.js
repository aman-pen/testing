/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./css/Modal.scss";
// import speaker1 from "./images/speakers/Speaker1.png";
import Speakers from "./content/SpeakersData.json";
import { ApiDemoSpeaker } from "./services/Api";

const ModalAgenda = ({ modal, toggle, data }) => {
  const [speakerData, setSpeakerData] = useState();
  useEffect(() => {
    ApiDemoSpeaker().then((data) => {
      console.log("speaker api called");
      setSpeakerData(data);
    });
  }, []);

  const closeBtn = <button className="oct2022-close" onClick={toggle}></button>;
  return (
    <div>
      <Modal className="oct2022-agenda-dialog" isOpen={modal} toggle={toggle}>
        {console.log("data", data)}
        <div className="oct2022-modalHeader">
          <ModalHeader toggle={toggle} close={closeBtn}>
            {new Date(data.startsAt).toLocaleTimeString().split(":")[0] +
              ":" +
              new Date(data.startsAt).toLocaleTimeString().split(":")[1] +
              " " +
              new Date(data.startsAt)
                .toLocaleTimeString()
                .split(":")[2]
                .split(" ")[1]}{" "}
            -{" "}
            {new Date(data.endsAt).toLocaleTimeString().split(":")[0] +
              ":" +
              new Date(data.endsAt).toLocaleTimeString().split(":")[1] +
              " " +
              new Date(data.startsAt)
                .toLocaleTimeString()
                .split(":")[2]
                .split(" ")[1]}
          </ModalHeader>
        </div>
        <ModalBody>
          <div className="oct2022-session-Title pb-5">
            <span>{data.title}</span>
          </div>
          <div className="oct2022-session-introtext">
            <span>{data.description}</span>
          </div>
          <div className="oct2022-divider"></div>
          <h2 className="text-center py-4">Speakers</h2>
          {data.speakers.map((spkr) => {
            return (
              <div className="oct2022-speaker">
                <img
                  src={
                    speakerData &&
                    speakerData.filter((s) => s.id === spkr.id)[0]
                      .profilePicture
                  }
                  alt="Session Speaker"
                  width="50px"
                  height="50px"
                  className="oct2022-agenda-speaker-img"
                />

                <span className="oct2022-agenda-speaker-name">
                  {speakerData &&
                    speakerData.filter((s) => s.id === spkr.id)[0].fullName}
                </span>
              </div>
            );
          })}
          {/* <div className="oct2022-speaker-array row">
            {data.speaker1Id != null ? (
              <div className="col">
                <img
                  src={`${
                    Speakers.filter((s) => s.speakerId === data.speaker1Id)[0]
                      .speakerImage
                  }`}
                  className="oct2022-speaker-img mb-3"
                  alt="speaker"
                />
                <p className="oct2022-speaker-name">
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
                  className="oct2022-speaker-img mb-3"
                  alt="speaker"
                />
                <p className="oct2022-speaker-name">
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
                  className="oct2022-speaker-img mb-3"
                  alt="speaker"
                />
                <p className="oct2022-speaker-name">
                  {
                    Speakers.filter((s) => s.speakerId === data.speaker3Id)[0]
                      .speakerName
                  }
                </p>
              </div>
            ) : null}
          </div> */}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalAgenda;
