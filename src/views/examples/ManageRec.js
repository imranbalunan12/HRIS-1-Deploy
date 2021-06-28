
import React, {useState, useEffect} from "react";

// reactstrap components
import 'bootstrap';
import Line42 from '../../assets/img/brand/Line42.png';
import Ellipse10 from '../../assets/img/brand/Ellipse10.png';
import AddTimeline from '../../assets/img/brand/AddTimeline.png';


import {
  
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import { v4 as uuidv4 } from 'uuid';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import HeaderMR from "components/Headers/HeaderMR";
import api from "api/api";
import { NavLink } from "react-router-dom";

function ManageRecords  ()  {
  

      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

// ------------------- FOR ADD ROW BTTN
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Name: '' , dateTaken: '', score: ''},
  ]);

  const [inputFields2, setInputFields2] = useState([
    { id: uuidv4(), Name2: '' , dateTaken2: ''},
  ]);

  const [inputFields3, setInputFields3] = useState([
    { id: uuidv4(), empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' },
  ]);

  const [inputFields4, setInputFields4] = useState([
    { id: uuidv4(), Name4: '' , occupation: '', age: '', emp:''},
  ]);

  const [inputFields5, setInputFields5] = useState([
    {id: uuidv4(),  Namechld: '' ,  agechld: ''},
  ]);

  const [inputFields6, setInputFields6] = useState([
    {id: uuidv4(),  Nameref: '' ,  occref: '', empref:''},
  ]);

  const [inputFields7, setInputFields7] = useState([
    {id: uuidv4(),  NameOrg: '' ,  descOrg: '',},
  ]);

  const [inputFields8, setInputFields8] = useState([
    {id: uuidv4(),  NatureOff: '' ,  courtJuri: '', dateFiled: ''}
  ]);


  // const handleAddFields = () => {
  //   setInputFields([...inputFields, { Name: '', dateTaken: '', score: ''}])
  // }
 
  // const handleAddFields2 = () => {
  //   setInputFields2([...inputFields2, { Name2: '', dateTaken2: '',}])
  // }

  // const handleAddFields3 = () => {
  //   setInputFields3([...inputFields3, { empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' }])
  // }

  // const handleAddFields4 = () => {
  //   setInputFields4([...inputFields4, { Name4: '', occupation: '', age: '', emp:''}])
  // }

  // const handleAddFields5 = () => {
  //   setInputFields5([...inputFields5, { Namechld: '', agechld: ''}])
  // }

  // const handleAddFields6 = () => {
  //   setInputFields6([...inputFields6, { Nameref: '' ,  occref: '', empref:''}])
  // }

  // const handleAddFields7 = () => {
  //   setInputFields7([...inputFields7, { NameOrg: '' ,  descOrg: '',}])
  // }

  // const handleAddFields8 = () => {
  //   setInputFields8([...inputFields8, {NatureOff: '' ,  courtJuri: '', dateFiled: ''}])
  // }


  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleChangeInput2 = (id, event) => {
    const newInputFields2 = inputFields2.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields2(newInputFields2);
  }

  const handleChangeInput3 = (id, event) => {
    const newInputFields3 = inputFields3.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields3(newInputFields3);
  }

  const handleChangeInput4 = (id, event) => {
    const newInputFields4 = inputFields4.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields4(newInputFields4);
  }

  const handleChangeInput5 = (id, event) => {
    const newInputFields5 = inputFields5.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields5(newInputFields5);
  }

  const handleChangeInput6 = (id, event) => {
    const newInputFields6 = inputFields6.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields6(newInputFields6);
  }

  const handleChangeInput7 = (id, event) => {
    const newInputFields7 = inputFields7.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields7(newInputFields7);
  }

  const handleChangeInput8 = (id, event) => {
    const newInputFields8 = inputFields8.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields8(newInputFields8);
  }

  

// ---------------------------------

//-------FOR SALARY-----------------
const [inputFields9, setInputFields9] = useState([
    {id: uuidv4(),  prevSal: '' ,  amountInc: '', DOI: '', descSal:''}
  ]);


const handleAddFields9 = () => {
    setInputFields9([...inputFields9, { prevSal: '' ,  amountInc: '', DOI: '', descSal:''}])
  }

  const handleChangeInput9 = (id, event) => {
    const newInputFields9 = inputFields9.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields9(newInputFields9);
  }

  const getId = localStorage.getItem('emp_id')
  const getToken = localStorage.getItem('token')
  const getExamId = localStorage.getItem('exam_id')
  const [personalData, setPersonalData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [ExamsTakenData, setExamsTakenData] = useState([])
  const [SkillsData, setSkillsData] = useState([])
  const [SeminarData, setSeminarData] = useState([])
  const [JobHistoryData, setJobHistoryData] = useState([])
  const [FamilyData, setFamilyData] = useState([])
  const [SiblingData, setSiblingData] = useState([])
  const [ChildrenData, setChildrenData] = useState([])
  const [MarriedData, setMarriedData] = useState([])
  const [MedicalData, setMedicalData] = useState([])
  const [RefData, setRefData] = useState([])
  const [OrgData, setOrgData] = useState([])
  const [OffenseData, setOffenseData] = useState([])
  const [EmergencyData, setEmerencyData] = useState([])
  const [SignatureData, setSignatureData] = useState([])
  const [departmentData, setDepartment_data] = useState([])
  const [supervisorData, setSupervisorData] = useState([])
  const [jobData, setJobData] = useState([])
  const [company_data, setCompanyData] = useState([])

  //personal_info
  const [position, setPosition] = useState(null)
  const [employee_number, setEmployee_number] = useState(null)
  const [sa_no, setSa_no] = useState(null)
  const [email, setEmail] = useState(null)
  const [job_id, setJob_id] = useState(null)
  const [supervisor, setSupervisor] = useState(null)
  const [department_id, setDepartment_id] = useState(null)
  const [department_role, setDepartmentRole] = useState(null)
  const [company_id, setCompany_id] = useState(null)
  const [date_employed, setDate_employed] = useState(null)
  const [employee_status, setEmployee_status] = useState(null)
  const [salary, setSalary] = useState(null)
  const [sick_leave_count, setSick_Leave_Count] = useState(null)
  const [vac_leave_count, setVaca_Leave_Count] = useState(null)
  const [name, setName] = useState(null)
  const [nickname, setNickname] = useState(null)
  const [other_name, setOther_name] = useState(null)
  const [employee_image, setEmployee_image] = useState(null)
  const [civil_status, setCivil_status] = useState(null)
  const [citizenship, setCitizenship] = useState(null)
  const [gender, setGender] = useState(null)
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [date_of_birth, setDate_of_birth] = useState(null)
  const [place_of_birth, setPlace_of_birth] = useState(null)
  const [city_address, setCity_address] = useState(null)
  const [prov_address, setProv_address] = useState(null)
  const [tel_no, setTel_no] = useState(null)
  const [cel_no, setCel_no] = useState(null)
  const [religion, setReligion] = useState(null)
  const [acr_no, setAcr_no] = useState(null)
  const [acr_date, setAcr_date] = useState(null)
  const [dept_labor_no, setDept_labor_no] = useState(null)
  const [dept_labor_date, setDept_labor_date] = useState(null)
  const [tin_no, setTin] = useState(null)
  const [pagibig_no, setPag_ibig] = useState(null)
  const [sss_no, setSss] = useState(null)
  const [philhealth_no, setPhil_health] = useState(null)

  //exams-taken
  
  const [exam_name, setExam_name] = useState(null)
  const [date_taken, setDate_taken] = useState(null)
  const [result, setResult] = useState(null)

   //seminars-taken
   const [seminar_name, setSeminar_name] = useState(null)
   const [seminar_date, setSeminar_date] = useState(null)

   
  const getSignature = () => {
    api.get(`employees/signature/${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setSignatureData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getEmergency = () => {
    api.get(`employees/emergency/${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setEmerencyData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getOffense = () => {
    api.get(`employees/offense/${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setOffenseData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getOrg = () => {
    api.get(`employees/org?employee_id=${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setOrgData(res[0])
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getRef = () => {
    api.get(`employees/reference?employee_id=${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setRefData(res[0])
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getMedical = () => {
    api.get(`employees/med-history/${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setMedicalData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getChildren = () => {
    api.get(`employees/children?employee_id=${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setChildrenData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getMarried = () => {
    api.get(`employees/married/${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setMarriedData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getSibling= () => {
    api.get(`employees/sibling?employee_id=${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setSiblingData(res[0])
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getFamily = () => {
    api.get(`employees/family/${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setFamilyData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getJobHistory = () => {
    api.get(`employees/job-history?employee_id=${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setJobHistoryData(res[0])
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getSeminar= () => {
    api.get(`employees/seminars-taken?employee_id=${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
     
      setSeminarData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const getSkills= () => {
    api.get(`employees/skills/${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
      setSkillsData(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const getPersonalInfo = () => {
    api.get(`employees/list/${getId}`,  {headers: {Authorization: `Token ${getToken}`}})
    .then(res => {
      
      setPersonalData(res)
    })
  }
  const getEducBg = () => {
    api.get(`employees/education/${getId}`,  {headers: {Authorization: `Token ${getToken}`}})
    .then(res => {
      
      setEducationData(res)
    })
  }

  const getExamsTaken= () => {
    api.get(`employees/exams-taken?employee_id=${getId}`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
        if(res){
          console.log(res)
          setExamsTakenData(res)
        }      
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const btnUpdateExam = () => {
    const examsTaken = {
      employee_id: getId,
      exam_name,
      date_taken,
      result,
    }
    api.put(`employees/exams-taken/${getExamId}/`, examsTaken, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=>{
      
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const btnUpdatePersonalInfo = () => {
   const personalInfo = {
     employee_id: getId,
     job_id: personalData.job_id,
     supervisor: personalData.supervisor,
     department_id: personalData.department_id,
     department_role: personalData.department_role,
     company_id: personalData.company_id,
     date_employed,
     employee_status: personalData.employee_status,
     salary: personalData.salary,
     sick_leave_count: personalData.sick_leave_count,
     vac_leave_count: personalData.vac_leave_count,
     name,
     nickname,
     other_name,
     employee_image: personalData.employee_image,
     civil_status,
     citizenship: personalData.citizenship,
     gender,
     weight,
     height,
     date_of_birth,
     place_of_birth,
     city_address,
     prov_address,
     tel_no,
     cel_no,
     religion,
     acr_no: personalData.acr_no,
     acr_date: personalData.acr_date,
     dept_labor_no: personalData.dept_labor_no,
     dept_labor_date: personalData.dept_labor_date,
     tin_no,
     sss_no,
     pagibig_no,
     philhealth_no,
     email,
   }
   api.put(`employees/list/${getId}/`, personalInfo, {headers: {Authorization: `Token ${getToken}`}})
   .then(res=>{
     
     setPersonalData(res)
   })
   .catch(error=>{
     console.log(error)
   })
 }


 const btnUpdateWorkInfo = () => {
   const workInfo = {
     employee_id: getId,
     job_id,
     supervisor: personalData.supervisor,
     department_id,
     department_role,
     company_id,
     date_employed: personalData.date_employed,
     employee_status,
     salary: personalData.salary,
     sick_leave_count,
     vac_leave_count,
     name: personalData.name,
     nickname: personalData.nickname,
     other_name: personalData.other_name,
     employee_image: personalData.employee_image,
     civil_status: personalData.civil_status,
     citizenship: personalData.citizenship,
     gender: personalData.gender,
     weight: personalData.weight,
     height: personalData.height,
     date_of_birth: personalData.date_of_birth,
     place_of_birth: personalData.place_of_birth,
     city_address: personalData.city_address,
     prov_address: personalData.prov_address,
     tel_no: personalData.tel_no,
     cel_no: personalData.cel_no,
     religion: personalData.religion,
     acr_no: personalData.acr_no,
     acr_date: personalData.acr_date,
     dept_labor_no: personalData.dept_labor_no,
     dept_labor_date: personalData.dept_labor_date,
     tin_no: personalData.tin_no,
     sss_no: personalData.sss_no,
     pagibig_no: personalData.pagibig_no,
     philhealth_no: personalData.philhealth_no,
     email: personalData.email,
   }
   console.log(workInfo)
   api.put(`employees/list/${getId}/`, workInfo, {headers: {Authorization: `Token ${getToken}`}})
   .then(res=>{
     
     setPersonalData(res)
   })
   .catch(error=>{
     console.log(error)
   })
 }

 //getPosition
 const getPosition = async () => {
  api.get(`jobs/dropdown`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=> {
    
    setJobData(res)
  })
  .catch(err => {
    console.log(err)
  })
}
//getDepartment
const getDepartment= async () => {
  api.get(`departments/dropdown`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=> {
    
    setDepartment_data(res)
  })
  .catch(err => {
    console.log(err)
  })
}
//getCompany
const getCompany = async () => {
  api.get(`companies/dropdown`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=> {
    
    setCompanyData(res)
  })
  .catch(err => {
    console.log(err)
  })
}
//getSupervisor
const getSupervisor = async () => {
  api.get(`supervisor/dropdown`, {headers: {Authorization: `Token ${getToken}`}})
  .then(res=> {
    
    setSupervisorData(res)
  })
  .catch(err => {
    console.log(err)
  })
}




  useEffect(()=>{
    getCompany()
    getPosition()
    getDepartment()
    getSupervisor()
    getPersonalInfo()
    getEducBg()
    getExamsTaken()
    getSkills()
    getSeminar()
    getJobHistory()
    getFamily()
    getSibling()
    getMarried()
    getChildren()
    getMedical()
    getRef()
    getOrg()
    getOffense()
    getEmergency()
    getSignature()
  }, [])



  return (
    <>
      <HeaderMR />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    
                    <h2 className="mb-0">A. PERSONAL INFORMATION</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <div className="pl-lg-0">
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-sa"
                          >
                            S.A. Number:
                          </label>
                          <Col sm="8">
                          <Input
                           class="form-control"
                           id="input-sa"
                           type="text"
                           value={personalData.sa_no}
                           onChange={e=> setSa_no(e.target.value)}
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empNo"
                          >
                           Employee Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empNo"
                            type="text"
                            value={personalData.employee_number}
                            onChange={e=> setEmployee_number(e.target.value)}
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-dateemp"
                          >
                              Date Employed:
                          </label>
                          <Col sm="5">
                    
                            <Input
                            
                              type="date"
                              name="date"
                              id="input-dateemp"
                              placeholder='YYYY-MM-DD'
                              defaultValue={personalData.date_employed}
                              onChange={e=> setDate_employed(e.target.value)}
                            />
                        
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-othName"
                          >
                              <span style={{display: "inline-flex"}}>Suffix</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-othName"
                            type="text"
                            placeholder="(ex. Jr. Sr. III II )" 
                            defaultValue={personalData.other_name}
                            onChange={e=> setOther_name(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-name"
                          >
                            Name (LN,FN,MN):
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-name"
                            type="text"
                            defaultValue={personalData.name}
                            onChange={e=> setName(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-DoB"
                          >
                            <span style={{display: "inline-flex"}}>Date of<br/>Birth:</span>
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-DoB"
                            type="date"
                            placeholder='YYYY-MM-DD'
                            defaultValue={personalData.date_of_birth}
                          
                           
                            onChange={e=> setDate_of_birth(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-email"
                          >
                            Email:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-email"
                            type="text"
                            defaultValue={personalData.email}
                            onChange={e=> setEmail(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-placeBirth"
                          >
                            Place of Birth:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-placeBirth"
                            type="text"
                            defaultValue={personalData.place_of_birth}
                            onChange={e=> setPlace_of_birth(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nickName"
                          >
                            Nickname:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nickName"
                            type="text"
                            defaultValue={personalData.nickname}
                            onChange={e=> setNickname(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-landNo"
                          >
                            Landline Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-landNo"
                            type="text"
                            defaultValue={personalData.tel_no}
                            onChange={e=> setTel_no(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Weight"
                          >
                            Weight:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-Weight"
                            type="text"
                            defaultValue={personalData.weight}
                            onChange={e=> setWeight(e.target.value)}
                          />
                          </Col >
                          
                          <label
                            class="col-sm-2 col-form-label"
                            htmlFor="input-Height"
                          >
                            <span style={{display: "inline-flex"}}>Height:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-first-Height"
                            type="text"
                            defaultValue={personalData.height}
                            onChange={e=> setHeight(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-cpNo"
                          >
                            Cellphone Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-cpNo"
                            type="text"
                            defaultValue={personalData.cel_no}
                            onChange={e=> setCel_no(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Religion"
                          >
                            Religion:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            defaultValue={personalData.religion}
                            onChange={e=> setReligion(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="gender"
                          >
                            Gender:
                          </label>
                          <Col sm='3 '>
                          <FormGroup>
                            <Input 
                            type="select" 
                            name="select" 
                            id="gender"
                            defaultValue={personalData.gender}
                            onChange={e=> setGender(e.target.value)}>
                            
                            <option disabled>Select</option>
                              <option>Male</option>
                              <option>Female</option>
                         
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-cityAdd"
                          >
                           <span style={{display: "inline-flex"}}>City<br/>Address:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            defaultValue={personalData.city_address}
                            onChange={e=> setCity_address(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-provAdd"
                          >
                            Provincial Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-cpNo"
                            type="text"
                            defaultValue={personalData.prov_address}
                            onChange={e=> setProv_address(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* Need Ayusin */}
              

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-civStatus"
                          >
                            Civil Status:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="select" 
                              name="select" 
                              id="input-civStatus"
                              defaultValue={personalData.civil_status}
                              onChange={e=> setCivil_status(e.target.value)}>
                            <option disabled>Select</option>
                              <option >Single</option>
                              <option>Married</option>
                              <option>Widow</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6" >
                        <button type="button" class="btn btn-success" onClick={btnUpdatePersonalInfo}>Save</button>
                    </span>
                 
                  </div>

  {/* EDUCATIONAL BG */}
               
                    <Row >
                      <Col xs="8">
                        <h1 className="mb-5 mt-5" >B. EDUCATIONAL BACKGROUND</h1>
                      </Col>
                    </Row>
             
                  
                
                  <div className="pl-lg-0">
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-primSchool"
                          >
                           Primary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primSchool"
                            type="text"
                            value={educationData.primary_school}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-secondSchool"
                          >
                           Secondary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondSchool"
                            type="text"
                            value={educationData.sec_school}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-primAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primAddSchool"
                            type="text"
                            value={educationData.primary_address}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-secondAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondAddSchool"
                            type="text"
                            value={educationData.sec_address}
                            disabled

                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGradPrim"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input 
                            type="select" 
                            name="select" 
                            id="yearGradPrim" 
                            placeholder="select" 
                            value={educationData.primary_grad}  
                            disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGradSecond"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input 
                            type="select" 
                            name="select" 
                            id="yearGradSecond" 
                            placeholder="select"
                            value={educationData.sec_grad}    
                            disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
          {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-4"></h1>
                      </Col>
                   </Row>
         {/* ---------------------------------------------------- */}

                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-college"
                          >
                          College:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-college"
                            type="text"
                            value={educationData.col_school} 
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-gradSch"
                          >
                           Graduate School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-gradSch"
                            type="text"
                            value={educationData.grad_school} 
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addCollSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addCollSch"
                            type="text"
                            value={educationData.col_address} 
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addGradSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addGradSch"
                            type="text"
                            value={educationData.grad_address} 
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degColl"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degColl"
                            type="text"
                            value={educationData.col_degree} 
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degGrad"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degGrad"
                            type="text"
                            value={educationData.grad_degree} 
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearColl"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" 
                            name="select" 
                            id="yearColl" 
                            value={educationData.col_grad} 
                            disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGrad"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input 
                            type="select" 
                            name="select" 
                            id="yearGrad" 
                            placeholder="select" 
                            value={educationData.grad_grad} 
                            disabled> 
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degGrad"
                          >
                           Others:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degGrad"
                            type="text"
                            
                            value={educationData.others} 
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">EXAMINATIONS TAKEN</h1>
                      </Col>
                   </Row>
                    
                   {ExamsTakenData.map((item)=>{
                      return(  
                       <div>
                
                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                      
                        <FormGroup row>
                       
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-examName"
                          >
                            Name:
                          </label>
                          <Col sm="8">
                              <Input
                                  class="form-control"
                                  id="input-examName"
                                  name="Name"
                                  label="Name"
                                  defaultValue={item.exam_name}
                                  placeholder={item.exam_name} 
                                  onChange={(e) => setExam_name(e.target.value)}
                                  onClick={e=> localStorage.setItem('exam_id', item.exam_id)}
                               
                                />
                            </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-examTaken"
                          >
                            Date Taken:
                          </label>
                            <Col sm="5" >
                                <Input
                                  type="date"
                                  class="form-control"
                                  id="input-examTaken"
                                  name="dateTaken"
                                  label="Name"
                                  defaultValue={item.date_taken}
                                  placeholder={item.date_taken} 
                                  onChange={e => setDate_taken(e.target.value)}
                                  onClick={e=> localStorage.setItem('exam_id', item.exam_id)}
                                  
                         
                                  
                                  
                                />
                             </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                         
                    <Row style={{display: "inline-flex", width: "100%"}}>
                        <Col  sm="6" >
                          <FormGroup row>
                              <label
                            
                                class="col-sm-3 col-form-label"
                                htmlFor="input-scoreExam"
                              >
                                Score:
                              </label>
                             <Col sm="5">
                                <Input
                                    class="form-control"
                                    id="input-scoreExam"
                                    name="score"
                                    variant="filled"
                                    defaultValue={item.result}
                                    placeholder={item.result} 
                                    onChange={e => setResult(e.target.value)}
                                    onClick={e=> localStorage.setItem('exam_id', item.exam_id)}
                                />
                             </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                        
                      <span class="d-flex flex-row-reverse mx-6"  >
                           <button type="button" class="btn btn-success" onClick={btnUpdateExam}>Save</button>
                      </span>
                       
                      </div>
                       )
                      })}
                      
                   
                   {/* <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-examName"
                          >
                            Name:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-examName"
                            type="text"
                            placeholder="Lorem Exam"
                    
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                       
                   <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-examTaken"
                          >
                            Date Taken:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="3" >
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-examTaken"
                            type="date"
                  
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col  md="1" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-scoreExam"
                          >
                            Score:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="2">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-scoreExam"
                            type="text"
                            placeholder="98%"
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>    */}
                         
 
                     
                      

                      
                   
                

                

                    
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">OTHER SKILLS / MACHINES OPERATED</h1>
                      </Col>
                   </Row>
                   
                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-skills"
                            
                          >
                            Skills:
                          </label>
                          <Col  >
                          <Input
                            class="form-control"
                            id="input-skills"
                            type="text"
                            value={SkillsData.skill_name} 
                            disabled
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">SEMINARS / TRAININGS ATTENDED</h1>
                      </Col>
                   </Row>

                    {SeminarData.map((item)=>{
                      return(

                   
                    <div>
                             <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nameSeminar"
                          >
                            Name:
                          </label>
                     
                        
                      <Col md="9">
                    
                          <Input
                                class="form-control"
                                id="nameSeminar"
                                name="Name2"
                                label="Name"
                                defaultValue={item.seminar_name}
                                onChange={e=> setSeminar_name(e.target.value)} 
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-seminarTaken"
                          >
                            Date Taken:
                          </label>
                     
                      
                      <Col sm="5">
                     
                          <Input
                            
                                  type="date"
                                  class="form-control"
                                  id="dateTaken"
                                  name="dateTaken2"
                                  label="Name"
                                  defaultValue={item.seminar_date}
                                  onChange={e=> setSeminar_date(e.target.value)} 
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                    <span class="d-flex flex-row-reverse mx-6"  >
                            <button type="button" class="btn btn-success" >Save</button>
                    </span>
                    </div>
                    )
                    })}
                   
                   {/* <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-1 col-form-label mr-6 "
                            htmlFor="input-skills"
                          >
                            Skills:
                          </label>
                          <Col sm="10" >
                          <Input
                            class="form-control"
                            id="input-skills"
                            type="text"
                            placeholder="Autocad, Autodesk, MAYA"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">SEMINARS / TRAININGS ATTENDED</h1>
                      </Col>
                   </Row>
                   <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-nameSeminar"
                          >
                            Name:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-nameSeminar"
                            type="text"
                            placeholder="Lorem Exam"
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-seminarTaken"
                          >
                            Date Taken:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="3" >
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-seminarTaken"
                            type="date"
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row> */}
                  
                   
                      
                       
                     
 
                   

                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">C. EMPLOYMENT HISTORY</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}
                      <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3"
                            htmlFor="input-empName"
                          >
                            Employer Name:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                                class="form-control"
                                id="empName"
                                name="empName"
                                label="empName"
                                value={JobHistoryData.employer_name} 
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empAdd"
                          >
                            Address:
                          </label>
                     
                     
                      <Col sm="9">
                     
                          <Input
                             class="form-control"
                             id="empAdd"
                             name="empAdd"
                             label="empAdd"
                             value={JobHistoryData.company_address}
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empTelNo"
                          >
                           Telephone No.:
                          </label>
                          <Col sm="9">
                          <Input
                             class="form-control"
                             id="input-empTelNo"
                             name="empTelNo"
                             label="empTelNo"
                             value={JobHistoryData.company_contact_no}
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empVisor"
                          >
                           Supervisor:
                          </label>
                          <Col sm="9">
                          <Input
                                class="form-control"
                                id="input-empVisor"
                                name="empSuVisor"
                                label="empSuVisor"
                                value={JobHistoryData.company_supervisor}
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="empTitle"
                          >
                           Job Title:
                          </label>
                          <Col sm="9">
                          <Input
                               class="form-control"
                               id="empTitle"
                               name="empTitle"
                               label="empTitle"
                               value={JobHistoryData.job_title}
                               disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empStartingIncome"
                          >
                           Starting Income:
                          </label>
                          <Col sm="9">
                          <Input
                              class="form-control"
                              id="input-empStartingIncome"
                              name="empStartIncome"
                              label="empStartIncome"
                              value={JobHistoryData.starting_income}
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empLastIncome"
                          >
                           Last Income:
                          </label>
                          <Col sm="9">
                          <Input
                              class="form-control"
                              id="input-empLastIncome"
                              name="empLastIncone"
                              label="empLastIncone"
                              value={JobHistoryData.last_income}
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="empRFL"
                          >
                            Reason for Leaving:
                          </label>
                     
                       
                      <Col md="9">
                     
                          <Input
                                class="form-control"
                                id="empRFL"
                                name="empRFL"
                                label="empRFL"
                                value={JobHistoryData.reason_leave}
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
               
                    <Row >
                      <Col sm="12" >
                        <FormGroup row >
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            Have you ever terminated in a job?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline" >
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="terminated" 
                              id="inlineRadio1" 
                              checked={JobHistoryData.has_been_terminated ? true : false} 
                              value={true}
                              disabled/>
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="terminated" 
                            id="inlineRadio2" 
                            value={false}
                            checked={JobHistoryData.has_been_terminated ? false : true} 
                            disabled 
                            />
                            <label class="form-check-label" for="inlineRadio2" >NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details"
                          >
                             If yes, state the reason:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    className="form-control-alternative"
                                    id="details"
                                    rows="5"
                                    placeholder="--"
                                    disabled
                                    type="textarea"
                                    value={JobHistoryData.has_terminated_reason}
                                
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                   
{/*                         
                      <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-empName"
                          >
                            Employer Name:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-empName"
                            type="text"
                            placeholder="Lorem Exam"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-empAdd"
                          >
                            Address:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-empAdd"
                            type="text"
                            placeholder="Lorem Exam"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empTelNo"
                          >
                           Telephone No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empTelNo"
                            type="text"
                            placeholder="123-4567"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empVisor"
                          >
                           Supervisor:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empVisor"
                            type="text"
                            placeholder="Chad Wick"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empJO"
                          >
                           Job Title:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empJO"
                            type="text"
                            placeholder="Lorem Engineer"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empStartingIncome"
                          >
                           Starting Income:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empStartingIncome"
                            type="text"
                            placeholder="12,000"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empLastIncome"
                          >
                           Last Income:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empLastIncome"
                            type="text"
                            placeholder="12,000"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-empAdd"
                          >
                            Reason for Leaving:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-empAdd"
                            type="text"
                            placeholder="Lorem Exam"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name" >
                            Have you ever terminated in a job?
                    </label>

                    <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio1" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                    </div>
                    <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio2" value="option2" checked disabled/>
                            <label class="form-check-label" for="inlineRadio2">NO</label>
                    </div>

                    </Row>
                         
                          
                      <Row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name">
                            If yes, state the reason:
                          </label>
                           <Col sm="10">
                                <FormGroup row>
                                
                                  <Col>
                                      <div className="pl-lg-0">
                                            <FormGroup>
                                            
                                              <Input
                                                className="form-control-alternative"
                                                rows="6"
                                                type="textarea"
                                                placeholder="--"
                                                disabled
                                              />
                                            </FormGroup>
                                      </div>
                                  </Col >
                                </FormGroup>
                           </Col>
                       </Row> */}
                       

                       {/* ---------------------------------------------------- */}
                       <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">D. FAMILY BACKGROUND</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}
                      <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-nameFather"
                          >
                          <span style={{display: "inline-flex"}}>Father's<br/>Name:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameFather"
                            type="text"
                            value={FamilyData.father_name}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuFather"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-occuFather"
                            type="text"
                            value={FamilyData.father_occu}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                   
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-bdayFather"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-bdayFather"
                            type="date"
                            value={FamilyData.father_birh}
                            disabled
                        
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageFather"
                            
                          >
                            <span style={{display: "flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageFather"
                            type="text"
                            value={FamilyData.father_age}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empFather"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empFather"
                            type="text"
                            value={FamilyData.father_employer}
                            disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                      {/* ---------------------------------------------------- */}
                      <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                     {/* ---------------------------------------------------- */}

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-nameMother"
                          >
                          <span style={{display: "inline-flex"}}>Mother's<br/>Name:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameMother"
                            type="text"
                            value={FamilyData.mother_name}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuMother"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-occuMother"
                            type="text"
                            value={FamilyData.mother_occu}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-birthdayMother"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-birthdayMother"
                            type="date"
                            value={FamilyData.mother_birth}
                            disabled
                           
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageMother"
                            
                          >
                            <span style={{display: "flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageMother"
                            type="text"
                            value={FamilyData.mother_age}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empMother"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empMother"
                            type="text"
                            value={FamilyData.mother_employer}
                            disabled
                      
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addMother"
                          >
                            Address:
                          </label>
                     
                     
                      <Col md="8">
                   
                          <Input
                            class="form-control "
                            id="input-addMother"
                            type="text"
                            value={FamilyData.family_address}
                            disabled
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row >
                          <label
                            class="col-sm-3"
                            htmlFor="input-telMother"
                          >
                            Telephone No.:
                          </label>
                          <Col sm="8" >
                          <Input
                            class="form-control"
                            id="input-telMother"
                            type="text"
                            value={FamilyData.family_contact_no}
                            disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">BROTHERS & SISTERS</h1>
                      </Col>
                    </Row>

                                
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="nameBrother"
                          >
                            Name:
                          </label>
                     
                     
                      <Col md="9">
                     
                          <Input
                              class="form-control"
                              id="nameBrother"
                              name="Name4"
                              label="Name"
                              value={SiblingData.sibling_name}
                              disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-3 col-form-label"
                            htmlFor="occuBrother"
                          >
                            Occupation:
                          </label>
                     
                      
                      <Col sm="4" >
                          <Input
                              class="form-control"
                              id="occuBrother"
                              name="occupation"
                              label="Name"
                              value={SiblingData.sibling_occu}
                              disabled
                        
                          />
                        </Col>
                                <label
                                  class="col-sm-2 col-form-label"
                                  htmlFor="ageBrother"
                                >
                                  Age:
                                </label>
                        
                          <Col sm="3">
                              <Input
                                  class="form-control"
                                  id="ageBrother"
                                  name="age"
                                  value={SiblingData.sibling_age}
                                  disabled
                              />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>



                    <Row style={{display: "inline-flex", width: "100%"}}> 
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="empBrother"
                          >
                            Employer:
                          </label>
                     
                        
                      <Col md="9">
                    
                          <Input
                              class="form-control"
                              id="empBrother"
                              name="emp"
                              label="Name"
                              value={SiblingData.sibling_employer}
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                 


                    
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IF MARRIED</h1>
                      </Col>
                     </Row>

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="nameSpouse"
                         
                          >
                            Name of Spouse:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="nameSpouse"
                            type="text"
                            value={MarriedData.spouse_name}
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="occuSpouse"
                          
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="occuSpouse"
                            type="text"
                            value={MarriedData.spouse_occu}
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-birthdaySpouse"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-birthdaySpouse"
                            type="date"
                            value={MarriedData.spouse_birth}
                            disabled
                     
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageSpouse"
                            
                          >
                            <span style={{display: "flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageSpouse"
                            type="text"
                            value={MarriedData.spouse_age}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-empSpouse"
                          >
                            Employer Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empSpouse"
                            type="text"
                            value={MarriedData.spouse_employer}
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-spouseAdd"
                          >
                            Address:
                          </label>
                     
                     
                      <Col md="8">
                    
                          <Input
                            class="form-control "
                            id="input-spouseAdd"
                            type="text"
                            value={MarriedData.spouse_address}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
 
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="input-nameChild"
                          >
                            <span style={{display: "Flex"}}>Name of<br/>Child:</span>
                          </label>
                     
                      
                      <Col sm="8" >
                     
                          <Input
                              class="form-control"
                              id="input-nameChild"
                              name="Namechld"
                              label="Name"
                              value={ChildrenData.child_name}
                              disabled
                          />
                          </Col>
                          </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label "
                            htmlFor="input-ageChild"
                          >
                            Age:
                          </label>
                     
                       
                     
                      <Col sm="2">
                      
                          <Input
                           class="form-control"
                           name="input-agechld"
                           id="ageChild"
                           value={ChildrenData.child_age}
                           disabled
                          />
                         
                      </Col>
                      </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">E. MEDICAL HISTORY</h1>
                      </Col>
                     </Row>
                     <Row >
                      <Col sm="12" >
                        <FormGroup row >
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            1. Have you had or do you have illnesses?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline" >
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="illnesses" 
                              id="inlineRadio3" 
                              value={true} 
                              checked={MedicalData.had_illness ? true : false}
                              disabled />
                            <label class="form-check-label" for="inlineRadio3">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="illnesses" 
                              id="inlineRadio4" 
                              value={false} 
                              disabled 
                              checked={MedicalData.had_illness ? false : true}/>
                            <label class="form-check-label" for="inlineRadio4">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details"
                                    rows="5"
                                    disabled
                                    value={MedicalData.illness_details}
                                    type="textarea"
                                
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            2. Have you been hospitalized or under a doctor's care within the past 5 years?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="hospitalized" 
                              id="inlineRadio5" 
                              value={true} 
                              disabled
                              checked={MedicalData.had_illness ? true : false}
                              />
                            <label class="form-check-label" for="inlineRadio5">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="hospitalized" 
                              id="inlineRadio6" 
                              value={false} 
                              disabled 
                              checked={MedicalData.had_illness ? false : true}/>
                            <label class="form-check-label" for="inlineRadio6">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details2"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details2"

                                    rows="5"
                                    placeholder=""
                                    disabled
                                    type="textarea"
                                    value={MedicalData.hospitalized_details}
                                   
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-5 col-form-label"
                            htmlFor="input-first-name"
                          >
                            3. Last Medical Checkup
                          </label>
                      
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="purpose"
                         
                          >
                           Purpose:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="purpose"
                            type="text"
                            value={MedicalData.last_checkup_purpose}
                            disabled
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="place"
                         
                          >
                           Place:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="place"
                            type="text"
                            value={MedicalData.last_checkup_place}
                            disabled
                        
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="date"
                         
                          >
                           Date:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="date"
                            type="date"
                            value={MedicalData.last_checkup_date}
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                   

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-distMarks"
                          >
                            4. Distinguishing Marks:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-distMarks"
                            value={MedicalData.distinguishing_marks}
                            disabled
                            type="text"
                          
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">F. References</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}

                    
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label  "
                            htmlFor="input-Nameref"
                          >
                            Name:
                          </label>
                          <Col sm="9">
                          <Input
                           class="form-control"
                           id="nameRef"
                           name="Nameref"
                           label="Name"
                           value={RefData.ref_name}
                           disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label"
                            htmlFor="input-Occuref"
                          >
                            Occupation:
                          </label>
                          <Col sm="9">
                          <Input
                        id="occRef"
                        class="form-control"
                        name="occref"
                        label="Name"
                        value={RefData.ref_occupation}
                        disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empref"
                          >
                            Employer:
                          </label>
                          <Col sm="9">
                          <Input
                           id="empRef"
                           class="form-control"
                           name="empref"
                           label="Name"
                           value={RefData.ref_employer}
                           disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>



                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">G. ORGANIZATIONS</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}
                   
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-NameOrg"
                          >
                            Organization Name:
                          </label>
                     
                        
                      <Col sm="9">
                    
                          <Input
                                   id="nameOrg"
                                   class="form-control"
                                   name="NameOrg"
                                   label="Name"
                                   value={OrgData.org_name}
                                   disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Namedesc"
                          >
                          Descriptions:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                            id="descOrg"
                            class="form-control"
                            name="descOrg"
                            label="Name"
                            value={OrgData.org_desc}
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>




                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            1. Have you ever been convicted, judicially or administratively of an offense or judicially declared 
                              insolvent, spendthrift, or incapacitated to contract? 
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" name="convicted" 
                              id="inlineRadio7" 
                              value={true}
                              checked={OffenseData.convicted  ? true : false}
                              disabled />
                            <label class="form-check-label" for="inlineRadio7">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" name="convicted" 
                              id="inlineRadio8" 
                              value={false}
                              disabled 
                              checked={OffenseData.convicted  ? false : true} />
                            <label class="form-check-label" for="inlineRadio8">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>
                     
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-NameOrg"
                          >
                            Nature of Offense:
                          </label>
                      <Col sm="9">
                    
                          <Input
                                 class="form-control"
                                 name="NatureOff"
                                 label="Name"
                                 value={OffenseData.offense_details}
                                  disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Namedesc"
                          >
                          Court of Jurisdiction:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                             class="form-control"
                             name="courtJuri"
                             label="Name"
                             value={OffenseData.offense_court}
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                              <label
                                      class="col-sm-3 col-form-label"
                                    >
                                    Date Filed :
                              </label>
                       
                      <Col sm="5">
                      
                          <Input
                              class="form-control"
                              name="dateFiled"
                              label="Name"
                              variant="filled"
                              type='date'
                              value={OffenseData.date_filed}
                              disabled
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                  
                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6"
                            htmlFor="input-first-name"
                            
                          >
                          2. Have you had a record of any denial of registration, or termination for cause, and of any disciplinary 
                            action taken,  or sanction imposed, upon by agency,  or by any exchange including any finding that
                            you were a cause of any disciplinary action or had violated any law?
                          </label>
                          <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                            <div class="form-check form-check-inline">
                              <input 
                                class="form-check-input" 
                                type="radio" 
                                name="termination" 
                                id="inlineRadio9" 
                                value={true} 
                                disabled
                                checked={OffenseData.termination_record  ? false : true} />
                              <label class="form-check-label" for="inlineRadio9">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input 
                                class="form-check-input" 
                                type="radio" 
                                name="termination" 
                                id="inlineRadio10" 
                                value={false}
                                checked={OffenseData.termination_record  ? true : false}
                                disabled />
                              <label class="form-check-label" for="inlineRadio10">NO</label>
                            </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>

                    

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 "
                            htmlFor="input-first-name"
                          >
                            3. Have you had a record of any denial, suspension, expulsion or revocation of any registration of a 
                            broker or dealer with which you were associated in any capacity when such action was taken?
                          </label>
                         <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="denial" 
                              id="inlineRadio11" 
                              value={true}
                              checked={OffenseData.revocation_record ? true : false} 
                              disabled />
                            <label class="form-check-label" for="inlineRadio11">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="denial" 
                              id="inlineRadio12"
                              value={false} 
                              disabled 
                              checked={OffenseData.revocation_record ? false : true}  />
                            <label class="form-check-label" for="inlineRadio12">NO</label>
                          </div>

                           </Row>
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 "
                            htmlFor="input-first-name"
                          >
                            4. Have you had a record of any permanent or temporary injunction entered against you or any broker 
                            or dealer with which you were associated in any capacity at the time such injunction was entered?
                          </label>
                   <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="injunction" 
                              id="inlineRadio13" 
                              value={true} 
                              checked={OffenseData.injunction_record ? true : false}
                              disabled/>
                            <label class="form-check-label" for="inlineRadio13">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="injunction" 
                              id="inlineRadio14" 
                              value={false} 
                              disabled 
                              checked={OffenseData.injunction_record ? false : true}/>
                            <label class="form-check-label" for="inlineRadio14">NO</label>
                          </div>

                           </Row>
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            5. Have you had a record of any arrest or indictment for any felony, or any misdemeanor pertaining to 
                            securities, commodities, banking, insurance or real estate, fraud, false statements or omissions, 
                            wrongful taking of property or bribery, forgery, counterfeiting or extortion, and the disposition of the 
                            foregoing?
                          </label>
                        <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="indictment" 
                              id="inlineRadio15" 
                              value={true}
                              checked={OffenseData.arrest_record ? true : false}
                              disabled/>
                            <label class="form-check-label" for="inlineRadio15">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                              class="form-check-input" 
                              type="radio" 
                              name="indictment" 
                              id="inlineRadio16" 
                              value={false} 
                              disabled 
                              checked={OffenseData.arrest_record ? false : true}/>
                            <label class="form-check-label" for="inlineRadio16">NO</label>
                          </div>

                          </Row>
                        </FormGroup>
                       </Col>
                    </Row>
{/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IN CASE OF EMERGENCY, PLEASE NOTIFY:</h1>
                      </Col>
                     </Row>
{/* --------------------------------------------------- */}

                    <Row style={{display: "inline-flex", width: "100%"}} >
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-emerName"
                          >
                            Name:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            value={EmergencyData.person_name}
                            disabled
                     
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerRelation"
                          >
                            <span style={{display: "flex"}}>Relationship:</span>
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerRelation"
                            type="text"
                            value={EmergencyData.person_relationship}
                            disabled
                       
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label"
                            htmlFor="input-emerAdd"
                          >
                            Address:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerAdd"
                            type="text"
                            value={EmergencyData.person_address}
                            disabled
                     
                            
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-emerNum"
                          >
                            Phone Number:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerNumv"
                            type="text"
                            value={EmergencyData.person_phone}
                            disabled
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IMPORTANT NOTICE:</h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                           I hereby certify that all information given above are true and correct to the best of my knowledge and belief and fully 
                           understand that any false statement herein, upon discovery thereof, will be sufficient cause for my immediate 
                           separation from the service of the Company.
                          </label>
                        </FormGroup>
                       </Col>
                    </Row>


                    
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}

                  
                    
                 

                   
                  </div>
              
                </Form>
              </CardBody>
            </Card>



        
          </Col>
        </Row>


        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow mt-5">
              <CardHeader className="bg-white border-0" >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Work Information</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <div className="pl-lg-0">
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-pos"
                          >
                            Company:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-pos"
                            type="select"
                            defaultValue={personalData.company_id}
                            onChange={e=> setCompany_id(e.target.value)}
                          >
                            {company_data.map((item)=>{
                            return(
                            <option value={item.company_id}>{item.company_name}</option>
                            )
                          })}
                            </Input>
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Position:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="select"
                            onChange={e=>setJob_id(e.target.value)}

                          >
                            {jobData.map((item)=>{
                            return(
                            <option value={item.job_id}>{item.job_title}</option>
                            )
                          })}
                            </Input>
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-pos"
                          >
                            Department:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-pos"
                            type="select"
                            
                            onChange={e=> setDepartment_id(e.target.value)}
                          >
                            
                          {departmentData.map((item)=>{
                            return(
                            <option value={item.department_id}>{item.department_name}</option>
                            )
                          })}
                          </Input>
                          
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-pos"
                          >
                            Department Role:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-pos"
                            type="select"
                            defaultValue={personalData.department_role}
                            onChange={e=> setDepartmentRole(e.target.value)}
                          >
                            <option>Normal</option>
                            <option>Department Manager</option>
                            <option>HR</option>
                            </Input>
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Supervisor:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="select"
                            defaultValue={personalData.supervisor}
                            onChange={e=> setSupervisor(e.target.value)}
                          >
                             <option>Select</option>
                            
                          </Input>
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>

                
                  {/* <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                              <label
                               
                              class="col-sm-3 col-form-label"
                              htmlFor="details"
                            >
                               <span style={{display: "flex"}}>Responsibility:</span>
                            </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="details"
                            rows="6"
                            
                            
                        
                            type="textarea"
                            placeholder=" - Create user-friendly interfaces 
                            - Conduct user research
                            - Create user personas"
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row> */}
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                           <label
                            class="col-sm-3 "
                           
                            htmlFor="input-civStatus"
                          >
                            Employee Status:
                          </label>
                          <Col sm="9">
                          <Input 
                              type="select" 
                              name="select"
                              id="input-civStatus"
                              defaultValue={personalData.employee_status}
                              onChange={e=>setEmployee_status(e.target.value)}
                             
                             >
                            <option selected>Select</option>
                              <option>Contractual</option>
                              <option>Probationary</option>
                              <option>Regular</option>
                            </Input>
                          </Col>
                            </FormGroup>
                      </Col>
                    </Row>
                       
                  {/* <div class="form-group row">
                          <label
                            class="col-sm-auto col-form-label  "
                            htmlFor="input-first-name"
                          >
                            Responsibilities:
                          </label>
                          <Col sm="10">
                       
                        
                          <Col>
                          <div >
                                  <Input
                                    style={{marginLeft:30}}
                                    class="form-control " 
                                    rows="6"
                                    type="textarea"
                                    placeholder=" - Create user-friendly interfaces
                                                 - Conduct user research
                                                 - Create user personas"
                                  />
                               
                          </div>
                          </Col >
                        
                       </Col>
                  </div> */}
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-emerName"
                          >
                            <span style={{display: "flex"}}>Vacation Leave Counts:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            defaultValue={personalData.vac_leave_count}
                            onChange={e=>setVaca_Leave_Count(e.target.value)}
                          />
                           {/* <MDBInput class="form-control"  type="number" /> */}
                          </Col >

                          <label
                            class="col-sm-3  "
                            htmlFor="input-emerName"
                          >
                            <span style={{display: "flex"}}>Sick Leave Counts:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            
                            defaultValue={personalData.sick_leave_count}
                            onChange={e=>setSick_Leave_Count(e.target.value)}
                          />
                           {/* <MDBInput class="form-control"  type="number" /> */}
                          </Col >
                        </FormGroup>
                     </Col>
                     
                  </Row>
                  <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-success" onClick={btnUpdateWorkInfo} >Save</button>
                  </span>
                  </div>
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>


        {/* <Row> */}
          {/* <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow mt-5"> */}
              {/* <CardHeader className="bg-white border-0" >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Payroll Information</h2>
                  </Col>
                
                </Row>
              </CardHeader> */}
              {/* <CardBody>
                <Form> */}
                
                  <div className="pl-lg-0">
                  {/* <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-tin"
                          >
                           <span style={{display: "flex"}}>Current<br/>Salary</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                            placeholder="PHP18,000.00"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-tin"
                          >
                            TIN:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-pagibig"
                          >
                          <span style={{display: "flex"}}>Pag-Ibig Fund No.:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-pagibig"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-sss"
                          >
                            SSS Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sss"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-philHealth"
                          >
                            PhilHealth Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-philHealth"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row> */}


                         {/* ---------------------------------------------------- */}
                         {/* <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                   </Row> */}
                      {/* ---------------------------------------------------- */}


                      { inputFields9.map(inputField9 => (
                            <div>
                                
                          
                        
                           {/* <div>
                           <img src={Line42} alt="Line42" style={{position:'absolute', height:275, top:380}} />
                           <img src={Ellipse10} alt="Ellipse10" style={{position:'absolute', right:1528,marginTop:12, }} />
                           <button type="button"  data-toggle="modal" data-target="#exampleModalCenter"><img src={AddTimeline}  style={{position:'absolute',marginTop:270, right:1529  }}/></button>
                


                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Increase Salary</h5>
                              
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                              
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-auto col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Increase Amount:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                     name="amountInc"
                                                     label="amountInc"
                                                     variant="filled"
                                                    
                                                   
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                              </Row>
                              <div class="form-group row">
                                            <label
                                                class="col-sm-auto col-form-label mr-5"
                                                htmlFor="input-first-name"
                                            >
                                                Description:
                                            </label>
                                        <Col sm="9">
                                            <FormGroup row>
                                            
                                            <Col>
                                                <div className="pl-lg-0">
                                               
                                                    
                                                    <Input
                                                        class="form-control mx-5"
                                                        rows="6"
                                                        type="textarea"
                                                       
                                                   
                                                    />
                                                   
                                                </div>
                                            </Col >
                                            </FormGroup>
                                        </Col>
                             </div>
                          
                                </div>
                                <div class="modal-footer">
                                   
                                    <button type="button" class="btn btn-success" data-dismiss="modal" onClick={handleAddFields9}>INCREASE SALARY</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>  */}
                    {/* <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45}}
                          >
                          Previous Salary:
                          
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="prevSal"
                            name="prevSal"
                            label="prevSal"
                            variant="filled"
                            placeholder="PHP15,000.00"
                            value={inputField9.prevSal}
                            disabled
                            onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row> */}
                    {/* <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45, marginRight:-15}}
                          >
                          Increase Amount:
                          
                          </label>
                          <Col sm="8">
                          <Input
                           class="form-control"
                           id="amountInc"
                           name="amountInc"
                           label="amountInc"
                           variant="filled"
                           placeholder="PHP3,000.00"
                           value={inputField9.amountInc}
                           disabled
                           onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45, marginRight:-10}}
                          >
                          Date of Increase:
                          
                          </label>
                          <Col sm="8">
                          <Input
                             class="form-control"
                             id="DOI"
                             name="DOI"
                             label="DOI"
                             variant="filled"
                             placeholder="03/07/2021"
                             value={inputField9.DOI}
                             disabled
                             onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45 ,marginRight:27}}
                          >
                          Description:
                          
                          </label>
                          <Col sm="8">
                          <Input
                                    class="form-control"
                                    id="descSal"
                                    name="descSal"
                                    label="descSal"
                                    variant="filled"
                                    placeholder="Promoted to Level 2 Position"
                                    value={inputField9.descSal}
                                    disabled
                                    onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row> */}
                           

                            </div>
                      )) }
                   
                    
                
{/* 
                    <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-success" >Save</button>
                    </span> */}



                  </div>
              
                {/* </Form>
              </CardBody>
            </Card>
          </Col> */}
        {/* </Row> */}
      </Container>
    </>
  );
};


export default ManageRecords;
