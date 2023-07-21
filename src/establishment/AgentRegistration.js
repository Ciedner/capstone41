import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link } from "react-router-dom";

function RegistrationForm() {
  const [fName, setFName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lName, setLName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRadioOption, setSelectedRadioOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', fName);
    console.log('Last Name:', lName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    console.log('Gender:', gender);
    console.log('Password:', password);
    console.log('Selected Radio Option:', selectedRadioOption);
  };

  return (
    <div style={{ backgroundColor: '#3b89ac', minHeight: "100vh" }}>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003851" }}>
          <div className="container">
            <Link className="navbar-brand" to="/estDashBoard">
              SpotWise Parking Management System
            </Link>
          </div>
        </nav>
      <Container style={{backgroundColor:'#bfd2d9', marginTop:'40px', borderRadius:'25px', height:'700px'}}>
      <h2 style={{fontFamily:'Courier New',textAlign:'center'}}>Agent Registration</h2>
      <Row style={{marginLeft:'40px', marginTop:'50px'}}>
        <h5 style={{fontFamily:'Courier New'}}>Profile Information</h5>
        <Col md={3} style={{marginTop:'15px'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input style={{fontFamily:'Georgia', fontSize:'18px'}}
            type="text"
            id="fName"
            className="form-control"
            placeholder='Agent First Name'
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        </form>
        </Col>
        </Row>
        <Row style={{marginLeft:'40px'}}>
        <Col md={3} style={{marginTop:'15px'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input style={{fontFamily:'Georgia', fontSize:'18px'}}
            type="text"
            id="lName"
            className="form-control"
            placeholder='Agent Last Name'
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        </form>
        </Col>
        </Row>
        <Row style={{marginLeft:'40px'}}>
        <Col md={3} style={{marginTop:'15px'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input style={{fontFamily:'Georgia', fontSize:'18px'}}
            type="text"
            id="address"
            className="form-control"
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        </form>
        </Col>
        </Row>
        <Row style={{marginLeft:'40px'}}>
        <Col md={3} style={{marginTop:'15px'}}>
        <form>
        <div className="form-group">
          <input style={{fontFamily:'Georgia', fontSize:'18px'}}
            type="email"
            id="email"
            className="form-control"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        </form>
        </Col>
      </Row>
      <Row style={{marginLeft:'40px'}}>
        <Col md={3} style={{marginTop:'15px'}}>
        <form>
        <div className="form-group">
          <input style={{fontFamily:'Georgia', fontSize:'18px'}}
            type="text"
            id="phoneNumber"
            className="form-control"
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </form>
      </Col>
      </Row>
      <Row style={{marginLeft:'40px'}}>
      <Col md={3} style={{marginTop:'15px'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input style={{fontFamily:'Georgia', fontSize:'18px'}}
            type="password"
            id="password"
            className="form-control"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        </form>
        </Col>
      </Row>
      <Row style={{marginLeft:'40px'}}>
      <Col md={3} style={{marginTop:'25px', marginLeft:'60px',  transform: "scale(1.2)", }}>
      <input
        type="radio"
        id="radioOption1"
        className="form-check-input"
        value="option1"
        checked={selectedRadioOption === "option1"}
        onChange={(e) => setSelectedRadioOption(e.target.value)}
      />
      <label className="form-check-label" htmlFor="radioOption1" style={{fontFamily:'Georgia', marginLeft:'5px'}}>
        Male
      </label>
      <input style={{marginLeft:'35px'}}
        type="radio"
        id="radioOption2"
        className="form-check-input"
        value="option2"
        checked={selectedRadioOption === "option2"}
        onChange={(e) => setSelectedRadioOption(e.target.value)}
      />
      <label className="form-check-label" htmlFor="radioOption2" style={{fontFamily:'Georgia', marginLeft:'5px'}}>
        Female
      </label>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default RegistrationForm;
