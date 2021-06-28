import React from "react";

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
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table for philhealth*/}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h3 className="mb-0">PhilHealth Deductions</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">EMPLOYEE NUMBER</th>
                    <th scope="col">NAME</th>
                    <th scope="col">CONTACT NO.</th>
                    <th scope="col">EMAIL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>RJ Lopez</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Em Balunan</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Carlo Cobbarubias</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Dave Yatco</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Arvin Iballa</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
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
        {/* table for pag ibig */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h3 className="mb-0">Pag-IBIG Deductions</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">EMPLOYEE NUMBER</th>
                    <th scope="col">NAME</th>
                    <th scope="col">CONTACT NO.</th>
                    <th scope="col">EMAIL</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>RJ Lopez</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Em Balunan</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Carlo Cobbarubias</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Dave Yatco</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Arvin Iballa</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
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
        {/* table for SSS */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h3 className="mb-0">SSS Deductions</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">EMPLOYEE NUMBER</th>
                    <th scope="col">NAME</th>
                    <th scope="col">CONTACT NO.</th>
                    <th scope="col">EMAIL</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>RJ Lopez</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Em Balunan</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Carlo Cobbarubias</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Dave Yatco</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Arvin Iballa</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
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
        {/* table for BIR */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom: "50px"}}>
              <CardHeader className="border-0">
                <h3 className="mb-0">BIR Deductions</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">EMPLOYEE NUMBER</th>
                    <th scope="col">NAME</th>
                    <th scope="col">CONTACT NO.</th>
                    <th scope="col">EMAIL</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>RJ Lopez</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Em Balunan</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Carlo Cobbarubias</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Dave Yatco</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>Arvin Iballa</td>
                    <td>+63123456789</td>
                    <td>@gmail.com</td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
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

export default Tables;
