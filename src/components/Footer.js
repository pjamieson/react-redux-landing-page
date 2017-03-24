import React, { Component } from 'react';
import { Col, Container, Row, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <Container>
          <Row>
            <Col xs="12">
              <a href="#now" className="top-link">top</a>
            </Col>
          </Row>
          <Row>
            <Col xs="3" md="2">
              <Nav className="footer-nav">
                <NavItem>
                  <NavLink href="https://github.com/pjamieson/react-bootstrap4-resume" target="_blank">
                    <FontAwesome name="github" className="social-icon" size="3x" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/patrick-react-jamieson/" target="_blank">
                    <FontAwesome name="linkedin" className="social-icon" size="3x" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs="9" md="4">
              <Row>
                <div className="wrapper">
                  <h6>Contact</h6>
                  <div className="left">
                    <p className="name">patrick@</p>
                  </div>
                  <div className="right">
                    <p className="domain">patrickjamieson.com</p>
                    <p className="domain">cleancodecorp.com</p>
                    <p className="domain">ibookx.com</p>
                    <p className="domain">iartx.com</p>
                  </div>
                </div>
              </Row>
              <Row>
                <p className="principals-only"><em>Principals only please</em></p>
              </Row>
            </Col>
            <Col xs="12" md="5">
              <h6>Disclaimer</h6>
              <p className="disclaimer-text">
                I am not a web designer, even though you may have seen me playing
                one on this site. It seems to me that a disclaimer should disclaim
                more than that, so here&rsquo;s some more fine print for your
                reading pleasure: Ratione provident soluta veritatis beatae eaque
                dolorem reiciendis inventore non earum nemo, voluptate itaque
                consequatur quidem alias pariatur ducimus laboriosam reprehenderit.
                Totam.
            </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <p>Created by Patrick Jamieson</p>
              <p className="copyright">Copyright 2017. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
