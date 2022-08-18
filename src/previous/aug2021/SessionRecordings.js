import React from "react";
import "./css/SessionRecordings.scss";
export const SessionRecordings = () => {
  return (
    <div className="d-flex flex-column align-items-center aug2021-session-recording">
      <div className="mb-4" id="sessions-recordings">
        <h1 className="aug2021-session-recording-heading mb-4">
          Session Recordings
        </h1>
      </div>
      <div className="aug2021-youtube-wrapper mt-4 mb-4">
        <div className="aug2021-youtube-container">
          <iframe
            className="aug2021-youtube-iframe"
            src="https://www.youtube.com/embed/3M21ARqKS6I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
