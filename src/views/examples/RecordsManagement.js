
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

// core components
import Header from "components/Headers/Header.js";
import api from "api/api";
import "assets/css/overlay.css";
import { data } from "jquery";
import { Redirect } from "react-router-dom";

      

   



const Maps = () => {

    // POSITION CONTAINER
        // ADD

    const [modalAdd, setModalAdd] = useState(false);

    const toggleAdd = () => setModalAdd(!modalAdd);

        // EDIT

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const [open, openModal] = useState(false);
    const toggs = () => openModal(!open)
    


        // Delete

    const [openDel, openModalDel] = useState(false);
    const toggleDel = () => openModalDel(!openDel);

    const [openDelSuccess, openModalDelSuccess] = useState(false);
    const toggleDelSuccess = () => openModalDelSuccess(!openDelSuccess);

    const [closeAll, setCloseAll] = useState(false);

    const toggleAll = () => {
        openModal(!open);
        setModalAdd(false);
        setModal(false)
      }

    const toggleClose = () => {
      setCloseAll(true);
        openModalDelSuccess(!openDelSuccess);
        
    }

    // DEPARTMENT CONTAINER
          // ADD

    const [modalAddDept, setModalAddDept] = useState(false);

    const toggleAddDept = () => setModalAddDept(!modalAddDept);

         // EDIT

    const [modalDeptEdit, setModalDeptEdit] = useState(false);
    const toggleEditDept = () => setModalDeptEdit(!modalDeptEdit);
  
    const [openDeptEdit, openModalDeptEdit] = useState(false);
    const toggsEdit = () => openModalDeptEdit(!openDeptEdit);

    const toggleAllEditDept = () => {
      setCloseAll(true);
        openModalDeptEdit(false);
        
    }

        // Delete

    const [openDelDept, openModalDelDept] = useState(false);
    const toggleDelDept = () => openModalDelDept(!openDelDept);
    
    const [openDelDeptSuccess, openModalDelDeptSuccess] = useState(false);
    const toggleDelDeptSuccess = () => openModalDelDeptSuccess(!openDelDeptSuccess);

    
    const toggleDeptClose = () => {
      setCloseAll(true)
        openModalDelDeptSuccess(!openDelDeptSuccess);
        openModalDelDept(!openDelDept);
    }

      // COMPANY CONTAINER
          // ADD

    const [modalAddComp, setModalAddComp] = useState(false);

    const toggleAddComp = () => setModalAddComp(!modalAddComp);

         // EDIT

   const [modalCompEdit, setModalCompEdit] = useState(false);
   const toggleEditComp = () => setModalCompEdit(!modalCompEdit);
 
   const [openCompEdit, openModalCompEdit] = useState(false);
   const toggsEditComp = () => openModalCompEdit(!openCompEdit);

        // Delete

  const [openDelComp, openModalDelComp] = useState(false);
  const toggleDelComp = () => openModalDelComp(!openDelComp);

  const [openDelCompSuccess, openModalDelCompSuccess] = useState(false);
  const toggleDelCompSuccess = () => openModalDelCompSuccess(!openDelCompSuccess);





  const toggleAllEditComp = () => {
    setModalCompEdit(!modalCompEdit);
    openModalCompEdit(!openCompEdit);
    setCloseAll(true);
  }
  const toggleCompClose = () => {
    openModalDelCompSuccess(!openDelCompSuccess);
    setCloseAll(true);
    }




    const getToken = localStorage.getItem('token')

    //Position
    const [jobData, setJobData] = useState([])
    const [job_title, setJob_title] = useState('')
    const [job_id, setJob_id] = useState('')
    const [duties, setDuties] = useState(null)
    const [min_salary, setMin_salary] = useState(null)
    const [max_salary, setMax_salary] = useState(null)
    //department
    const [department_name, setDepartment_name] = useState('')
    const [department_details, setDepartment_details] = useState(null)
    const [department_data, setDepartment_data] = useState([])
    const [department_id, setDepartment_id] = useState('')
    //company
    const [company_name, setCompanyName] = useState(null)
    const [company_description, setCompanyDesc] = useState(null)
    const [company_address, setCompanyAdd] = useState(null)
    const [company_data, setCompanyData] = useState([])

    //button for adding a company
    const btnCompany = (e) => {
      const company = {
        company_name,
        company_address,
        company_description
      }
      e.preventDefault()
      api.post('companies/', company, {headers: {Authorization: `Token ${getToken}`}})
      .then(()=>{
        return api.get(`companies?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res=>{
        console.log(res)
        setModalAddComp(false)
        setCompanyData(res.results)
        localStorage.removeItem('companyId')
      })
    }
    
    //button for adding a position
    const btnPosition = (e) => {
      const position = {
        job_title,
        duties,
        min_salary,
        max_salary,
      }
      e.preventDefault()
      api.post('jobs/', position, {headers: {Authorization: `Token ${getToken}`}})
      .then(()=> {
        return api.get(`jobs?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res=>{
        console.log(res)
        toggleAdd()
        setJobData(res.results)
        localStorage.removeItem('JobId')
      })
     
      .catch(err => {
        console.log(err)
      })
    }

    //button for adding a department
    const btnDepartment = (e) => {
      const department = {
        department_name,
        department_details
      }
      api.post('departments/', department, {headers: {Authorization: `Token ${getToken}`}})
      .then(()=>{
        return api.get(`departments?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res=>{
        toggleAddDept()
        setDepartment_data(res.results)
        localStorage.removeItem('depId')
      })
      .catch(err=>{
        console.log(err)
      })
    }

   //getCompany
   const getCompany = async () => {
     api.get(`companies?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
     .then(res=>{
       setCompanyData(res.results)
     })
     .catch(err=>{
       console.log(err)
     })
   }
    
  
    //getPosition
    const getPosition = async () => {
      api.get(`jobs?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(res=> {
        console.log(res)
        setJobData(res.results)
      })
      .catch(err => {
        console.log(err)
      })
    }
    //getDepartment
    const getDepartment= async () => {
      api.get(`departments?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(res=> {
        console.log(res)
        setDepartment_data(res.results)
      })
      .catch(err => {
        console.log(err)
      })
    }

    //localStorage
    const depId = localStorage.getItem('depId')
    const jobId = localStorage.getItem('JobId')
    const companyId = localStorage.getItem('companyId')
    
    //delete department
    
    const BtnDeleteDep = () => {
      api.delete(`departments/${depId}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(() => {
        return api.get(`departments?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res => {
        toggleDelDeptSuccess()
        setDepartment_data(res.results)
        localStorage.removeItem('depId')
      })
      .catch(err => {
        console.log(err)
      })
    } 
    
    //delete Position
    
    const btnDeletePosition = () => {
      api.delete(`jobs/${jobId}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(() => {
        return api.get(`jobs?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res => {
        toggleDelSuccess()
        setJobData(res.results)
        localStorage.removeItem('JobId')
      })
      .catch(err => {
        console.log(err)
      })
    } 

    //delete Company
    
    const btnDeleteCompany = () => {
      api.delete(`companies/${companyId}`, {headers: {Authorization: `Token ${getToken}`}})
      .then(() => {
        return api.get(`companies?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res => {
        toggleDelCompSuccess()
        setCompanyData(res.results)
        localStorage.removeItem('companyId')
      })
      .catch(err => {
        console.log(err)
      })
    } 
    //edit Position
    const btnUpdatePosition = () => {
      const updatePosition = {
        duties: jobData.duties,
        job_title,
        max_salary,
        min_salary
      }
      api.put(`jobs/${jobId}/`, updatePosition, {headers: {Authorization: `Token ${getToken}`}})
      .then(()=>{
        return api.get(`jobs?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res=>{
        console.log(res)
        toggs()
        setJobData(res.results)
        localStorage.removeItem('JobId')
      })
    }

    //edit department
    const btnUpdateDepartment = () => {
      const updateDepartment = {
       department_name,
       department_details
      }
      api.put(`departments/${depId}/`, updateDepartment, {headers: {Authorization: `Token ${getToken}`}})
      .then(()=>{
        return api.get(`departments?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res=>{
        console.log(res)
        toggsEdit()
        setDepartment_data(res.results)
        localStorage.removeItem('depId')
      })
    }

    //edit company
    const btnUpdateCompany = () => {
      const updateCompany = {
       company_name,
       company_description,
       company_address,
      }
      api.put(`companies/${companyId}/`, updateCompany, {headers: {Authorization: `Token ${getToken}`}})
      .then(()=>{
        return api.get(`companies?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
      })
      .then(res=>{
        console.log(res)
        setCompanyData(res.results)
        toggsEdit()
        localStorage.removeItem('companyId')
      })
    }


    useEffect(()=>{
      getPosition()
      getDepartment()
      getCompany()
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
        
        <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Position</h2>
                <Button className="form-inline d-md-flex ml-md-auto" style={{marginLeft: "250px"}} color="success" onClick={toggleAdd} >Add</Button>
              
                
                
                <Modal backdrop={false} isOpen={modalAdd} toggle={toggleAdd} size="lg" centered>
                    <ModalHeader toggle={toggleAdd} charCode="X"><h2>Add Position
                                  
                      </h2></ModalHeader>
                        <ModalBody>
                              <Row>
                                    <Col sm="12">
                                        <FormGroup row>
                                        <label
                                            class="col-sm-2 col-form-label"
                                            htmlFor="input-tin"
                                        >
                                           Description:
                                        </label>
                                        <Col sm="9">
                                        <Input
                                          name="desc"
                                          label="desc"
                                          variant="filled"
                                          onChange={e => setJob_title(e.target.value)}                       
                                        />
                                        </Col>
                                        </FormGroup>
                                    </Col>
                            </Row>
                            <Row>
                                <Col sm="8">
                                    <FormGroup row>
                                            <label
                                                class="col-sm-3 col-form-label "
                                                htmlFor="input-Weight"
                                            >
                                                Min Salary:
                                            </label>
                                        <Col sm="3">
                                            <Input
                                              class="form-control"
                                              id="input-minSalary"
                                              type="text"
                                              onChange={e => setMin_salary(e.target.value)}
                                            />
                                        </Col >
                                            <label
                                                class="col-sm-3 col-form-label  "
                                                htmlFor="input-Height"
                                            >
                                                <span style={{display: "inline-flex"}}>Max Salary:</span>
                                            </label>
                                        <Col sm="3">
                                            <Input
                                                class="form-control"
                                                id="input-maxSalary"
                                                onChange={e => setMax_salary(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={btnPosition}>Create</Button>{' '}
                            </ModalFooter>
                </Modal>




              </CardHeader>
              
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light" >
                  <tr >
                    <th scope="col" style={{color: "indigo"}}>Description</th>
                    <th scope="col" style={{color: "indigo"}}>Salary Range</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {jobData.map((item) => {
                    return(
                  <tr>
                    <th scope="row">{item.job_title}</th>
                    <td>P{item.min_salary} - P{item.max_salary}</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          
                          role="button"
                          size="sm"
                          color=""
                          onClick={e => localStorage.setItem('JobId', item.job_id)}
                        >
                          <i className="fas fa-ellipsis-v" />
                          {/**EDIT POSITION*/}
                          
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem onClick={toggle}>Edit</DropdownItem>
                            <Modal backdrop={false} size="lg"centered isOpen={modal} toggle={toggle}>
                              <ModalHeader  stoggle={toggle} ><h2>Edit Position
                                      <button type="button" onClick={toggle} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-650px"}}>
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                      </button></h2>
                                    </ModalHeader>
                                <ModalBody >
                                        <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                Description:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                
                                                        name="desc"
                                                        label="desc"
                                                        variant="filled"
                                                        
                                                        onChange={e=> setJob_title(e.target.value)}
                                                    
                                                    
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="8">
                                            <FormGroup row>
                                                    <label
                                                        class="col-sm-3 col-form-label "
                                                        htmlFor="input-Weight"
                                                    >
                                                        Min Salary:
                                                    </label>
                                                <Col sm="3">
                                                    <Input
                                                        class="form-control"
                                                        id="input-minSalary"
                                                        type="text"
                                                        onChange={e=> setMin_salary(e.target.value)}
                                                    
                                                    />
                                                </Col >
                                                    <label
                                                        class="col-sm-3 col-form-label  "
                                                        htmlFor="input-Height"
                                                    >
                                                        <span style={{display: "inline-flex"}}>Max Salary:</span>
                                                    </label>
                                                <Col sm="3">
                                                    <Input
                                                        class="form-control"
                                                        id="input-maxSalary"
                                                        onChange={e=> setMax_salary(e.target.value)}
                                                        
                                                    />
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </ModalBody>
                                  <ModalFooter >
                                    <Button color="success" onClick={btnUpdatePosition}  data-dismiss="modal">Save</Button>
                                      <Modal backdrop={false} size="md"centered isOpen={open} toggle={toggs} onClosed={closeAll ? toggle : undefined} >
                                          <ModalHeader stoggle={toggs}><h2>Success!</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Changes Have Been Saved Successfully
                                          </ModalBody>
                                          <ModalFooter >
                                            <Button color="success" onClick={toggleAll} >Ok</Button>
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>
                          <DropdownItem onClick={toggleDel} data-toggle="modal">Delete</DropdownItem>
                           
                              
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                    )
                 })}
                
                </tbody>
              </Table>


               {/**DELETE POSITION */}
              
                       <Modal size="md"centered isOpen={openDel} toggle={toggleDel}>
                                <ModalHeader stoggle={toggleDel} charCode="X"><h2>Delete Position</h2>
                                </ModalHeader>
                                  <ModalBody style={{height: "100px", display: "flex"}}>
                                        Are you sure you want to delete this?
                                  </ModalBody>
                                    <ModalFooter >
                                        <Button color="danger" onClick={btnDeletePosition}
                                        >Delete</Button>
                                            <Modal backdrop={false} size="md" centered isOpen={openDelSuccess} toggle={toggleDelSuccess} onClosed={closeAll ? toggleDel : undefined} >
                                                <ModalHeader stoggle={toggleDelSuccess}><h2>Success!</h2></ModalHeader>
                                                <ModalBody style={{height: "100px"}}>
                                                    Delete Successful!
                                                </ModalBody>
                                                <ModalFooter >
                                                     <Button color="success" onClick={toggleClose}>Return</Button>
                                                </ModalFooter>
                                            </Modal>
                                    </ModalFooter>
                            </Modal>
             
              <CardFooter className="py-4">
                <nav aria-label="...">
                <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem >
                      <PaginationLink
                        onClick={prevPage}
                        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                        
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
                         className={`next ${currentPage === -1 ? 'disabled' : ''}`}
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

{/* DEPARTMENT CONTAINER */}

        <Row>
        <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Department</h2>
                <Button className="form-inline d-md-flex ml-md-auto" style={{marginLeft: "210px"}} color="success" onClick={toggleAddDept} >Add</Button>
                <Modal backdrop={false} isOpen={modalAddDept} toggle={toggleAddDept} size="lg" centered>
                    <ModalHeader toggle={toggleAddDept} charCode="X"><h2>Add Department</h2></ModalHeader>
                        <ModalBody>
                              <Row>
                                    <Col sm="12">
                                        <FormGroup row>
                                        <label
                                            class="col-sm-2 col-form-label"
                                            htmlFor="input-tin"
                                        >
                                           Department:
                                        </label>
                                        <Col sm="9">
                                        <Input
                                        
                                                name="desc"
                                                label="desc"
                                                variant="filled"
                                                required
                                                onChange={e => setDepartment_name(e.target.value)}
                                            
                                            
                                        />
                                        </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12">
                                        <FormGroup row>
                                        <label
                                            class="col-sm-2 col-form-label"
                                            htmlFor="input-tin"
                                        >
                                           Description:
                                        </label>
                                        <Col sm="9">
                                        <Input
                                        
                                                name="desc"
                                                label="desc"
                                                variant="filled"
                                                required
                                                onChange={e => setDepartment_details(e.target.value)}
                                            
                                            
                                        />
                                        </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            
                        </ModalBody>
                            <ModalFooter>
                                <Button color="success" type="submit" onClick={btnDepartment}>Create</Button>{' '}
                            </ModalFooter>
                </Modal>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light" >
                  <tr >
                    <th scope="col" style={{color: "indigo"}}>Department</th>
                    <th scope="col" style={{color: "indigo"}}>Description</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {department_data.map((item)=>{
                      return(
                  <tr>   
                    <th scope="row">{item.department_name}</th>
                    <td>{item.department_details}</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                         
                          role="button"
                          size="sm"
                          color=""
                          onClick={e=> localStorage.setItem('depId', item.department_id)}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem onClick={toggleEditDept}>Edit</DropdownItem>
                            <Modal backdrop={false} size="lg"centered isOpen={modalDeptEdit} toggle={toggleEditDept} >
                              <ModalHeader  stoggle={toggleEditDept}><h2>Edit Department
                                    <button type="button" onClick={toggleEditDept} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-615px"}}>
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button>
                                </h2></ModalHeader>
                                <ModalBody >
                                        <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                Department:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                  name="desc"
                                                  label="desc"
                                                  variant="filled"
                                                  onChange= {e => setDepartment_name(e.target.value)}
                                                    
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                Description:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                
                                                        name="desc"
                                                        label="desc"
                                                        variant="filled"
                                                        onChange= {e => setDepartment_details(e.target.value)}
                                                    
                                                    
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    
                                </ModalBody>
                                  <ModalFooter >
                                    <Button color="success" onClick={btnUpdateDepartment}  data-dismiss="modal">Save</Button>
                                      <Modal size="md"centered isOpen={openDeptEdit} toggle={toggsEdit} onClosed={closeAll ? toggleEditDept : undefined} >
                                          <ModalHeader stoggle={toggsEdit}><h2>Success!</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Changes Have Been Saved Successfully
                                          </ModalBody>
                                          <ModalFooter >
                                            <Button color="success" onClick={toggleAllEditDept} >Ok</Button>
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>
                          <DropdownItem onClick={toggleDelDept} data-toggle="modal">Delete</DropdownItem>


                            <Modal size="md"centered isOpen={openDelDept} toggle={toggleDelDept}>
                                <ModalHeader stoggle={toggleDelDept} charCode="X"><h2>Delete Position</h2>
                                </ModalHeader>
                                  <ModalBody style={{height: "100px", display: "flex"}}>
                                        Are you sure you want to delete this?
                                  </ModalBody>
                                    <ModalFooter >
                                        <Button color="danger" onClick={BtnDeleteDep}>Delete</Button>
                                     
                                            <Modal backdrop={false} size="md" centered isOpen={openDelDeptSuccess} toggle={toggleDelDeptSuccess} onClosed={closeAll ? toggleDelDept : undefined} >
                                                <ModalHeader stoggle={toggleDelDeptSuccess}><h2>Success!</h2></ModalHeader>
                                                <ModalBody style={{height: "100px"}}>
                                                    Delete Successful!
                                                </ModalBody>
                                                <ModalFooter >
                                                     <Button color="success" onClick={toggleDeptClose}>Return</Button>
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
                        className={`prev ${currentPage === -1 ? 'disabled' : ''}`}
                        
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
                         className={`next ${currentPage === 1 ? 'disabled' : ''}`}
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

      {/* COMPANY CONTAINER */}
        <Row>
        <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Company</h2>
                <Button className="form-inline d-md-flex ml-md-auto" style={{marginLeft: "240px"}} color="success" onClick={toggleAddComp} float="right">Add</Button>
                <Modal backdrop={false} isOpen={modalAddComp} toggle={toggleAddComp} size="lg" centered>
                    <ModalHeader toggle={toggleAddComp} charCode="X"><h2>Add Company</h2></ModalHeader>
                        <ModalBody>
                              <Row>
                                    <Col sm="12">
                                        <FormGroup row>
                                        <label
                                            class="col-sm-2 col-form-label"
                                            htmlFor="input-tin"
                                        >
                                           Company:
                                        </label>
                                        <Col sm="9">
                                        <Input
                                        
                                                name="desc"
                                                label="desc"
                                                variant="filled"
                                                required
                                                onChange={e => setCompanyName(e.target.value)}
                                            
                                            
                                        />
                                        </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12">
                                        <FormGroup row>
                                        <label
                                            class="col-sm-2 col-form-label"
                                            htmlFor="input-tin"
                                        >
                                           Description:
                                        </label>
                                        <Col sm="9">
                                        <Input
                                        
                                                name="desc"
                                                label="desc"
                                                variant="filled"
                                                required
                                                onChange={e => setCompanyDesc(e.target.value)}
                                            
                                            
                                        />
                                        </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12">
                                        <FormGroup row>
                                        <label
                                            class="col-sm-2 col-form-label"
                                            htmlFor="input-tin"
                                        >
                                           Address:
                                        </label>
                                        <Col sm="9">
                                        <Input
                                        
                                                name="desc"
                                                label="desc"
                                                variant="filled"
                                                required
                                                onChange={e => setCompanyAdd(e.target.value)}
                                            
                                            
                                        />
                                        </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            
                        </ModalBody>
                            <ModalFooter>
                                <Button color="success" type="submit" onClick={btnCompany}>Create</Button>{' '}
                            </ModalFooter>
                </Modal>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light" >
                  <tr >
                    <th scope="col" style={{color: "indigo"}}>Company Name</th>
                    <th scope="col" style={{color: "indigo"}}>Company Address</th>
                    <th scope="col" style={{color: "indigo"}}>Description</th>
                    
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {company_data.map((item)=>{
                      return(
                  <tr key={item.department_id}>   
                    <td scope="row">{item.company_name}</td>
                    <td scope="row">{item.company_address}</td>
                    <td>{item.company_description}</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                         
                          role="button"
                          size="sm"
                          color=""
                          onClick={e => localStorage.setItem('companyId', item.company_id)}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem onClick={toggleEditComp }>Edit</DropdownItem>
                            <Modal backdrop={false} size="lg"centered isOpen={modalCompEdit} toggle={toggleEditComp } >
                              <ModalHeader  stoggle={toggleEditComp}><h2>Edit Company
                              <button type="button" onClick={toggleEditComp} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-635px"}}>
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button></h2></ModalHeader>
                                <ModalBody >
                                        <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                Company:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                  name="desc"
                                                  label="desc"
                                                  variant="filled"
                                                  onChange= {e => setCompanyName(e.target.value)}
                                                    
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                Description:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                
                                                        name="desc"
                                                        label="desc"
                                                        variant="filled"
                                                        onChange= {e => setCompanyDesc(e.target.value)}
                                                    
                                                    
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                Address:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                
                                                        name="desc"
                                                        label="desc"
                                                        variant="filled"
                                                        onChange= {e => setCompanyAdd(e.target.value)}
                                                    
                                                    
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        
                                    
                                </ModalBody>
                                  <ModalFooter >
                                    <Button color="success" onClick={btnUpdateCompany}  data-dismiss="modal">Save</Button>
                                      <Modal size="md"centered isOpen={openDeptEdit} toggle={toggsEditComp} onClosed={closeAll ? toggleEditComp : undefined} >
                                          <ModalHeader stoggle={toggsEditComp}><h2>Success!</h2></ModalHeader>
                                          <ModalBody style={{height: "100px"}}>
                                              Changes Have Been Saved Successfully
                                          </ModalBody>
                                          <ModalFooter >
                                            <Button color="success" onClick={toggleAllEditComp} >Ok</Button>
                                          </ModalFooter>
                                      </Modal>
                                  </ModalFooter>
                            </Modal>
                          <DropdownItem onClick={toggleDelComp} data-toggle="modal">Delete</DropdownItem>


                            <Modal size="md"centered isOpen={openDelComp} toggle={toggleDelComp} >
                                <ModalHeader stoggle={toggleDelComp} charCode="X"><h2>Delete Company</h2>
                                </ModalHeader>
                                  <ModalBody style={{height: "100px", display: "flex"}}>
                                        Are you sure you want to delete this?
                                  </ModalBody>
                                    <ModalFooter >
                                        <Button color="danger" type='submit' onClick={btnDeleteCompany}>Delete</Button>
                                     
                                            <Modal size="md" centered isOpen={openDelCompSuccess} toggle={toggleDelCompSuccess} onClosed={closeAll ? toggleDelComp : undefined} >
                                                <ModalHeader stoggle={toggleDelCompSuccess}><h2>Success!</h2></ModalHeader>
                                                <ModalBody style={{height: "100px"}}>
                                                    Delete Successful!
                                                </ModalBody>
                                                <ModalFooter >
                                                     <Button color="success" onClick={toggleCompClose}>Return</Button>
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
