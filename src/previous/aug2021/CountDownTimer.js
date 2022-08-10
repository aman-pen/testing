import React from "react";
import CountDown from "reactjs-countdown";
import "./css/CountDownTimer.scss";
import { Container, Row, Col } from "reactstrap";
import {
  isDesktop,
  isMobile,
  isMobileOnly,
  isTablet,
} from "react-device-detect";

export const CountDownTimer = () => {
  return (
    <div className="aug2021-CountDownTimer">
      {!isMobileOnly ? (
        <Container fluid={true} className="aug2021-countDown">
          <Row className="aug2021-countDown-row">
            <Col>
              <Row>
                <Col>
                  <span className="aug2021-timer-date"> 28th August 2021 </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="aug2021-timer-title">
                    {" "}
                    India Cloud Security Summit{" "}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col>
              <CountDown end="August 28, 2021  09:00" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid={true} className="aug2021-countDown-mobile">
          <Row className="aug2021-timer-data-row">
            <Col>
              <span className="aug2021-timer-date-mobile"> 28th August 2021 </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="aug2021-timer-title-mobile">
                {" "}
                India Cloud Security Summit{" "}
              </span>
            </Col>
          </Row>
          <Row className="aug2021-timer-mobile">
            <Col>
              <CountDown end="August 28, 2021  09:00" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
