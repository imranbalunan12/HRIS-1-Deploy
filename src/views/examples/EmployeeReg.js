import React, {useState, useEffect} from "react";
import api from '../../api/api'

// reactstrap components
import 'bootstrap';
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
  CustomInput,
 
} from "reactstrap";

import { v4 as uuidv4 } from 'uuid';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import "assets/css/overlay.css"
import AdminFooter from "components/Footers/AdminFooter.js";
import { setTextRange } from "typescript";
import { event } from "jquery";

function Profile  ()  {

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


  const handleAddFields = () => {
    setInputFields([...inputFields, { Name: '', dateTaken: '', score: ''}])
  }
 
  const handleAddFields2 = () => {
    setInputFields2([...inputFields2, { Name2: '', dateTaken2: '',}])
  }

  const handleAddFields3 = () => {
    setInputFields3([...inputFields3, { empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' }])
  }

  const handleAddFields4 = () => {
    setInputFields4([...inputFields4, { Name4: '', occupation: '', age: '', emp:''}])
  }

  const handleAddFields5 = () => {
    setInputFields5([...inputFields5, { Namechld: '', agechld: ''}])
  }

  const handleAddFields6 = () => {
    setInputFields6([...inputFields6, { Nameref: '' ,  occref: '', empref:''}])
  }

  const handleAddFields7 = () => {
    setInputFields7([...inputFields7, { NameOrg: '' ,  descOrg: '',}])
  }

  const handleAddFields8 = () => {
    setInputFields8([...inputFields8, {NatureOff: '' ,  courtJuri: '', dateFiled: ''}])
  }


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
    setInputFields2(newInputFields4);
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
    setInputFields2(newInputFields7);
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
  //get Position and Department 
  const [jobData, setJobData] = useState([])
  const [departmentData, setDepartment_data] = useState([])
  const [CompanyData, setCompanyData] = useState([])
  const [SupervisorData, setSupervisorData] = useState([])
  const getToken = localStorage.getItem('token')

  //disabled button
  const [btnDisabled, setbtnDisabled] = useState(true)

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

   //education
   const [employee_id, setEmployee_id] = useState(null) 
   const [primary_school, setPrimary_school] = useState(null)
   const [primary_address, setPrimary_address] = useState(null)
   const [primary_grad, setPrimary_grad] = useState(null)
   const [sec_school, setSec_school] = useState(null)
   const [sec_address, setSec_address] = useState(null)
   const [sec_grad, setSec_grad] = useState(null)
   const [col_school, setCol_school] = useState(null)
   const [col_address, setCol_address] = useState(null)
   const [col_grad, setCol_grad] = useState(null)
   const [col_degree, setCol_degree] = useState(null)
   const [grad_school, setGrad_school] = useState(null)
   const [grad_address, setGrad_address] = useState(null)
   const [grad_degree, setGrad_degree] = useState(null)
   const [grad_grad, setGrad_grad] = useState(null)
   const [others, setOthers] = useState(null)

  //exams-taken
  const [exam_name, setExam_name] = useState(null)
  const [date_taken, setDate_taken] = useState(null)
  const [result, setResult] = useState(null)

  //skills
  const [skill_name, setSkill_name] = useState(null)

  //seminars-taken
  const [seminar_name, setSeminar_name] = useState(null)
  const [seminar_date, setSeminar_date] = useState(null)

  //job-history
  const [employer_name, setEmployer_name] = useState(null)
  const [company_address, setCompany_address] = useState(null)
  const [company_contact_no, setCompany_contact_no] = useState(null)
  const [company_supervisor, setCompany_supervisor] = useState(null)
  const [job_title, setJob_title] = useState(null)
  const [starting_income, setStarting_income] = useState(null)
  const [last_income, setLast_income] = useState(null)
  const [reason_leave, setReason_leave] = useState()
  const [has_been_terminated, setHas_been_terminated] = useState(false)
  const [has_terminated_reason, setHas_terminated_reason] = useState(null)

  //family
  const [father_name, setFather_name] = useState(null)
  const [father_birth, setFather_birth] = useState(null)
  const [father_age, setFather_age] = useState(null)
  const [father_occu, setFather_occu] = useState(null)
  const [father_employer, setFather_employer] = useState(null)
  const [mother_name, setMother_name] = useState(null)
  const [mother_birth, setMother_Birth] = useState(null)
  const [mother_age, setMother_age] = useState(null)
  const [mother_occu, setMother_occu] = useState(null)
  const [mother_employer, setMother_employer] = useState(null)
  const [family_address, setFamily_address] = useState(null)
  const [family_contact_no, setFamily_contact_no] = useState(null)

  //siblings
  const [sibling_name, setSibling_name] = useState(null)
  const [sibling_age, setSibling_age] = useState(null)
  const [sibling_occupation, setSibling_occupation] = useState(null)
  const [sibling_employer, setSibling_employer] = useState(null)

  //married
  const [spouse_name, setSpouse_name] = useState(null)
  const [spouse_address, setSpouse_address] = useState(null)
  const [spouse_birth, setSpouse_birth] = useState(null)
  const [spouse_age, setSpouse_age] = useState(null)
  const [spouse_occupation, setSpouse_occupation] = useState(null)
  const [spouse_employer, setSpouse_employer] = useState(null)

  //children
  const [child_name, setChild_name] = useState(null)
  const [child_age, setChild_age] = useState(null)

  //medical history
  const [had_illness, setHad_illness] = useState(false)
  const [illness_details, setIllness_details] = useState(null)
  const [hospitalized, setHospitalized] = useState(false)
  const [hospitalized_details, setHospitalized_details] = useState(null)
  const [last_checkup_purpose, setLast_checkup_purpose] = useState(null)
  const [last_checkup_place, setLast_checkup_place] = useState(null)
  const [last_checkup_date, setLast_checkup_date] = useState(null)
  const [distinguishing_marks, setDistinguishing_marks] = useState(null)

  //reference
  const [ref_name, setRef_name] = useState(null)
  const [ref_occupation, setRef_occupation] = useState(null)
  const [ref_employer, setRef_employer] = useState(null)

  //Organization
  const [org_name, setOrg_name] = useState(null)
  const [org_desc, setOrg_desc] = useState(null)

  //Offense
  const [convicted, setConvicted] = useState(false)
  const [offense_details, setOffense_details] = useState(null)
  const [offense_court, setOffense_court] = useState(null)
  const [date_filed, setDate_filed] = useState(null)
  const [termination_record, setTermination_record] = useState(false)
  const [revocation_record, setRevocation_record] = useState(false)
  const [injunction_record, setInjunction_record] = useState(false)
  const [arrest_record, setArrest_record] = useState(false)

  //Emergency
  const [person_name, setPerson_name] = useState(null)
  const [person_relationship, setPerson_relationship] = useState(null)
  const [person_address, setPerson_address] = useState(null)
  const [person_phone, setPerson_phone] = useState(null)
  
  //signature 
  const [employee_signature, setEmployee_signature] = useState(null)

  //button for signature section
  const btnSignature = (e) => {
    let formdata = new FormData()
    formdata.append('image', employee_signature) 
    formdata.append('name', 'signatures')
    const signature = {
      employee_id,
      employee_signature: formdata
    }
    
    e.preventDefault();
    console.log(signature)
    api.post('employees/signature/', signature, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //button for In Case of Emergency section
  const btnEmergency = (e) => {
    const emergency = {
      employee_id,
      person_name,
      person_relationship,
      person_address,
      person_phone,
    }
    e.preventDefault();
    console.log(emergency)
    api.post('employees/emergency/', emergency, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //button for Offense Section
  const btnOffense = (e) => {
    const offense = {
      employee_id,
      convicted,
      offense_details,
      offense_court,
      date_filed,
      termination_record,
      revocation_record,
      injunction_record,
      arrest_record,
    }
    e.preventDefault();
    console.log(offense)
    api.post('employees/offense/', offense, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //button for Organization section
  const btnOrg = (e) => {
    const org = {
      employee_id,
      org_name,
      org_desc,
    }
    e.preventDefault();
    console.log(org)
    api.post('employees/org/', org, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //button for reference section 
  const btnReference = (e) => {
    const reference = {
      employee_id,
      ref_name,
      ref_occupation,
      ref_employer,
    }
    e.preventDefault();
    console.log(reference)
    api.post('employees/reference/', reference, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  //button for Medical History
  const btnMedical = (e) => {
    const medical = {
      employee_id,
      had_illness,
      illness_details,
      hospitalized,
      hospitalized_details,
      last_checkup_date,
      last_checkup_purpose,
      last_checkup_place,
      distinguishing_marks,
    }
    e.preventDefault();
    console.log(medical)
    api.post('employees/med-history/', medical, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  //button for children section
  const btnChildren = (e) => {
    const children = {
      employee_id,
      child_name,
      child_age,
    }
    e.preventDefault();
    console.log(children)
    api.post('employees/children/', children, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //button for if married section
  const btnMarried = (e) => {
    const married = {
      employee_id,
      spouse_name,
      spouse_address,
      spouse_birth,
      spouse_age,
      spouse_occupation,
      spouse_employer,
    }
    e.preventDefault();
    console.log(married)
    api.post('employees/married/', married, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //button for Brothers & Sisters section
  const btnSiblings = (e) => {
    const siblings = {
      employee_id,
      sibling_name,
      sibling_age,
      sibling_occupation,
      sibling_employer,
    }
    e.preventDefault();
    console.log(siblings)
    api.post('employees/sibling/', siblings, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //button for family background section
  const btnFamily = (e) => {
    const family = {
      employee_id,
      father_name,
      father_birth,
      father_age,
      father_occu,
      father_employer,
      mother_name,
      mother_birth,
      mother_age,
      mother_occu,
      mother_employer,
      family_address,
      family_contact_no,
    }
    e.preventDefault();
    console.log(family)
    api.post('employees/family/', family, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  //button for Employment History section

  const btnJobHistory = (e) => {
    const job_history = {
      employee_id,
      employer_name,
      company_address,
      company_contact_no,
      company_supervisor,
      job_title,
      starting_income,
      last_income,
      reason_leave,
      has_been_terminated,
      has_terminated_reason,
    }
    e.preventDefault();
    console.log(job_history)
    api.post('employees/job-history/', job_history, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  //button for seminars / trainings attended section
  const btnSeminar = (e) => {
    const seminar = {
      employee_id,
      seminar_name,
      seminar_date,
    }
    e.preventDefault();
    console.log(seminar)
    api.post('employees/seminars-taken/', seminar, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  //button for other skill / machines operated section
  const btnSkills = (e) => {
    const skills = {
      employee_id,
      skill_name,
    }
    e.preventDefault();
    console.log(skills)
    api.post('employees/skills/', skills, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  //button for exams-taken section
  const btnExamsTaken = (e) => {
    const exams_taken_info = {
      employee_id,
      exam_name,
      date_taken,
      result,
    }
    e.preventDefault();
    console.log(exams_taken_info)
    api.post('employees/exams-taken/', exams_taken_info, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  //button for educational background section
   const btnEducation = (e) =>{
    const educ_info = {
      employee_id,
      primary_school,
      primary_address,
      primary_grad,
      sec_school,
      sec_address,
      sec_grad,
      col_school,
      col_address,
      col_grad,
      col_degree,
      grad_address,
      grad_school,
      grad_degree,
      grad_grad,
      others, 
    }
    e.preventDefault();
    console.log(educ_info)
    api.post('employees/education/', educ_info, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  //button for personal infromation section
  const btnPersonalInfo = (e) => {
    const personal_info = {
      employee_number,
      sa_no,
      job_id,
      supervisor,
      department_id,
      department_role,
      company_id,
      date_employed,
      employee_status,
      salary,
      sick_leave_count,
      vac_leave_count,
      name,
      nickname,
      other_name,
      employee_image,
      civil_status,
      citizenship,
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
      acr_no,
      acr_date,
      dept_labor_no,
      dept_labor_date,
      tin_no,
      sss_no,
      pagibig_no,
      philhealth_no,
      email,
    }
    e.preventDefault();
    
    console.log(personal_info)
    api.post('employees/register', personal_info, {headers: {Authorization: `Token ${getToken}`}})
    .then(res =>{
      console.log(res)
      setEmployee_id(res.user.employee_id)
      setbtnDisabled(false)
      
    })
    .catch(err => {
      console.log(err)
    })
  
  }

 

  //getPosition
  const getPosition = async () => {
    api.get(`jobs/dropdown`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=> {
      console.log(res)
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
      console.log(res)
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
      console.log(res)
      setCompanyData(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
   //getSupervisor
   const getSupervisor= async () => {
    api.get(`supervisor/dropdown`, {headers: {Authorization: `Token ${getToken}`}})
    .then(res=> {
      console.log(res)
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
  }, [])

  


// ---------------------------------
  return (
    <>
      <UserHeader />
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
                
                  <div className="pl-lg-0" >
                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-username"
                          >
                            Position:
                          </label>
                         

                          
                          <Col sm='8'>
                          <FormGroup>
                    
                            <Input 
                              type="select" 
                              name="select"
                              class="form-control"
                              id="input-username"

                              onChange = {e => setJob_id(e.target.value)}
                             >
                            
                            <option disabled selected>Select</option>
                            {jobData.map((item) => {
                            return(
                              <option value={item.job_id}>{item.job_title}</option>
                            
                              )
                              
                            })}
                            </Input>
                             
                          </FormGroup>
                          </Col>
                          
                        </FormGroup>
                      </Col>
                      
              

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-sa"
                          >
                           <span style={{display: "inline-flex"}}>S.A<br/>Number:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sa"
                            type="number"
                            onChange = {e => setSa_no(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                     <Row style={{display: "inline-flex", width: "100%"}}>
                     <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-dept"
                          >
                            Department:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                         
                            <Input
                              type='select'
                             class="form-control"
                             onChange={e => setDepartment_id(e.target.value)}
                      
                              
                             > 
                            
                            <option disabled selected>Select</option>
                            {departmentData.map((item)=>{
                              return(
                              <option value={item.department_id}>{item.department_name}</option>
                            )
                            
                          })}
                            </Input>
                             
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-dept"
                          >
                            Company:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="select" 
                              name="select"
                              class="form-control"
                              id="input-dept"
                              onChange={e => setCompany_id(e.target.value)}
                      
                              
                             >
                            <option disabled selected>Select</option>
                            {CompanyData.map((item)=>{
                              return(
                              <option value={item.company_id}>{item.company_name}</option>
                              )
                            })}
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
                            class="col-sm-3  "
                            htmlFor="input-dept"
                          >
                            Department Role:
                          </label>
                          <Col sm='8'>
                          <FormGroup>
                            <Input 
                              type="select" 
                              name="select"
                              class="form-control"
                              id="input-dept"
                              onChange = {e => setDepartmentRole(e.target.value)}
                      
                              
                             >
                            <option selected>Select</option>
                            <option >Normal</option>
                            <option >Department Manager</option>
                            <option >HR</option>
                          
                         
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                   
                      <Col sm="6">
                        <FormGroup row>
                           <label
                            class="col-sm-3 "
                           
                            htmlFor="input-EmployeeStatus"
                          >
                            Employee <br/> Status:
                          </label>
                          <Col sm="8">
                          <Input 
                              type="select" 
                              name="select"
                              id="input-EmployeeStatus"
                              
                              onChange = {e => setEmployee_status(e.target.value)}
                             
                             >
                            
                              <option selected>Unknown</option>
                              <option>Contractual</option>
                              <option>Probationary</option>
                              <option>Regular</option>
                            </Input>
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
                              Date <br/>Employed:
                          </label>
                          <Col sm="5">
                    
                            <Input
                            
                              type="date"
                              name="date"
                              id="input-dateemp"
                              placeholder="date placeholder"
                              onChange = {e => setDate_employed(e.target.value)}
                            />
                        
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                           <label
                            class="col-sm-3 col-form-label"
                           
                            htmlFor="input-EmployeeStatus"
                          >
                            Supervisor:
                          </label>
                          <Col sm="8">
                          <Input 
                              type="select" 
                              name="select"
                              id="input-EmployeeStatus"
                              
                              onChange = {e => setEmployee_status(e.target.value)}
                             
                             >
                            
                              <option selected>Select</option>
                              
                            </Input>
                          </Col>
                            </FormGroup>
                      </Col>
               
                   
                   
                    </Row>

                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
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
                            type="number"
                            onChange = {e => setEmployee_number(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      
                   
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
                            placeholder="(ex. Dela Cruz, Juan Octavia.)"
                            onChange = {e => setName(e.target.value)}
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
                            htmlFor="input-othName"
                          >
                            <span style={{display: "inline-flex"}}>Suffix:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control "
                            id="input-othName"
                            placeholder="(ex. Jr. Sr. III II )" 
                            type="text"
                            onChange = {e => setOther_name(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
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
                            placeholder="(ex. Juan)"
                            onChange = {e => setNickname(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                  
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
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
                            onChange = {e => setDate_of_birth(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                   
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-Weight"
                          >
                            Weight:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-Weight"
                            type="number"
                            placeholder="in kg"
                            onChange = {e => setWeight(e.target.value)}
                          />
                          </Col >
                          
                          <label
                            class="col-sm-2 col-form-label  "
                            htmlFor="input-Height"
                          >
                            <span style={{display: "inline-flex"}}>Height:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-first-Height"
                            type="number"
                            placeholder="in cm"
                            onChange = {e => setHeight(e.target.value)}
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
                            htmlFor="input-placeBirth"
                          >
                            Place of Birth:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-placeBirth"
                            type="text"
                            onChange = {e => setPlace_of_birth(e.target.value)}
                        
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-civilStat"
                          >
                            Civil Status:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="select"
                            type="select"
                            onChange = {e => setCivil_status(e.target.value)}

                            
                          >
                          <option selected>Select</option>
                          <option>Single</option>
                          <option >Married</option>
                          <option >Widow</option>
                          </Input>
                          </Col >
                          
                          <label
                            class="col-sm-2 col-form-label  "
                            htmlFor="input-Height"
                          >
                            <span style={{display: "inline-flex"}}>Gender:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-first-Height"
                            type="select"
                            onChange = {e => setGender(e.target.value)}
                          >
                              <option selected>Select</option>
                              <option >Male</option>
                              <option >Female</option>
                            </Input>
                          </Col>
                        </FormGroup>
                      </Col>
                    
                  
                    
                  
                  
                    </Row>
                    {/* Need Ayusin */}
              

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-Religion"
                          >
                            Religion:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            placeholder="(ex. Roman Catholic)"
                            onChange = {e => setReligion(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>

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
                            placeholder="(ex. juandelacruz@gmail.com)"
                           
                            onChange = {e => setEmail(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                  
                   
                
                    
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-landNo"
                          >
                            Landline Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-landNo"
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setTel_no(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-cpNo"
                          >
                            Cellphone Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-cpNo"
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setCel_no(e.target.value)}
                          
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
                            htmlFor="input-provAdd"
                          >
                            Provincial Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-provAdd"
                            type="text"
                            onChange = {e => setProv_address(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                     
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
                            id="input-cityAdd"
                            type="text"
                            onChange = {e => setCity_address(e.target.value)}
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
                            htmlFor="input-pagibig"
                          >
                            Pag-ibig Fund No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-pagibig"
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setPag_ibig(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-sss"
                          >
                           <span style={{display: "inline-flex"}}>SSS<br/>Number:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sss"
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setSss(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                    <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-philHealth"
                          >
                            PhilHealth Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-philHealth"
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setPhil_health(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-tin"
                          >
                            TIN:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setTin(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                   
                    <span class="d-flex flex-row-reverse mx-7" >
                        <button type="button" class="btn btn-success" onClick={btnPersonalInfo} >Save</button>
                    </span>
                  </div>

                  

                {/* EDUCATIONAL BG */}
               
                    <Row >
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">B. EDUCATIONAL BACKGROUND</h1>
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
                            onChange = {e => setPrimary_school(e.target.value)}
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
                            onChange = {e => setSec_school(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-primAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primAddSchool"
                            type="text"
                            onChange = {e => setPrimary_address(e.target.value)}
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
                            onChange = {e => setSec_address(e.target.value)}
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
                            onChange = {e => setPrimary_grad(e.target.value)}
                            >
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
                            onChange = {e => setSec_grad(e.target.value)}
                            >
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
                          College School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-college"
                            type="text"
                            onChange = {e => setCol_school(e.target.value)}
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
                            onChange = {e => setGrad_school(e.target.value)}
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
                            onChange = {e => setCol_address(e.target.value)}
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
                            onChange = {e => setGrad_address(e.target.value)}
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
                            onChange = {e => setCol_degree(e.target.value)}
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
                            onChange = {e => setGrad_degree(e.target.value)}
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
                            <Input 
                            type="select" 
                            name="select" 
                            id="yearColl" 
                            placeholder="select"
                            onChange = {e => setCol_grad(e.target.value)}
                            >
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
                            onChange = {e => setGrad_grad(e.target.value)}
                            >
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
                            onChange = {e => setOthers(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="submit" class="btn btn-success" onClick={btnEducation} disabled={btnDisabled}>Save</button>
                    </span>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">EXAMINATIONS TAKEN</h1>
                      </Col>
                   </Row>       
                      <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-primary" onClick={handleAddFields} disabled={btnDisabled}>Add Row</button>
                      </span>
                        { inputFields.map(inputField => (
                          <div >  
                            {/* <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label" htmlFor="input-examName"
                                      style={{marginRight:115}}>Name:</label>
                                <div class="col-sm-6 ">
                                    <Input
                                      
                                      class="form-control"
                                      id="input-examName"
                                      name="Name"
                                      label="Name"
                                      variant="filled"
                                      value={inputField.Name}
                                      onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    </div>
                            </div> */}

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
                                  variant="filled"
                                  
                                  onChange={event => handleChangeInput(inputField.id, event), e => setExam_name(e.target.value)}
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
                                  variant="filled"
                                  
                                  onChange={event => handleChangeInput(inputField.id, event), e => setDate_taken(e.target.value)}
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
        
                                    onChange={event => handleChangeInput(inputField.id, event), e => setResult(e.target.value)}
                                />
                             </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="submit" class="btn btn-success" onClick={btnExamsTaken} disabled={btnDisabled}>Save</button>
                    </span>
                     
                      
                            {/* <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                      htmlFor="input-examTaken"
                                    >
                                    Date Taken:
                                    </label>
                                    <div class="col-sm-2 mx-6">
                                    <Input
                                     type="date"
                                      class="form-control"
                                      id="input-examTaken"
                                      name="dateTaken"
                                      label="Name"
                                      variant="filled"
                                      value={inputField.dateTaken}
                                      onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    </div>

                                  
                                    <label
                                      class="col-sm-auto col-form-label mx-5 "
                                      htmlFor="input-scoreExam"
                                    >
                                    score:
                                    </label>
                                    <div class="col-sm-1" >
                                    <Input
                                      style={{marginLeft:15}}
                                      class="form-control"
                                      id="input-scoreExam"
                                      name="score"
                                      variant="filled"
                                      value={inputField.score}
                                      onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    </div>
                           </div>     */}
 
                          </div>
                          )) }
                      

                      
                   
                

                    {/* <Row>
                    <Col sm="6">
                        <FormGroup >
                        { inputFields.map(inputField => (
                          <div>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name"
                          >
                           Date Taken:
                          </label>
                          <Col sm="12">
                          <Input
                            className="form-control-alternative"
                            name="Name"
                            label="Name"
                            variant="filled"
                            value={inputField.dateTaken}
                            // onChange={event => handleChangeInput(inputField.id, event)}
                          />
                          </Col>
                          </div>
                          )) }
                          
                          <label
                            class="col-lr-1 col-form-label ml-6"
                            htmlFor="input-first-name"
                          >
                            Score:
                          </label>
                          <Col sm="2">
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            type="text"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row> */}

                    
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
                            placeholder="Seperate with comma.."
                            onChange={e => setSkill_name(e.target.value)}
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="submit" class="btn btn-success" onClick={btnSkills} disabled={btnDisabled}>Save</button>
                    </span>
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">SEMINARS / TRAININGS ATTENDED</h1>
                      </Col>
                   </Row>
                  
                   
                        <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-primary" onClick={handleAddFields2} disabled={btnDisabled}>Add Row</button>
                        </span>
                        
                        { inputFields2.map(inputField2 => (
                          <div >  
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
                                variant="filled"
                                
                                onChange={event => handleChangeInput2(inputField2.id, event), e => setSeminar_name(e.target.value)}
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
                                  variant="filled"
                                  
                                  onChange={event => handleChangeInput2(inputField2.id, event), e => setSeminar_date(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-7"  >
                          <button type="button" class="btn btn-success" onClick={btnSeminar} disabled={btnDisabled} >Save</button>
                          </span>
                          
 
                          </div>
                          )) }


                          

                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">C. EMPLOYMENT HISTORY</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}

                      <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-primary" onClick={handleAddFields3} disabled={btnDisabled}>Add Row</button>
                        </span>
                        
                        { inputFields3.map(inputField3 => (
                          <div >  

                            
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
                                variant="filled"
                                
                                onChange={event => handleChangeInput3(inputField3.id, event), e => setEmployer_name(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3"
                            htmlFor="input-empAdd"
                          >
                            Company Address:
                          </label>
                     
                     
                      <Col sm="9">
                     
                          <Input
                             class="form-control"
                             id="empAdd"
                             name="empAdd"
                             label="empAdd"
                             variant="filled"
                            
                             onChange={event => handleChangeInput3(inputField3.id, event), e => setCompany_address(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-empTelNo"
                          >
                           Telephone Number:
                          </label>
                          <Col sm="9">
                          <Input
                             class="form-control"
                             id="input-empTelNo"
                             name="empTelNo"
                             label="empTelNo"
                             variant="filled"
                             type="number"
                             onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                             
                             onChange={event => handleChangeInput3(inputField3.id, event), e => setCompany_contact_no(e.target.value)}
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
                                variant="filled"
                               
                                onChange={event => handleChangeInput3(inputField3.id, event),e => setCompany_supervisor(e.target.value)}
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
                               variant="filled"
                               
                               onChange={event => handleChangeInput3(inputField3.id, event), e => setJob_title(e.target.value)}
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
                              variant="filled"
                            
                              onChange={event => handleChangeInput3(inputField3.id, event), e => setStarting_income(e.target.value)}
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
                            htmlFor="input-empLastIncome"
                          >
                          <span style={{display: "inline-flex"}}>Last<br/>Income:</span>
                          </label>
                          <Col sm="9">
                          <Input
                              class="form-control"
                              id="input-empLastIncome"
                              name="empLastIncone"
                              label="empLastIncone"
                              variant="filled"
                            
                              onChange={event => handleChangeInput3(inputField3.id, event), e => setLast_income(e.target.value)}
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
                                variant="filled"
                               
                                onChange={event => handleChangeInput3(inputField3.id, event), e => setReason_leave(e.target.value)}
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
                            type="radio" name="illnesses" 
                            id="inlineRadio1" 
                            value="true" 
                            onChange ={ e => setHas_been_terminated(e.target.value)}
                            />
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" name="illnesses" 
                            id="inlineRadio2" value="false" 
                            onChange ={ e => setHas_been_terminated(e.target.value)}
                            />
                            <label class="form-check-label" for="inlineRadio2">NO</label>
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
                                    type="textarea"
                                    onChange ={ e => setHas_terminated_reason(e.target.value)}
                                
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-success" onClick={btnJobHistory} disabled={btnDisabled} >Save</button>
                    </span>
                    
{/* 
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label" >Employer Name:</label>
                                <div class="col-sm-5 mx-5">
                                    <Input
                                      class="form-control"
                                      id="empName"
                                      name="empName"
                                      label="empName"
                                      variant="filled"
                                      value={inputField3.empName}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                            </div>
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label mr-2" >Address:</label>
                                <div class="col-sm-5 mx-7">
                                    <Input
                                      class="form-control"
                                      id="empAdd"
                                      name="empAdd"
                                      label="empAdd"
                                      variant="filled"
                                      value={inputField3.empAdd}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                            </div>

                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label mr-2"
                                      
                                    >
                                    Telephone No.:
                                    </label>
                                    <div class="col-sm-3 mx-5">
                                    <Input
                                      class="form-control"
                                      id="empTelNo"
                                      name="empTelNo"
                                      label="empTelNo"
                                      variant="filled"
                                      value={inputField3.empTelNo}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>    

                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label mr-3"
                                      
                                    >
                                    Supervisor:
                                    </label>
                                    <div class="col-sm-3 mx-6">
                                    <Input
                                      class="form-control"
                                      id="empSuVisor"
                                      name="empSuVisor"
                                      label="empSuVisor"
                                      variant="filled"
                                      value={inputField3.empSuVisor}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label "
                                      
                                    >
                                    Job Title:
                                    </label>
                                    <div class="col-sm-3" style={{marginLeft:110}}>
                                    <Input
                                      class="form-control"
                                      id="empTitle"
                                      name="empTitle"
                                      label="empTitle"
                                      variant="filled"
                                      value={inputField3.empTitle}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      
                                    >
                                    Starting Income:
                                    </label>
                                    <div class="col-sm-3 " style={{marginLeft:52}}>
                                    <Input
                                      class="form-control"
                                      id="empStartIncome"
                                      name="empStartIncome"
                                      label="empStartIncome"
                                      variant="filled"
                                      value={inputField3.empStartIncome}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      
                                    >
                                    Last Income:
                                    </label>
                                    <div class="col-sm-3" style={{marginLeft:80}}>
                                    <Input
                                      class="form-control"
                                      id="empLastIncone"
                                      name="empLastIncone"
                                      label="empLastIncone"
                                      variant="filled"
                                      value={inputField3.empLastIncone}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label" >Reason for Leaving:</label>
                                <div class="col-sm-5 mx-4">
                                    <Input
                                      class="form-control"
                                      id="empRFL"
                                      name="empRFL"
                                      label="empRFL"
                                      variant="filled"
                                      value={inputField3.empRFL}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                            </div>

                            <div class="form-group row">
                            <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-first-name"
                          >
                            Have you ever terminated in a job?
                          </label>
                          
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio1" value="option1"/>
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">NO</label>
                          </div>
                            </div>
                          
                          <div class="form-group row">
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name"
                          >
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
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                          </div> */}
                          </div>
                          
                          )) }


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
                              class="col-sm-3 "
                              htmlFor="input-nameFather"
                            >
                           <span style={{display: "flex"}}>Father's<br/>Name:</span>
                            </label>
                            <Col sm="8">
                            <Input
                              class="form-control"
                              id="input-nameFather"
                              type="text"
                              onChange = {e => setFather_name(e.target.value)}
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
                            id="input-occuFather"
                            type="text"
                            onChange = {e => setFather_occu(e.target.value)}
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
                            onChange = {e => setFather_birth(e.target.value)}
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
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setFather_age(e.target.value)}
                           
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
                            onChange = {e => setFather_employer(e.target.value)}
                         
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
                           Mother's Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameMother"
                            type="text"
                            onChange = {e => setMother_name(e.target.value)}
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
                            onChange = {e => setMother_occu(e.target.value)}
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
                            onChange = {e => setMother_Birth(e.target.value)}
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
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setMother_age(e.target.value)}
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
                            onChange = {e => setMother_employer(e.target.value)}
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
                            onChange = {e => setFamily_address(e.target.value)}
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
                            Telephone Number:
                          </label>
                          <Col sm="8" >
                          <Input
                            class="form-control"
                            id="input-telMother"
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setFamily_contact_no(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-success" onClick={btnFamily} disabled={btnDisabled} >Save</button>
                    </span>   
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">BROTHERS & SISTERS</h1>
                      </Col>
                     </Row>

                     <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-primary" onClick={handleAddFields4} disabled={btnDisabled}>Add Row</button>
                        </span>

                        { inputFields4.map(inputField4 => (
                          <div >  

                            
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
                              variant="filled"
                             
                              onChange={event => handleChangeInput4(inputField4.id, event), e=> setSibling_name(e.target.value)}
                         
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
                              variant="filled"
                              
                              onChange={event => handleChangeInput4(inputField4.id, event), e=> setSibling_occupation(e.target.value)}
                        
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
                                  type="number"
                                  variant="filled"
                                  onKeyPress={(event) => {
                                    if (!/[0-9,-]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                  }}
                                 
                                  onChange={event => handleChangeInput4(inputField4.id, event), e=> setSibling_age(e.target.value)}
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
                              variant="filled"
                              
                              onChange={event => handleChangeInput4(inputField4.id, event), e=> setSibling_employer(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-success" onClick={btnSiblings} disabled={btnDisabled} >Save</button>
                    </span>

                            {/* <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label" >Name:</label>
                                <div class="col-sm-5 mx-6">
                                    <Input
                                      class="form-control"
                                      id="nameBrother"
                                      name="Name4"
                                      label="Name"
                                      variant="filled"
                                      value={inputField4.Name4}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>
                            </div>
                              
                        
                        
                     
                      
                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                      
                                    >
                                    Occupation:
                                    </label>
                                    <div class="col-sm-3 mx-6">
                                    <Input
                                      class="form-control"
                                      id="occuBrother"
                                      name="occupation"
                                      label="Name"
                                      variant="filled"
                                      value={inputField4.occupation}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>

                                  
                                    <label
                                      class="col-sm-auto col-form-label mx--1 "
                                     
                                    >
                                    Age:
                                    </label>
                                    <div class="col-sm-1" >
                                    <Input
                                      class="form-control"
                                      id="ageBrother"
                                      name="age"
                                      variant="filled"
                                      value={inputField4.age}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>
                           </div>    

                           <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label" >Employer:</label>
                                <div class="col-sm-5 mx-6">
                                    <Input
                                      class="form-control"
                                      id="empBrother"
                                      name="emp"
                                      label="Name"
                                      variant="filled"
                                      value={inputField4.emp}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>
                            </div> */}
 
                          </div>
                          )) }

                    
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
                            onChange = {e => setSpouse_name(e.target.value)}
                          
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
                            onChange = {e => setSpouse_occupation(e.target.value)}
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
                            onChange = {e => setSpouse_birth(e.target.value)}
                     
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
                            type="number"
                            onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setSpouse_age(e.target.value)}
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
                            onChange = {e => setSpouse_employer(e.target.value)}
                          
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
                            onChange = {e => setSpouse_address(e.target.value)}
                           
                          />
                          </Col>
                         
                        </FormGroup>
                       
                      </Col>
                   
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6">
                            <button type="button" class="btn btn-success" onClick={btnMarried} disabled={btnDisabled} >Save</button>
                      </span>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                    
           
                
              
                     <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-primary" onClick={handleAddFields5} disabled={btnDisabled}>Add Row</button>
                        </span>
                            <br/>
                        { inputFields5.map(inputField5 => (
                          <div >  
                                <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="input-nameChild"
                          >
                            <span style={{display: "inline-flex"}}>Name of<br/>Child:</span>
                          </label>
                     
                      
                      <Col sm="8" >
                     
                          <Input
                              class="form-control"
                              id="input-nameChild"
                              name="Namechld"
                              label="Name"
                              variant="filled"
                             
                              onChange={event => handleChangeInput5(inputField5.id, event), e => setChild_name(e.target.value)}
                          />
                          </Col>
                          </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-ageChild"
                          >
                            Age:
                          </label>
                     
                       
                     
                      <Col sm="2">
                      
                          <Input
                           class="form-control"
                           name="input-agechld"
                           id="ageChild"
                           variant="filled"
                           type="number"
                           onKeyPress={(event) => {
                            if (!/[0-9,]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                           
                           onChange={event => handleChangeInput5(inputField5.id, event), e => setChild_age(e.target.value)}
                          />
                         
                      </Col>
                      </FormGroup>
                      </Col>
                    </Row>
                            {/* <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                  
                                    >
                                    Name of Child:
                                    </label>
                                    <div class="col-sm-3 mx-6">
                                    <Input
                                      class="form-control"
                                      id="nameChild"
                                      name="Namechld"
                                      label="Name"
                                      variant="filled"
                                      value={inputField5.Namechld}
                                      onChange={event => handleChangeInput5(inputField5.id, event)}
                                    />
                                    </div>

                                  
                                    <label
                                      class="col-sm-auto col-form-label mx--1 "
                                      htmlFor="input-first-name"
                                    >
                                    Age:
                                    </label>
                                    <div class="col-sm-1" >
                                    <Input
                                      class="form-control"
                                      name="agechld"
                                      id="ageChild"
                                      variant="filled"
                                      value={inputField5.agechld}
                                      onChange={event => handleChangeInput5(inputField5.id, event)}
                                    />
                                    </div>
                           </div>     */}

                          <span class="d-flex flex-row-reverse mx-6"  >
                              <button type="button" class="btn btn-success" onClick={btnChildren} disabled={btnDisabled} >Save</button>
                          </span>

                          </div>
                          )) }

                   
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
                            type="radio" name="illnesses" 
                            id="inlineRadio3" 
                            value="true"
                            onChange={e => setHad_illness(e.target.value)}
                            />
                            <label class="form-check-label" for="inlineRadio3">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" name="illnesses" 
                            id="inlineRadio4" 
                            value="false"
                            onChange={e => setHad_illness(e.target.value)}
                            />
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
                                    onChange={e => setIllness_details(e.target.value)}
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
                            type="radio" name="hospitalized" 
                            id="inlineRadio5" 
                            value="true"
                            onChange={e => setHospitalized(e.target.value)}
                            />
                            <label class="form-check-label" for="inlineRadio5">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="hospitalized" 
                            id="inlineRadio6"
                            value="false" 
                            onChange={e => setHospitalized(e.target.value)}
                             />
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
                                    onChange={e => setHospitalized_details(e.target.value)}
                                    rows="5"
                                
                                    type="textarea"
                                   
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
                            class="col-sm-3 col-form-label"
                            htmlFor="purpose"
                         
                          >
                           Purpose:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="purpose"
                            type="text"
                            onChange={e => setLast_checkup_purpose(e.target.value)}
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
                            onChange={e => setLast_checkup_place(e.target.value)}
                        
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
                            onChange={e => setLast_checkup_date(e.target.value)}
                           
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
                          <Col md="8">
                          <Input
                            class="form-control"
                            id="input-distMarks"
                            placeholder="Seperate with comma"
                            type="text"
                            onChange={e => setDistinguishing_marks(e.target.value)}
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-success" onClick={btnMedical} disabled={btnDisabled} >Save</button>
                    </span>
                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">F. References</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}

                     <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-primary" onClick={handleAddFields6} disabled={btnDisabled}>Add Row</button>
                        </span>

                        { inputFields6.map(inputField6 => (
                          <div >  

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label "
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
                           variant="filled"
               
                           onChange={event => handleChangeInput6(inputField6.id, event), e=> setRef_name(e.target.value)}
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
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
                        variant="filled"
                       
                        onChange={event => handleChangeInput6(inputField6.id, event), e=> setRef_occupation(e.target.value)}
                            
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
                           variant="filled"
                          
                           onChange={event => handleChangeInput6(inputField6.id, event), e=> setRef_employer(e.target.value)}
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
{/* 
                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                     
                                    >
                                    Name :
                                    </label>
                                    <div class="col-sm-4 mx-6">
                                    <Input
                                      class="form-control"
                                      id="nameRef"
                                      name="Nameref"
                                      label="Name"
                                      variant="filled"
                                      value={inputField6.Nameref}
                                      onChange={event => handleChangeInput6(inputField6.id, event)}
                                    />
                                    </div>
                           </div> 
                           <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                   
                                    >
                                    Occupation :
                                    </label>
                                    <div class="col-sm-4 mx-6">
                                    <Input
                                      id="occRef"
                                      class="form-control"
                                      name="occref"
                                      label="Name"
                                      variant="filled"
                                      value={inputField6.occref}
                                      onChange={event => handleChangeInput6(inputField6.id, event)}
                                    />
                                    </div>
                           </div>
                           <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                  
                                    >
                                    Employer :
                                    </label>
                                    <div class="col-sm-4   mx-6">
                                    <Input
                                      id="empRef"
                                      class="form-control"
                                      name="empref"
                                      label="Name"
                                      variant="filled"
                                      value={inputField6.empref}
                                      onChange={event => handleChangeInput6(inputField6.id, event)}
                                    />
                                    </div>
                           </div>          */}

                          <span class="d-flex flex-row-reverse mx-6"  >
                            <button type="button" class="btn btn-success" onClick={btnReference} disabled={btnDisabled} >Save</button>
                          </span>
                          </div>
                          )) }
                          


                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">G. ORGANIZATIONS</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}
                     <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-primary" onClick={handleAddFields7} disabled={btnDisabled}>Add Row</button>
                        </span>

                        { inputFields7.map(inputField7 => (
                          <div >  

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="input-NameOrg"
                          >
                           <span style={{display: "inline-flex"}}>Organization<br/>Name:</span>
                          </label>
                     
                        
                      <Col sm="9">
                    
                          <Input
                                   id="nameOrg"
                                   class="form-control"
                                   name="NameOrg"
                                   label="Name"
                                   variant="filled"
                                   
                                   onChange={event => handleChangeInput7(inputField7.id, event), e => setOrg_name(e.target.value)}
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
                            variant="filled"
                           
                            onChange={event => handleChangeInput7(inputField7.id, event), e => setOrg_desc(e.target.value)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-success" onClick={btnOrg} disabled={btnDisabled} >Save</button>
                    </span>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                            {/* <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                 
                                    >
                                    Organization Name :
                                    </label>
                                    <div class="col-sm-6 mx-2">
                                    <Input
                                      id="nameOrg"
                                      class="form-control"
                                      name="NameOrg"
                                      label="Name"
                                      variant="filled"
                                      value={inputField7.NameOrg}
                                      onChange={event => handleChangeInput7(inputField7.id, event)}
                                    />
                                    </div>
                           </div> 
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      style={{marginRight: "-5px"}}
                                    >
                                    Description :
                                    </label>
                                    <div class="col-sm-6 mx-6" style={{marginRight: "5px"}}>
                                    <Input
                                      id="descOrg"
                                      class="form-control"
                                      name="descOrg"
                                      label="Name"
                                      variant="filled"
                                      value={inputField7.descOrg}
                                      onChange={event => handleChangeInput7(inputField7.id, event)}
                                      
                                    />
                                    </div>
                           </div> */}
                          </div>
                          )) }


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
                             type="radio" 
                             name="convicted" 
                             id="inlineRadio7" 
                             value="true" 
                             onChange={e => setConvicted(e.target.value)}
                             />
                            <label class="form-check-label" for="inlineRadio7">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="convicted" 
                            id="inlineRadio8" 
                            value="false" 
                            onChange={e => setConvicted(e.target.value)}
                            />
                            <label class="form-check-label" for="inlineRadio8">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>
                     
                        

                    { inputFields8.map(inputField8 => (
                          <div >  
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
                                 variant="filled"
                                
                                 onChange={event => handleChangeInput8(inputField8.id, event), e => setOffense_details(e.target.value)}
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
                             variant="filled"
                             
                        
                            
                             onChange={event => handleChangeInput8(inputField8.id, event),e => setOffense_court(e.target.value)}
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
                             
                             
                              onChange={event => handleChangeInput8(inputField8.id, event), e => setDate_filed(e.target.value)}
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>











{/* 
                            <div class="form-group row" style={{display: "inline-flex", width: "100%"}} >
                                    <label
                                      class="col-sm-3"
                                     
                                      
                                    >
                                    Nature of Offense:
                                    </label>
                                    <div class="col-sm-6">
                                    <Input
                                      class="form-control"
                                      name="NatureOff"
                                      label="Name"
                                      variant="filled"
                                    
                                      value={inputField8.NatureOff}
                                      onChange={event => handleChangeInput8(inputField8.id, event)}
                                    />
                                    </div>
                           </div> 
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      style={{marginRight:7}}
                                    >
                                    Court of Jurisdiction :
                                    </label>
                                    <div class="col-sm-6 ">
                                    <Input
                                   
                                      class="form-control"
                                      name="courtJuri"
                                      label="Name"
                                      variant="filled"
                                 
                                      value={inputField8.courtJuri}
                                      onChange={event => handleChangeInput8(inputField8.id, event)}
                                    />
                                    </div>
                           </div>
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      style={{marginRight:80}}
                                     
                                    >
                                    Date Filed :
                                    </label>
                                    <div class="col-md-2">
                                    <Input
                                      class="form-control"
                                      name="dateFiled"
                                      label="Name"
                                      variant="filled"
                                      type='date'
                                     
                                      value={inputField8.dateFiled}
                                      onChange={event => handleChangeInput8(inputField8.id, event)}
                                    />
                                    </div>
                           </div> */}
                          </div>
                          )) }


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
                              type="radio" name="termination" 
                              id="inlineRadio9" 
                              value="true"
                              onChange={e => setTermination_record(e.target.value)}
                              />
                              <label class="form-check-label" for="inlineRadio9">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input 
                              class="form-check-input" 
                              type="radio" name="termination" 
                              id="inlineRadio10" 
                              value="false" 
                              onChange={e => setTermination_record(e.target.value)}
                              />
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
                            type="radio" name="denial" 
                            id="inlineRadio11" 
                            value="true"
                            onChange={e => setRevocation_record(e.target.value)}
                             />
                            <label class="form-check-label" for="inlineRadio11">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="denial" 
                            id="inlineRadio12" 
                            value="false" 
                            onChange={e => setRevocation_record(e.target.value)}
                            />
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
                            value="true"
                            onChange={e => setInjunction_record(e.target.value)}
                             />
                            <label class="form-check-label" for="inlineRadio13">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="injunction" 
                            id="inlineRadio14" 
                            value="false" 
                            onChange={e => setInjunction_record(e.target.value)}
                            />
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
                            value = "true"
                            onChange={e => setArrest_record(e.target.value)}
                             />
                            <label class="form-check-label" for="inlineRadio15">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="radio" 
                            name="indictment" 
                            id="inlineRadio16" 
                            value="false"
                            onChange={e => setArrest_record(e.target.value)}
                            />
                            <label class="form-check-label" for="inlineRadio16">NO</label>
                          </div>

                          </Row>
                        </FormGroup>
                       </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-success" onClick={btnOffense} disabled={btnDisabled} >Save</button>
                    </span>
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
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Name:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            onChange = {e => setPerson_name(e.target.value)}
                     
                            
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
                            onChange = {e => setPerson_relationship(e.target.value)}
                       
                            
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
                            onChange = {e => setPerson_address(e.target.value)}
                     
                            
                            
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
                            type="number"
                              onKeyPress={(event) => {
                              if (!/[0-9,-]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onChange = {e => setPerson_phone(e.target.value)}
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <span class="d-flex flex-row-reverse mx-7" >
                        <button type="button" class="btn btn-success" onClick={btnEmergency} disabled={btnDisabled} >Save</button>
                    </span>
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
                          <Col sm="5">
                          
                            <div class="d-flex flex-row-reverse mx--4">
                              
                         
                            {/* <input type="file" style={{display:'none'}} id="file" name="file"/>
                            <button type="button" class="btn btn-success" id="loadFileXml" onClick="document.getElementById('file').click();" >Upload Signature</button> */}
                             <FormGroup>
       
                            <CustomInput 
                              type="file" 
                              id="exampleCustomFileBrowser" 
                              name="customFile" 
                              label="Upload Signature"
                              onChange = {e => setEmployee_signature(e.target.value)}
                              >

                              </CustomInput>
                            </FormGroup>     
                            </div>
                          </Col >
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

                  
                      <span class="d-flex flex-row-reverse mx-7" >
                      <button type="button" class="btn btn-primary btn-md p-3 mb-4" onClick={btnSignature} disabled={btnDisabled} >CREATE EMPLOYEE</button>
                      </span>
                 

                   
                  </div>
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
        
    </>
  );
};


export default Profile;
