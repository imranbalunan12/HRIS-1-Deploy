import React from "react";
import { Link } from "react-router-dom";
// reactstrap components

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-info" expand="md" >
        <Container style={{justifyContent: "center"}}>
          <NavbarBrand >
           <img
              alt="Minedomain Inc. Logo"
              src={
                require("../../assets/img/brand/comp.png").default
              }
              style={{minWidth: "100%", height: "200px"}}
            
            />
          </NavbarBrand>
          {/* <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/brand/argon-react.png")
                          .default
                      }
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              
            </Nav>
          </UncontrolledCollapse> */}
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
