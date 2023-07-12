import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate, Link } from "react-router-dom";

const styles = {
  pageContainer: {
    backgroundColor: "#3b89ac",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: "0 auto",
  },
  container: {
    width: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#bfd2d9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  },
  submitButton: {
    width: '50%',
    marginTop: '20px',
  },
};


function ChangePassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      setErrorMessage('Please enter your email or username.');
      return;
    }
    if (newPassword === '') {
      setErrorMessage('Please enter a new password.');
      return;
    }

    if (confirmPassword === '') {
      setErrorMessage('Please confirm your new password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8000/update/${email}`, {
        newPassword: newPassword,
      });

      setNewPassword('');
      setConfirmPassword('');
      setErrorMessage('');

      alert('User updated successfully.');
    } catch (error) {
      console.error('Error updating password:', error);
      setErrorMessage('Failed to update password. Please try again.');
    }
  };

  return (
    <div style={styles.pageContainer}>
    <div style={styles.container}>
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4" style={{fontFamily:"Courier New", fontSize:"30px"}}>Reset Password</h2>
          {errorMessage && <div className="text-danger text-center mb-3">{errorMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Label style={{fontFamily:"Courier New", textAlign:"center"}}>Email</Form.Label>
            <Form.Group controlId="formNewPassword">
              <Form.Control 
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            <Form.Label style={{fontFamily:"Courier New", textAlign:"center"}}>Enter New Password</Form.Label>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Form.Label style={{fontFamily:"Courier New", textAlign:"center"}}>Confirm Password</Form.Label>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="w-100 mt-4" style={{fontFamily:"Courier New", fontSize:"15px"}}>
               Reset Password
              </Button>
            </div>
            <div>
            <Button variant="primary" type="submit" className="w-100 mt-4" style={{fontFamily:"Courier New", fontSize:"15px"}} onClick={handleButtonClick}>
                Home
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
}

export default ChangePassword;
