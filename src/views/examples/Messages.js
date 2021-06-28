
import React, {useState} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Button
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

      

   



const Messages = () => {

       //----------MODAL---------------------
       const [modal, setModal] = useState(false);

       const toggle = () => setModal(!modal);
    //--------------------------------------------
 
    const [modalIsOpen, setModalisOpen] = useState(false);
 
    const open = () => setModalisOpen(!modalIsOpen);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <div class="d-flex flex-row-reverse mx-1 mb-3">     
     
            <form  class="modal fade needs-validation" novalidate id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                </form> 
      </div>

        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Inbox</h2>
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
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light" >
                  <tr >
                
                    <th scope="col" style={{color: "indigo"}}></th>
                    <th scope="col" style={{color: "indigo"}}></th>
                    <th scope="col" style={{color: "indigo"}}></th>
                    <th scope="col" style={{color: "indigo"}}></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" disabled style={{marginTop: "-5px", height: "10px", width: "10px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>7:00AM</td>
                    <td className="text-right">
                    <UncontrolledDropdown>
                        <DropdownToggle
                         className="btn-icon-only text-light"
                         href="#pablo"
                         role="button"
                         size="sm"
                         color=""
                         onClick={(e) => e.preventDefault()}
                        >
                        <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem>
                            Mark as Read
                          </DropdownItem>
                          <DropdownItem>
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" disabled style={{marginTop: "-5px", height: "10px", width: "10px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Promotion - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>7:00AM</td>
                    <td className="text-right">
                    <UncontrolledDropdown>
                        <DropdownToggle
                         className="btn-icon-only text-light"
                         href="#pablo"
                         role="button"
                         size="sm"
                         color=""
                         onClick={(e) => e.preventDefault()}
                        >
                        <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem>
                            Mark as Read
                          </DropdownItem>
                          <DropdownItem>
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" disabled style={{marginTop: "-5px", height: "10px", width: "10px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>05/24/2021</td>
                    <td className="text-right">
                    <UncontrolledDropdown>
                        <DropdownToggle
                         className="btn-icon-only text-light"
                         href="#pablo"
                         role="button"
                         size="sm"
                         color=""
                         onClick={(e) => e.preventDefault()}
                        >
                        <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem>
                            Mark as Read
                          </DropdownItem>
                          <DropdownItem>
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" disabled style={{marginTop: "-5px", height: "10px", width: "10px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>06/01/2021</td>
                    <td className="text-right">
                    <UncontrolledDropdown>
                        <DropdownToggle
                         className="btn-icon-only text-light"
                         href="#pablo"
                         role="button"
                         size="sm"
                         color=""
                         onClick={(e) => e.preventDefault()}
                        >
                        <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem>
                            Mark as Read
                          </DropdownItem>
                          <DropdownItem>
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" disabled style={{marginTop: "-5px", height: "10px", width: "10px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>06/01/2021</td>
                    <td className="text-right">
                    <UncontrolledDropdown>
                        <DropdownToggle
                         className="btn-icon-only text-light"
                         href="#pablo"
                         role="button"
                         size="sm"
                         color=""
                         onClick={(e) => e.preventDefault()}
                        >
                        <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem>
                            Mark as Read
                          </DropdownItem>
                          <DropdownItem>
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>

              </Table>
              <CardFooter className="border-0" style={{display:"flex"}}>
                <Button color="success" style={{position: "relative"}}>Mark All As Read</Button>
                <Button color="danger"  style={{position: "relative"}}>Delete All</Button>
             
                   <nav aria-label="..." className="navbar-search form-inline d-none d-md-flex ml-md-auto" style={{float:"right"}} >
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                    
                    
                  >
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                   
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                       
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            
            </Card>
          </div>
          
        </Row>
      </Container>
    </>
  );
};

export default Messages;
