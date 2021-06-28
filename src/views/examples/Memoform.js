import React, {useState, useEffect} from "react";

// reactstrap components
import 'bootstrap';
import api from 'api/api'


import {
     Button, Row, 
    Container,Col,FormGroup, DropdownMenu, UncontrolledDropdown, DropdownToggle, Dropdown,
    Input, CustomInput, Modal, ModalHeader, ModalBody, Label, ModalFooter, Card, CardText,
    CardBody, CardTitle
} from "reactstrap";
import Moment from 'moment';

// core components
import UserHeader from "components/Headers/UserHeader.js";
import Memo from "../examples/Memo"


function Memoform  ( completeMemo )  {
   //----------Memo---------------------
    const getToken = localStorage.getItem('token')
    const [announce_subject, setAnnouncementSubj] = useState(null);
    const [announce_content, setAnnouncementContent] = useState(null);
    const [announceData, setAnnounceData] = useState([])



      const handleTo = e => {
        //setMemo_Receiver_Employee(e.target.value);
      };
      const handleSubject = e => {
        setAnnouncementSubj(e.target.value);
      };
      const handleContent = e => {
        setAnnouncementContent(e.target.value);
      };


      const getAnnouncement = () => {
        api.get(`engagements/announcement/`, {headers: {Authorization: `Token ${getToken}`}})
        .then(res=>{
            console.log(res)
            setAnnounceData(res)
            

        })
        .catch(err=>{
            console.log(err)
        })
    }
   

      const handleSubmit = e => {
        e.preventDefault();
        const submit = {
            announce_subject,
            announce_content
        }
        api.post('engagements/announcement/', submit, {headers: {Authorization: `Token ${getToken}`}})
        .then(()=>{
            return api.get('engagements/announcement/', {headers: {Authorization: `Token ${getToken}`}})
        })
        .then(res=>{
            console.log(res)
            toggleFinished();
            setAnnounceData(res)
        })
        .catch(err=>{
            console.log(err)
        })
       
      };
   //--------------------------------------------

   const [dropdownOpen, setDropdownOpen] = useState(false);

   const toggledrop = () => setDropdownOpen(prevState => !prevState);

   const [modal, setModal] = useState(false);
   const [nestedModal, setNestedModal] = useState(false);
   const [closeAll, setCloseAll] = useState(false);
   const [modalDone, setModalDone] = useState(false);

   const toggle = () => setModal(!modal);

   const toggleNested = () => {
     setNestedModal(!nestedModal);
     setCloseAll(false);
   }
   const toggleAll = () => {
     setNestedModal(!nestedModal);
     setCloseAll(true);
   }

   const toggleFinished = () => {
     setModalDone(!modalDone);
     setCloseAll(true);
   }

     
   useEffect(()=>{
    getAnnouncement()
  }, [])


   

  return (
    <>
      <UserHeader />
      {/* Page content */}
     
      <Container className="mt--9 " fluid>
        <div class="d-flex flex-row-reverse mx-1 mb-3">       
                <Button color="success" type="button" onClick={toggle} style={{marginTop:"60px", marginBottom: "10px"}}>Create Announcement</Button>


                    <Modal backdrop={false} isOpen={modal} toggle={toggle} onSubmit={handleSubmit}  size="lg" centered>
                        <ModalHeader ><h2>Create Announcements
                                    <button type="button" onClick={toggleNested} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-550px"}}>
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button></h2>
                        
                        </ModalHeader>
                         <ModalBody>
                                    {/* <Row>
                                        <Col sm="12">
                                            <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Send to:
                                                </label>
                                                <Col sm="9">
                                                    <Input
                                                        name="sendTo"
                                                        label="sendTo"
                                                        variant="filled"
                                                        onChange={handleTo}
                                                        
                                                        required
                                                    >
                                                    </Input>

                                                        <div style={{position:'absolute', left:520, top:2, height:20}}>
                                                        <UncontrolledDropdown>
                                                                <Dropdown isOpen={dropdownOpen} toggle={toggledrop}>
                                                                    <DropdownToggle
                                                                        tag="span"
                                                                        data-toggle="dropdown"
                                                                        aria-expanded={dropdownOpen}
                                                                    >
                                                                        <Button style={{height: "40px", width: "40px", borderRadius: "200px", backgroundColor: "#457B9D"}}class=" dropdown-toggle"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" >
                                                                            <i className="ni ni-fat-add" style={{marginLeft: "-15px",  marginTop: "-6px",fontSize: "30px", color: "white"}}></i>
                                                                        </Button>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu right style={{marginTop: "10px",}} >
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> Everyone
                                                                        </Label><br/>
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> HR Department
                                                                        </Label><br/>
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> Admin
                                                                        </Label><br/>
                                                                        <Label check style={{marginLeft: "30px"}}>
                                                                        <Input type="checkbox" /> IT Department
                                                                        </Label>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </UncontrolledDropdown>    
                                                        </div>
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                     </Row> */}
                                     <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-2 col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Subject:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                
                                                     name="subj"
                                                     label="subj"
                                                     variant="filled"
                                                     onChange={handleSubject}
                                                     
                                                     required
                                                    
                                                   
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
                                                    for="validationCustom01"
                                                >
                                                    Message:
                                                </label>
                                                <Col sm="9">
                                            
                                                    <div className="pl-lg-0">
                                                        <Input
                                                        
                                                            id="validationCustom01"
                                                            class="form-control"
                                                            name="messg"
                                                            label="messg"
                                                            rows="6"
                                                            type="textarea"
                                                            onChange={handleContent}
                                                           
                                                            required
                                                        />            
                                                    </div>
                                                </Col >
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {/* <Row style={{ float: "right"}}>

                                        <Col sm="9">
                                            <div >
                                            <FormGroup row>
                                                <CustomInput 
                                                    type="file" 
                                                    id="exampleCustomFileBrowser" 
                                                    name="customFile" 
                                                    label="Upload Image"
                                                    onChange={handleImage}
                                                    >
                                                    
                                                    </CustomInput>
                                            </FormGroup>
                                        
                                            </div>
                                        </Col>
                                        </Row> */}
                        <br />
                        
                        
                                    <Modal backdrop={false} isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined} centered>
                                        <ModalHeader><h2>Cancel Announcement
                                                <button type="button" onClick={toggleNested} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-260px"}}>
                                                    <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                                </button></h2>

                                        </ModalHeader>
                                            <ModalBody> 
                                                All changes will not be saved.<br/>
                                                Are you sure you want to cancel?
                                            </ModalBody>
                                        <ModalFooter>
                                            <Button color="success" onClick={toggleAll}>Ok</Button>
                                        </ModalFooter>
                                    </Modal>
                        </ModalBody>
                                            <ModalFooter>
                                                <Button color="success" onClick={handleSubmit}>Send</Button>
                                                    <Modal backdrop={false} isOpen={modalDone} toggle={toggleFinished} onClosed={closeAll ? toggle : undefined} centered>
                                                        <ModalHeader><h2>Success!
                                                                <button type="button" onClick={toggleFinished} class="close" data-dismiss="modal" aria-label="Close" style={{marginRight: "-390px"}}>
                                                                    <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                                                </button></h2>

                                                        </ModalHeader>
                                                            <ModalBody> 
                                                               Announcement has been sent.<br/>
                                                               
                                                            </ModalBody>
                                                        <ModalFooter>
                                                            <Button color="success" type='submit' onClick={toggleFinished}>Ok</Button>
                                                        </ModalFooter>
                                                    </Modal>
                                            </ModalFooter>
                    </Modal>
                            
        </div> 
        {announceData.map((announce, index)=>{
            return(

        
        <Container fluid className={announce.isComplete ? 'memo-column complete' : 'memo-column'}
        key={index} style={{ marginBottom:20, display: "inline-grid", }} >
            

     
                        
                            <Col md="12" >
                                        <Card style={{padding:26}}>
                                        <CardTitle onClick={() => completeMemo(announce.announce_id)} tag="h2">{announce.announce_subject}</CardTitle>
                                
                                        
                                          <div class="d-flex mt--3" >
                                            <label class="p-2" style={{fontSize:10, color:'gray'}}>from: {announce.announce_poster_role} </label>
                                            <label class="ml-auto p-2" style={{fontSize:10, color:'gray'}}>{Moment(announce.announce_date).format('MMM DD, Y | hh:mm a')}</label>
                                          </div>
                                        
                                        
                                      
                                       
                                        {/*<CardImg top width="100%" src={hbd} alt="Card image cap"  />*/}
                                  
                                        <CardBody>
                                        
                                        <CardText key={announce.announce_id} onClick={() => completeMemo(announce.announce_id)}>{announce.announce_content}</CardText>
                                        
                                        </CardBody>
                                        <span class="d-flex flex-row-reverse" >
                                        {/*<Button class="btn-danger" style={{background:'#E63946', color:'white', marginTop: "30px"}} onClick={() => removeMemo(announce.announce_id)}>Delete</Button>*/}
                                        </span>
                                        </Card>     
                            </Col>
                      


            {/* <div key={memo.id} onClick={() => completeMemo(memo.id)}>
                {memo.text}
            </div>
            <div className='icons'>
                <button
                onClick={() => removeMemo(memo.id)}
                className='delete-icon'
                />
                <button
                onClick={() => setEdit({ id: memo.id, value: memo.text })}
                className='edit-icon'
                />
            </div> */}

        </Container>
        )
    })}

      </Container>
      
    </>
  )
}


export default Memoform;
