
import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Col,
  Row,
  Modal, 
  ModalHeader, 
  ModalBody, 
  Button,
  ModalFooter,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import api from 'api/api'

// core components
import Header from "components/Headers/Header.js";
import "assets/css/overlay.css";
      

   



const Maps = () => {

  const[ErrorModal, setErrorModal] = useState(false)
  const exitErrorModal = () => setModal(!ErrorModal);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const [open, openModal] = useState(false);
  const toggs = () => openModal(!open);

  const [openDeny, openModalDeny] = useState(false);
  const toggleDeny = () => openModalDeny(!openDeny);

  const [openDeclined, openModalDeclined] = useState(false);
  const toggleDecline = () => openModalDeclined(!openDeclined);

  const [closeAll, setCloseAll] = useState(false);

  const toggleAll = () => {
      setModal(!modal);
      openModal(!open);
      setCloseAll(true);
    }

  const toggleAll2 = () => {
    openModalDeny(!openDeny);
    openModalDeclined(!openDeclined);
    setCloseAll(true);
  }
  
    const getLeaveId = localStorage.getItem('leave_id')
    const getToken = localStorage.getItem('token')
    const [leaveData, setLeaveData] = useState([])
    const [search, setSearch] =useState('')
    const [leaveStat, setLeaveStat] = useState('')
    
    
    //get leave
    const getLeave = () => {
      api.get(`leave/list-requests?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(res => {
        setLeaveData(res.results)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }

    //approve
    const btnApprove = () => {
      api.get(`leave/${getLeaveId}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(res=>{
        setLeaveStat(res.leave_status)
      })
     if(leaveStat != 'Pending'){
      setErrorModal(true)
      return false 
     }
        const approve = {
          leave_status: 'Approved by HR'
        }
      api.put(`leave/${getLeaveId}/`, approve, {headers: {Authorization: `Token ${getToken}`}})
      .then(() => {
        return api.get(`leave/list-requests?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res=>{
        console.log(res)
        toggs()
        setLeaveData(res.results)
      })
      .catch(err=>{
        console.log(err)
      })
      
    }
    //disapprove
    const btnDisapprove = () => {
      const getLeaveId = localStorage.getItem('leave_id')
      api.get(`leave/${getLeaveId}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(res=>{
        setLeaveStat(res.leave_status)
      })
      console.log(getLeaveId)
      console.log(leaveStat)
     if(leaveStat != 'Pending'){
      setErrorModal(true)
      return false 
     }

    const disapprove = {
      leave_status: 'Declined'
    }

    api.put(`leave/${getLeaveId}/`, disapprove, {headers: {Authorization: `Token ${getToken}`}})
    .then(() => {
      return api.get(`leave/list-requests?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
    })
    .then(res=>{
      console.log(res)
      toggleDecline()
      setLeaveData(res.results)
      localStorage.removeItem('leave_id')
    })
    .catch(err=>{
      console.log(err)
    })
  }
    const btnError = () => {  
      openModalDeny(false)
      setErrorModal(false)
      setModal(false)
    }

 
    useEffect(()=>{
      getLeave()
    }, [])
  
    const [currentPage, setCurrentPage] = useState(1);
    const nextPage = () => {
      setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
      setCurrentPage(currentPage - 1)
    }


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          
        <Modal size="md" centered isOpen={ErrorModal} toggle={exitErrorModal}>
          <ModalHeader  
            stoggle={exitErrorModal} 
            charCode="X">
              <h2>OOPS!
              <button  
                type="button" 
                onClick={exitErrorModal} 
                class="close" 
                data-dismiss="modal" 
                aria-label="Close" 
                style={{marginRight: "-410px"}}>
                <span 
                  className=" flex-row-reverse" 
                  aria-hidden="true" 
                  style={{fontWeight: "bolder", color: "black",  }}>
                    X
                </span>
              </button>  
            </h2>
          </ModalHeader>
          <ModalBody style={{height: "100px"}}>
            Leave status already decided.
          </ModalBody>
          <ModalFooter >
            <Button 
              color="success" 
              onClick={btnError}  
              data-dismiss="modal">Close
            </Button>
          </ModalFooter>
        </Modal>



        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Leaves Management</h2>
                <Form className="navbar-search form-inline d-none d-md-flex ml-md-auto" style={{float:"right", color: "lightblue"}}>
                    <FormGroup className="mb-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" style={{color: "lightblue"}} />
                          </InputGroupText>
                        </InputGroupAddon >
                        <Input 
                          placeholder="Search Employee Number..." 
                          type="text" 
                          style={{color: "lightblue"}}
                          onChange={e=> setSearch(e.target.value)}
                          />
                      </InputGroup>
                    </FormGroup>
                  </Form>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr >
                    <th scope="col" style={{color: "indigo"}}>EMPLOYEE NUMBER</th>
                    <th scope="col" style={{color: "indigo"}}>NAME</th>
                    <th scope="col" style={{color: "indigo"}}>DATES FILED</th>
                    <th scope="col" style={{color: "indigo"}}>LEAVE TYPE</th>
                    
                    <th scope="col" style={{color: "indigo"}}>SICK LEAVE COUNT</th>
                    <th scope="col" style={{color: "indigo"}}>VACATION LEAVE COUNT</th>
                    <th scope="col" style={{color: "indigo"}}>STATUS</th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                {leaveData.filter((item)=>{
                if (search == ''){
                  return item
                }
                else if (item.employee_number.includes(search)){
                  return item
                }
              })       
                .map((item)=>{
                  return(             
                  <tr>
                    <th scope="row">{item.employee_number}</th>
                    <td>{item.name}</td>             
                    <td>{item.date_filed}</td>
                    <td>{item.leave_type}</td>
                    <td>{item.sick_leave_count}</td>
                    <td>{item.vac_leave_count}</td>
                    <td  >
                      {/*(pending) {backgroundColor: "#FB9400", color: "white"}
                          (success) {backgroundColor: "green", color: "white"}
                         (Declined) {backgroundColor: "red", color: "white"}
                      */}
                        <Badge style={item.leave_status === 'Approved by HR' ? {backgroundColor: "green", color: "white"}
                         : item.leave_status === 'Declined' ? {backgroundColor: "red", color: "white"}
                        : {backgroundColor: "#FB9400", color: "white"}}>{item.leave_status}</Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          role="button"
                          size="sm"
                          color=""
                          onClick={e => localStorage.setItem('leave_id', item.leave_id)}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem onClick={toggle} >Approve Leave</DropdownItem>
                          <Modal backdrop={false} size="md" centered isOpen={modal} toggle={toggle}>
                              <ModalHeader  stoggle={toggle} charCode="X"><h2>Confirmation
                                                <button  type="button" onClick={toggle} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-340px"}}>
                                                      <span className=" flex-row-reverse" aria-hidden="true" style={{fontWeight: "bolder", color: "black",  }}>X</span>
                                                </button>  
                                  </h2></ModalHeader>
                                <ModalBody style={{height: "100px"}}>
                                    Are you sure you want to approve this leave?
                                </ModalBody>
                                  <ModalFooter >
                                    <Button color="success" onClick={btnApprove}  data-dismiss="modal">Approve </Button>
                                      <Modal backdrop={false} size="md"centered isOpen={open} toggle={toggs} onClosed={closeAll ? toggle : undefined} >
                                          <ModalHeader  stoggle={toggs}><h2>Success!</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Leave is mark as approved!
                                          </ModalBody>
                                          <ModalFooter >
                                          <Button color="success" onClick={toggleAll} data-dismiss="open" aria-label="Close" >Ok</Button>
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>



                          <DropdownItem onClick={toggleDeny} data-toggle="modal">Deny Leave</DropdownItem>
                          <Modal backdrop={false} size="md" centered isOpen={openDeny} toggle={toggleDeny} >
                              <ModalHeader  stoggle={toggleDeny} charCode="X"><h2>Confirmation
                                                <button  type="button" onClick={toggleDeny} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-340px"}}>
                                                      <span className=" flex-row-reverse" aria-hidden="true" style={{fontWeight: "bolder", color: "black",  }}>X</span>
                                                </button>  
                                  </h2></ModalHeader>
                                <ModalBody style={{height: "100px"}}>
                                    Are you sure you want to deny this leave?
                                </ModalBody>
                                  <ModalFooter >
                                    <Button color="danger" onClick={btnDisapprove}  data-dismiss="modal">Deny</Button>
                                      <Modal backdrop={false} size="md"centered isOpen={openDeclined} toggle={toggleDecline} onClosed={closeAll ? toggleDeny : undefined} >
                                          <ModalHeader  stoggle={toggleDecline}><h2>Deny Leave</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Leave is denied!
                                          </ModalBody>
                                          <ModalFooter >
                                          <Button color="success" onClick={toggleAll2} data-dismiss="open" aria-label="Close" >Ok</Button>
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                    )
                  })}
                  
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem >
                      <PaginationLink
                        onClick={prevPage}
                        
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
               
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                         onClick={nextPage}
                       
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

export default Maps;
