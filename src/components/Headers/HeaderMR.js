import React from "react";

// reactstrap components
import { Container, Row} from "reactstrap";
import { Link } from "react-router-dom";

const HeaderMR = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>

          <Row >
          <Link id="dwnlnk" to="/admin/EmployeeList" style={{color:"white", fontSize:15,  marginLeft:15}}>EMPLOYEE LIST {'>'} 2021-ABC  </Link> 
          <div style={{color:"white", fontSize:25, marginTop:"-6px", fontWeight:'bold', marginLeft:10}}>{'>'} MANAGE RECORDS</div>
          </Row>

          <div className="header-body">
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderMR;
