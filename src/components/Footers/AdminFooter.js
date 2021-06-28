import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer" fluid >
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="http://www.youtube.com"
            >
              Minedomain Inc.
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
