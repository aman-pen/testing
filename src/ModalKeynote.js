import React from "react";
import {
  Modal,
  ModalHeader,
  //  ModalBody
} from "reactstrap";
import "./css/Modal.scss";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import twitterlogo from "./images/website/twitterblue.png";

const ModalKeynote = ({ modal, toggle, data }) => {
  const closeBtn = <button className="oct2022-close" onClick={toggle}></button>;
  // console.log("modal data", data);
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
          <div className="oct2022-bg-grey bg-grey p-5">
            <h4 className="mb-4">BIO</h4>
            <p className="oct2022-speaker-information">
              {data.speakerInformation}
            </p>

            <div className="oct2022-divider"></div>
            <div className="oct2022-image-array">
              {data.speakerLinkedIn !== null ? (
                <a href={data.speakerLinkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={LinkedInlogo}
                    alt="LinkedIn logo"
                    className="mr-4 mx-4"
                  />
                </a>
              ) : (
                <></>
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

export default ModalKeynote;
