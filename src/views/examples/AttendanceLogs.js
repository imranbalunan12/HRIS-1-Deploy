
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import HeaderVAL from "components/Headers/HeaderVAL";

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Light Bootstrap Dashboard PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
      "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []);
  return (
    <>
      <div
        style={{ height: `600px` }}
        className="map-canvas"
        id="map-canvas"
        ref={mapRef}
      ></div>
    </>
  );
};

const Maps = () => {
  return (
    <>
      <HeaderVAL />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Attendance Logs Table</h2>
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
                    <th scope="col" style={{color: "indigo"}}>DATE</th>
                    <th scope="col" style={{color: "indigo"}}>TIME IN</th>
                    <th scope="col" style={{color: "indigo"}}>TIME OUT</th>
                    <th scope="col" style={{color: "indigo"}}>HOURS RENDERED</th>
                    <th scope="col" style={{color: "indigo"}}>LABEL</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      05/26/2021
                    </th>
                    <td>07:55:07</td>
                    <td>
                      17:00:04
                    </td>
                    <td>
                      8hours
                    </td>
                  
                    <td  >
                        <Badge style={{backgroundColor: "#FB9400", color: "white"}}>Late</Badge>
                    </td>
                  </tr>
                  <tr>
                       
                    <th scope="row">
                      05/26/2021
                    </th>
                    <td>07:55:07</td>
                    <td>
                      17:00:04
                    </td>
                    <td>
                      8hours
                    </td>
                    
                    <td >
                      <Badge style={{backgroundColor: "red", color: "white"}}>Absent</Badge>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row">
                      05/26/2021
                    </th>
                    <td>07:55:07</td>
                    <td>
                      17:00:04
                    </td>
                    <td>
                      8hours
                    </td>
                   
                    <td>
                      <Badge style={{backgroundColor: "#315A93", color: "white"}}>INCOMPLETE</Badge>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row">
                      05/26/2021
                    </th>
                    <td>07:55:07</td>
                    <td>
                      17:00:04
                    </td>
                    <td>
                      8hours
                    </td>
                   
                    <td>
                      <h3>-</h3>
                    </td>
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
                        href="#pablo"
                       
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        
                      >
                        3
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

export default Maps;
