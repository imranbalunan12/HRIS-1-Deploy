import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import api from 'api/api'

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
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";



function Tables (){

  const getToken = localStorage.getItem('token')
  const [employee_data, setEmployee_data] = useState([])


  const getEmployee = async () => {
  api.get(`employees/list?page=${currentPage}`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=> {
    setEmployee_data(res.results)
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

useEffect(()=>{
  getEmployee()
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
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Employee List Table</h2>
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
                    <th scope="col" style={{color: "indigo"}}>EMPLOYEE NUMBER</th>
                    <th scope="col" style={{color: "indigo"}}>NAME</th>
                    <th scope="col" style={{color: "indigo"}}>CONTACT NO.</th>
                    <th scope="col" style={{color: "indigo"}}>EMAIL</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {employee_data.map((item)=>{
                  return(
                  <tr>
                    <th scope="row">{item.employee_number}</th>
                    <td>{item.name}</td>
                    <td>{item.cel_no}</td>
                    <td>{item.email}</td>
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
                          <DropdownItem style={{backgroundColor: "transparent"}} onClick={e => localStorage.setItem('emp_id', item.employee_id)}> 
                              <Link to="/admin/ManageRecords" style={{color: "black"}}>Manage Records</Link>
                          </DropdownItem>
                          {/* <DropdownItem style={{backgroundColor: "transparent"}}>
                              <Link to="/admin/ManageFiles" style={{color: "black"}}>Manage Files</Link> 
                          </DropdownItem>
                          <DropdownItem style={{backgroundColor: "transparent"}}>
                              <Link to="/admin/AttendanceLogs" style={{color: "black"}}>View Attendance Logs</Link>
                          </DropdownItem> */}
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
        {/* Dark table */}
        
         
      </Container>
    </>
  );
};

export default Tables;
