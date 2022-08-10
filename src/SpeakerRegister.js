import React from "react";
import eventdata from "./content/EventData.json";
export const SpeakerRegister = () => {
  return (
    <div className="oct2022-about bg-white">
      <h1 className="oct2022-about-heading text-uppercase">
        Call for Speakers
      </h1>

      <div className="oct2022-about-para-text">
        Register today for the chance to speak at the event. India Cloud
        Security Summit 2022 is calling for speakers. If you are a Microsoft
        Security Expert and have an interesting topic to share Register today.
      </div>
      <div className="oct2022-registration-text">
        <a
          className="oct2022-registration-button"
          href={eventdata.speakerRegistrationLink}
          target="_blank"
          rel="noreferrer"
        >
          <p>Call for Speakers !</p>
        </a>
      </div>
    </div>
  );
};
