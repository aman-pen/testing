/*
 * @file: MobileSidebar.js
 * @description: Mobile specific react hamburger menu click and close
 * @date: 14.08.2020
 * @author: Surbhi
 */
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Row, Col } from "reactstrap";

export const HamburgerMenu = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const handleClick = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Row className="ffffffffffffffffffffffffffffff">
        <Col xs="6">
          <Menu isOpen={isOpen} onStateChange={handleClick}>
            <Col
              lg={2}
              md={2}
              sm={12}
              xs={12}
              className="text-center leftBar NoPad open"
            >
              <nav id="sidebar">dfghjkl</nav>
            </Col>
          </Menu>
        </Col>
      </Row>
    </React.Fragment>
  );
};
