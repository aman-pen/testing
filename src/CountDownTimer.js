import React from "react";
import CountDown from "reactjs-countdown";
import "./css/CountDownTimer.scss";
import { Container, Row, Col } from "reactstrap";
import {
  // isDesktop,
  // isMobile,
  isMobileOnly,
  // isTablet,
} from "react-device-detect";

export const CountDownTimer = () => {
  return (
    <div className="oct2022-CountDownTimer">
      {!isMobileOnly ? (
        <Container fluid={true} className="oct2022-countDown">
          <Row className="oct2022-countDown-row">
            <Col>
              <Row>
                <Col>
                  <span className="oct2022-timer-date">29th October 2022</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="oct2022-timer-title">
                    India Cloud Security Summit
                  </span>
                </Col>
              </Row>
            </Col>
            <Col>
              <CountDown end="October 29, 2022  09:00" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid={true} className="oct2022-countDown-mobile">
          <Row className="oct2022-timer-data-row">
            <Col>
              <span className="oct2022-timer-date-mobile">
                {" "}
                29th October 2022{" "}
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="oct2022-timer-title-mobile">
                {" "}
                India Cloud Security Summit{" "}
              </span>
            </Col>
          </Row>
          <Row className="oct2022-timer-mobile">
            <Col>
              {/* Sets the coundown to mentioned date */}
              <CountDown end="October 29, 2022  09:00" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
