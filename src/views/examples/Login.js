import api from "api/api";
import React, { useState } from "react";
import {Link, Redirect} from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";



function Login  () {
  const [invalidText, setInvalidText] = useState('')
  const [indexEmp, setIndexEmp] = useState(0)
  const [indexPass, setIndexPass] = useState(0)
  const [redirect, setRedirect] = useState(false)
  const [password, setPassword] = useState('')
  const [employee_number, setEmp_num] = useState('')

  const Reset = () => {
    setInvalidText('')
    setPassword('')
    setEmp_num('')
    setIndexPass(0)
    setIndexEmp(0)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const users = {
      employee_number:employee_number,
      password:password
    }
    if (employee_number == "" && password == ""){
      setIndexEmp(1)
      setIndexPass(1)
      setInvalidText('Employee Number & Password fields are empty!')
      return false
    }
    else if (employee_number == ""){
      setIndexEmp(1)
      setIndexPass(0)
      setInvalidText('Employee Number field is empty!')
      return false
    }
    else if (password == ""){
      setIndexPass(1)
      setIndexEmp(0)
      setInvalidText('Password field is empty!')
      return false
    }
    api.post('employees/login-hr', users)
    .then(res => {
      if(res.user.department_role == null){
        setInvalidText('User has no department yet.')
        Reset()
      }
      else{
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('id', res.user.employee_id)
        Reset()
        setRedirect(true)
      } 
    })
    .catch(err => {
      setInvalidText('Incorrect login credentials.')
      console.log(err)
      return false
      })
      return true
  }

  if(redirect == true){
    return <Redirect to= "/admin/EmployeeRegistration"/>
  }
  
    return (
      <>
        <Col lg="5" md="7" style={{marginTop: "50px"}}>
          <Card className="bg-secondary shadow border-0">
            <CardHeader >
              <div >
                  <h1>Log In</h1>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
             
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Employee Number"
                      type="text"
                      onChange={e=> setEmp_num(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={e=> setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
               
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={handleLogin}>
                    Log In
                  </Button>
                  <br></br>
                  <br></br>
                </div>
                <div className="text-center" style={{color: 'red'}}>{invalidText}</div>
              </Form>
            </CardBody>
          </Card>
         
        </Col>
      </>
    );
  };

export default Login;
