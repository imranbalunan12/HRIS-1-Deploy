import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  FormGroup,
  CustomInput,
  Button,


} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table for Upload Logs */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h2 className="mb-0">Upload Logs (CSV) </h2>
              </CardHeader>
              <Table className="align-items-center table-flush" style={{marginBottom: "50px"}}>
                <Row>
                  <Col xs="6" style={{display: "flex", marginTop: "30px"}}>
                        <form style={{marginLeft: "-50px"}}>
                              <div class="d-flex flex-row-reverse mx-6" >
        
                              {/* <input type="file" style={{display:'none'}} id="file" name="file"/>
                              <button type="button" class="btn btn-success" id="loadFileXml" onClick="document.getElementById('file').click();" >Upload Signature</button> */}
                              <FormGroup>
        
                              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload Signature"></CustomInput>
                              </FormGroup>
                              </div>
                        </form>
                        <Button className="btn btn-success" style={{height: "45px", marginLeft: "-30px"}}>
                          <span>Submit</span>
                        </Button>
                        </Col>
                        <Col xs="6">
                              <div style={{marginTop: "-50px"}}>
                                 <h2>Instructions: </h2>  
                                 <span>1. LOREM IPSUM</span><br/>
                                 <span>2. LOREM IPSUM</span><br/>
                                 <span>3. LOREM IPSUM</span>
                              </div>
                       </Col>
               
                </Row>
              </Table>
            </Card>
          </div>
        </Row>
           {/* Table for Philhealth Deductions */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h2 className="mb-0">PhilHealth Deductions</h2>
              </CardHeader>
              <Table className="align-items-center table-flush" style={{marginBottom: "50px"}}>
                <Row>
                  <Col xs="6" style={{display: "flex", marginTop: "30px"}}>
                        <form style={{marginLeft: "-50px"}}>
                              <div class="d-flex flex-row-reverse mx-6" >
        
                              {/* <input type="file" style={{display:'none'}} id="file" name="file"/>
                              <button type="button" class="btn btn-success" id="loadFileXml" onClick="document.getElementById('file').click();" >Upload Signature</button> */}
                              <FormGroup>
        
                              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload Signature"></CustomInput>
                              </FormGroup>
                              </div>
                        </form>
                        <Button className="btn btn-success" style={{height: "45px", marginLeft: "-30px"}}>
                          <span>Submit</span>
                        </Button>
                        </Col>
                        <Col xs="6">
                              <div style={{marginTop: "-50px"}}>
                                 <h2>Instructions: </h2>  
                                 <span>1. LOREM IPSUM</span><br/>
                                 <span>2. LOREM IPSUM</span><br/>
                                 <span>3. LOREM IPSUM</span>
                              </div>
                       </Col>
               
                </Row>
              </Table>
            </Card>
          </div>
        </Row>
           {/* Table for PagIBIG Deductions */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h2 className="mb-0">Pag-IBIG Deductions </h2>
              </CardHeader>
              <Table className="align-items-center table-flush" style={{marginBottom: "50px"}}>
                <Row>
                  <Col xs="6" style={{display: "flex", marginTop: "30px"}}>
                        <form style={{marginLeft: "-50px"}}>
                              <div class="d-flex flex-row-reverse mx-6" >
        
                              {/* <input type="file" style={{display:'none'}} id="file" name="file"/>
                              <button type="button" class="btn btn-success" id="loadFileXml" onClick="document.getElementById('file').click();" >Upload Signature</button> */}
                              <FormGroup>
        
                              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload Signature"></CustomInput>
                              </FormGroup>
                              </div>
                        </form>
                        <Button className="btn btn-success" style={{height: "45px", marginLeft: "-30px"}}>
                          <span>Submit</span>
                        </Button>
                        </Col>
                        <Col xs="6">
                              <div style={{marginTop: "-50px"}}>
                                 <h2>Instructions: </h2>  
                                 <span>1. LOREM IPSUM</span><br/>
                                 <span>2. LOREM IPSUM</span><br/>
                                 <span>3. LOREM IPSUM</span>
                              </div>
                       </Col>
               
                </Row>
              </Table>
            </Card>
          </div>
        </Row>
           {/* Table for SSS Deductions */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h2 className="mb-0">SSS Deductions</h2>
              </CardHeader>
              <Table className="align-items-center table-flush" style={{marginBottom: "50px"}}>
                <Row>
                  <Col xs="6" style={{display: "flex", marginTop: "30px"}}>
                        <form style={{marginLeft: "-50px"}}>
                              <div class="d-flex flex-row-reverse mx-6" >
        
                              {/* <input type="file" style={{display:'none'}} id="file" name="file"/>
                              <button type="button" class="btn btn-success" id="loadFileXml" onClick="document.getElementById('file').click();" >Upload Signature</button> */}
                              <FormGroup>
        
                              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload Signature"></CustomInput>
                              </FormGroup>
                              </div>
                        </form>
                        <Button className="btn btn-success" style={{height: "45px", marginLeft: "-30px"}}>
                          <span>Submit</span>
                        </Button>
                        </Col>
                        <Col xs="6">
                              <div style={{marginTop: "-50px"}}>
                                 <h2>Instructions: </h2>  
                                 <span>1. LOREM IPSUM</span><br/>
                                 <span>2. LOREM IPSUM</span><br/>
                                 <span>3. LOREM IPSUM</span>
                              </div>
                       </Col>
               
                </Row>
              </Table>
            </Card>
          </div>
        </Row>
           {/* Table for BIR Deductions */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h2 className="mb-0">BIR Deductions</h2>
              </CardHeader>
              <Table className="align-items-center table-flush" style={{marginBottom: "50px"}}>
                <Row>
                  <Col xs="6" style={{display: "flex", marginTop: "30px"}}>
                        <form style={{marginLeft: "-50px"}}>
                              <div class="d-flex flex-row-reverse mx-6" >
        
                              {/* <input type="file" style={{display:'none'}} id="file" name="file"/>
                              <button type="button" class="btn btn-success" id="loadFileXml" onClick="document.getElementById('file').click();" >Upload Signature</button> */}
                              <FormGroup>
        
                              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload Signature"></CustomInput>
                              </FormGroup>
                              </div>
                        </form>
                        <Button className="btn btn-success" style={{height: "45px", marginLeft: "-30px"}}>
                          <span>Submit</span>
                        </Button>
                        </Col>
                        <Col xs="6">
                              <div style={{marginTop: "-50px"}}>
                                 <h2>Instructions: </h2>  
                                 <span>1. LOREM IPSUM</span><br/>
                                 <span>2. LOREM IPSUM</span><br/>
                                 <span>3. LOREM IPSUM</span>
                              </div>
                       </Col>
               
                </Row>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
