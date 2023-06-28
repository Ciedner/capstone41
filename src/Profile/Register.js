import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';

const Register = () => {
  return (
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Sign up </p>
          </div>
          <div className="form-flex-row mb-n4">
            <div className="col">
              <CDBInput material hint="First name" type="email" placeholder='Email' />
            </div>
            <div className="col">
              <CDBInput material hint="Last name" type="password" placeholder='Password' />
            </div>
          </div>
          <CDBInput material hint="E-mail" type="password" placeholder='Repeat Password' />
          <p>General Information</p>
          <CDBInput material hint="Address" type="text" placeholder='Address'/>
          <CDBInput material hint="Phone number" type="text" placeholder='Phone Number' />
          <CDBBtn color="dark" className="btn-block my-3 mx-0">
            Sign up
          </CDBBtn>
          <p className="text-center"> or sign up with</p>
          <div className="flex-row mb-3 d-flex justify-content-center">
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
              <CDBIcon fab icon="google-plus-g" />
            </CDBBtn>
          </div>
          <p className="text-center m-0">
            Already have an account?{' '}
            <CDBLink className="d-inline p-0" to="#">
              Sign In
            </CDBLink>
          </p>
          <hr />
          <p className="text-center">
            By clicking <em>Sign up</em> you agree to our{' '}
            <CDBLink className="d-inline p-0" to="#">
              terms of service
            </CDBLink>
          </p>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Register;