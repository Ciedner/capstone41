import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
  function Transaction () {
    const location = useLocation();
    const navigate = useNavigate();
  
    
    const handleGcash = () => {
      navigate("/gcash");
    };
    
  
    const handlePaypal  = () => {
        navigate("/paypal");
      };
  
    const handleTransaction = () => {
      navigate ("/transact");
    };

    const backgroundStyle = {
       
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        backgroundColor: "white",
      };
    
      const dashboardStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 56px)", 
      };
    
      const cardStyle = {
        width: "300px",
      };
      return (
        <div className="homepage">
          <div style={backgroundStyle}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                <Link className="navbar-brand" to="/">
                  Mode of Transaction
                </Link>
              
              </div>
            </nav>
            <div style={dashboardStyle}>
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    <MDBCard style={cardStyle}>
                      <MDBCardImage
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEF-Ma9zi1kDgdXFrlcQAOwU8kz3gcBXvR7TTTnAtaA&s"
                        alt="Card image"
                        top
                      />
                      <MDBCardBody>
                        <h5 className="card-title">Gcash</h5>
                        <p className="card-text">Gcash Trasanction</p>
                        <MDBBtn color="primary" onClick={handleGcash}>
                          Go
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyle}>
                      <MDBCardImage
                        src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
                        alt="Card image"
                        top
                      />
                      <MDBCardBody>
                        <h5 className="card-title">PayPal</h5>
                        <p className="card-text">Paypal Transaction</p>
                        <MDBBtn color="primary" onClick={handlePaypal}>
                          Go
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyle}>
                      <MDBCardImage
                        src="https://static.vecteezy.com/system/resources/previews/019/006/277/original/money-cash-icon-png.png"
                        alt="Card image"
                        top
                      />
                      <MDBCardBody>
                        <h5 className="card-title">Cash</h5>
                        <p className="card-text">Cash Payment</p>
                        <MDBBtn color="primary" onClick={handleTransaction}>
                          Go 
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </div>
        </div>
      );
  }
  export default Transaction;