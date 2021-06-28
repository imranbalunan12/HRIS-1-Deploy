import React, { useState } from "react";

// reactstrap components
import {
  Card,
  Label,
  CardHeader,
  CardBody,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  CustomInput,
 
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import DropZone from "components/Dropzone/dropzone.js";
import HeaderMF from "components/Headers/HeaderMF";



const Icons = () => {
  
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    const [modalIsOpen, setModalisOpen] = useState(false);

    const open = () => setModalisOpen(!modalIsOpen);
   
  return (
    <>
      <HeaderMF />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent" style={{display:"flex"}}>
                  <Col >
                    <Button color="success" onClick={toggle} style={{marginLeft: "-14px"}} >Create Folder
                         
                    </Button>
                      <Modal isOpen={modal} toggle={toggle} centered >
                        <ModalHeader style={{borderBottom: "2px solid #E5ECF3", display: "flex"}}><h2>Create New Folder
                                <button  type="button" onClick={toggle} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-300px"}}>
                                    <span className=" flex-row-reverse" aria-hidden="true" style={{fontWeight: "bolder", color: "black",  }}>X</span>
                                </button>    
                                </h2>                   
                          </ModalHeader>
                        <ModalBody>
                          <FormGroup row style={{marginTop: "20px"}}>
                            <Label for="exampleEmail" xs={4}>Folder Name :</Label>
                            <Col xs={8} style={{marginLeft: "-40px"}}>
                              <Input type="text" name="folder" id="folderName" placeholder="Folder Name" />
                            </Col>
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                          <Button color="success" onClick={toggle}>Create</Button>{' '}
                          
                        </ModalFooter>
                      </Modal>
                  
                   
                    <Form className="navbar-search form-inline d-none d-md-flex ml-md-auto" style={{float:"right", color: "lightblue"}}>
                    <FormGroup className="mb-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" style={{color: "lightblue"}} />
                          </InputGroupText>
                        </InputGroupAddon >
                        <Input placeholder="Search" type="text" style={{color: "lightblue"}}/>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </Col>
              </CardHeader>
              
              <CardBody >
              <span style={{textDecorationColor: "blue"}}>{new Date().getFullYear()}</span>
                <Row className="icon-examples">
                  <Col >    
                  <Button onClick={open} style={{width: "225px", height: "200px"}} >
                          <i  className="ni ni-fat-add" style={{fontSize: "150px", color:"#339EFF"}}></i>  
                      </Button>
                      <Modal size="md" isOpen={modalIsOpen} toggle={open} centered>
                        <ModalHeader style={{borderBottom: "2px solid #E5ECF3", display: "flex"}}>
                          <h2 style={{marginTop: "10px", }}>Add Document
                                    <button  type="button" onClick={open} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-320px"}}>
                                        <span className=" flex-row-reverse" aria-hidden="true" style={{fontWeight: "bolder", color: "black",  }}>X</span>
                                    </button>
                                    </h2>
                        </ModalHeader>           
                        <ModalBody>
                          <FormGroup row >
                            <div>
                                <div>
                                  <form >
                                        <div class="d-flex flex-row-reverse mx-7" style={{marginTop: "40px"}} >
                  
                                        {/* <input type="file" style={{display:'none'}} id="file" name="file"/>
                                        <button type="button" class="btn btn-success" id="loadFileXml" onClick="document.getElementById('file').click();" >Upload Signature</button> */}
                                        <FormGroup>
                  
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload File"></CustomInput>
                                        </FormGroup>
                                        </div>
                                  </form>
                              </div>
                            </div>
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                          <Button color="success" className="file-upload-btn" >Submit</Button> 
                          
                        </ModalFooter>
                      </Modal>
                 
               
                <div style={{marginLeft: "55px", marginTop: "10px"}}>
                <span style={{textDecorationColor: "blue"}}>Add Document</span>
                </div>
               
                
                </Col>
                </Row>
              </CardBody>
              
              
              <CardBody>
                <Row className="icon-examples">
                  <Col lg="3" md="6">
                      <span style={{textDecorationColor: "blue"}}>{"May "}{new Date().getFullYear()}</span>
                      
                     
                  </Col>
                </Row>
              </CardBody>
              

              <CardBody>
                <Row className="icon-examples">
                  <Col lg="3" md="6">
                      <span style={{textDecorationColor: "blue"}}>{"June "}{new Date().getFullYear()}{" "}</span>
                      
                    
                  
                  </Col>
                </Row>
              </CardBody>

              <CardBody>
                <Row className="icon-examples">
                  
                  <Col  style={{display: ""}}>
                    <div>
                      <span style={{textDecorationColor: "blue"}}>FOLDERS</span>
                    </div>
                    <br/>
               
                      <Button
                          type="button"
                          size="md"
                        >
                          <div>
                            <i className="ni ni-fat-add" ></i>  
                            <span style={{textDecorationColor: "blue"}}>Contact 1</span>
                          </div>
                      </Button>
                      <Button
                          type="button"
                          size="md"
                        >
                          <div>
                            <i className="ni ni-fat-add" style={{textDecorationColor: "blue"}}></i>  
                            <span style={{textDecorationColor: "blue"}}>Contact 2</span>
                          </div>
                      </Button>
                  
                    
                  </Col>
                 
                
                </Row>
              </CardBody>

            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Icons;
