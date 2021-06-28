
/*eslint-disable*/
import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
 
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import logo from "../../assets/img/brand/comp.png";

var ps;

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  localStorage.removeItem('emp_id')
  localStorage.removeItem('depId')
  localStorage.removeItem('JobId')
  localStorage.removeItem('exam_id')
  
}

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };



  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="lg"
      id="sidenav-main"
      
    >
      <Container fluid style={{ marginTop: "-25px"}}>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          style={{marginTop: "40px"}}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
          <NavbarBrand className="pt-0">
            <img  src={logo}
              className="navbar-brand-img"
              style={{Width: "100%", minHeight: "160px", marginBottom: "-50px"}} ></img>
          </NavbarBrand>
        
        {/* User */}
        <Nav className="align-items-center d-md-none"  >
          {/* <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          {/* <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/theme/team-1-800x800.jpg")
                        .default
                    }
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen} >
          {/* Collapse header */}
          <div className="navbar-collapse-header">
            <Row>
            
                <Col className="collapse-brand" xs="6" >
                  
                
                </Col>
          
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                  
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
         
          {/* Navigation */}
           <Nav navbar  >
           
            <NavLink activeClassName="active" disabled  style={{marginLeft: "-3px"}}><i className="ni ni-badge text-blue"></i><Link to="/admin/icons" style={{color:"black"}}>Employee Management</Link></NavLink>
            <NavLink activeClassName="active" ><Link to="/admin/EmployeeRegistration" style={{color:"black", marginLeft: "42px", fontWeight: "lighter"}}>Employee Registration</Link></NavLink>
            <NavLink activeClassName="active" ><Link to="/admin/EmployeeList" style={{color:"black", marginLeft: "42px", fontWeight: "lighter"}}>Employee List</Link></NavLink>
            <NavLink activeClassName="active" style={{marginLeft: "-3px"}}><i className="ni ni-archive-2 text-blue"></i><Link to="/admin/LeavesManagement" style={{color:"black"}}>Leaves Management</Link></NavLink>
            <NavLink activeClassName="active" style={{marginLeft: "-3px"}}><i className="ni ni-notification-70 text-blue"></i><Link to="/admin/Announcements&Memos" style={{color:"black"}}>Announcements</Link></NavLink>
            <NavLink activeClassName="active" style={{marginLeft: "-3px"}}><i className="ni ni-email-83 text-blue"></i><Link to="/admin/Messages" style={{color:"black"}}>Messages</Link></NavLink>
            <NavLink activeClassName="active" style={{marginLeft: "-3px"}}><i className="ni ni-collection text-blue"></i><Link to="/admin/RecordsManagement" style={{color:"black"}}>Records Management</Link></NavLink>
            {/* <NavLink activeClassName="active" style={{marginLeft: "-3px"}}><i className="text-blue"><FaClipboardList/></i><Link to="/admin/maps" style={{color:"black"}}>Employee Engagement</Link></NavLink> */}
            {/* <NavLink activeClassName="active" disabled style={{marginLeft: "-3px"}}><i className="ni ni-money-coins text-blue"></i><Link to="/admin/Tables" style={{color:"black" }}>Payroll Management</Link></NavLink>
            <NavLink activeClassName="active" ><Link to="/admin/UploadFiles" style={{color:"black", marginLeft: "42px", fontWeight: "lighter"}}>Upload Files</Link></NavLink>
            <NavLink activeClassName="active" ><Link to="/admin/GovernmentDeduction" style={{color:"black", marginLeft: "42px", fontWeight: "lighter"}}>Government Deductions</Link></NavLink>
            <NavLink activeClassName="active" ><Link to="/admin/AttendanceArchive" style={{color:"black", marginLeft: "42px", fontWeight: "lighter"}}>Attendance Logs Archives</Link></NavLink> */}
            <NavLink activeClassName="active" style={{marginLeft: "-3px"}}><i className="ni ni-curved-next text-blue"></i><Link to="/auth/login" style={{color:"black" }}
            onClick={handleLogout}
            >Logout</Link></NavLink>
            
          </Nav>
         
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
