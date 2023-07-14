import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import { useNavigate, useLocation, Link} from "react-router-dom";

const CardLayout = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  

  return (
    <div style={{ backgroundColor: '#3b89ac', minHeight: "100vh"}}>
    <Container>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003851" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            SpotWise Parking Management System
          </Link>
        </div>
      </nav>
      <Row style={{marginTop:'20px' }}>
        <Col md={9}>
          <Container>
            <Row>
              <Col md={4}>
                <MDBCard
                  style={{ height: '400px'}}
                  onMouseEnter={() => handleCardHover(1)}
                  onMouseLeave={handleCardLeave}
                  className={hoveredCard === 1 ? 'hovered-card' : ''}
                >
                  <MDBCardImage src='https://media.istockphoto.com/id/1306314288/vector/monthly-financial-report-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=hFZfzotHine6telPBHeMxuONa63THVczLWQJgC4h9HQ='style={{ objectFit: 'cover', height: '75%' }} />
                  <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto'  }}>
                    <div>
                      <MDBCardTitle style={{ fontFamily: 'Courier New', fontWeight:'bold' }}>Revenue</MDBCardTitle>
                      <MDBCardText style={{ fontFamily: 'serif' }}>
                        This section provides a concise overview of the financial gains achieved.
                      </MDBCardText>
                    </div>
                    <MDBBtn href='#' style={{ fontFamily: 'Courier New' }}>View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col md={4}>
                <MDBCard
                  style={{ height: '400px' }}
                  onMouseEnter={() => handleCardHover(2)}
                  onMouseLeave={handleCardLeave}
                  className={hoveredCard === 2 ? 'hovered-card' : ''}
                >
                  <MDBCardImage src='https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' style={{ objectFit: 'cover', height: '75%' }} />
                  <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto'  }}>
                    <div>
                      <MDBCardTitle style={{ fontFamily: 'Courier New', fontWeight:'bold' }}>Users</MDBCardTitle>
                      <MDBCardText style={{ fontFamily: 'serif' }}>
                      This section offers a brief summary of the user base, providing key insights and statistics regarding the number and behavior of individuals engaging with the platform or service.
                      </MDBCardText>
                    </div>
                    <MDBBtn href='#' style={{ fontFamily: 'Courier New' }}>View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
            <Row style={{marginTop:'10px'}}>
              <Col md={4}>
                <MDBCard
                  style={{ height: '400px' }}
                  onMouseEnter={() => handleCardHover(3)}
                  onMouseLeave={handleCardLeave}
                  className={hoveredCard === 3 ? 'hovered-card' : ''}
                >
                  <MDBCardImage src='https://media.istockphoto.com/id/1306314288/vector/monthly-financial-report-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=hFZfzotHine6telPBHeMxuONa63THVczLWQJgC4h9HQ=' style={{ objectFit: 'cover', height: '75%' }} />
                  <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
                  <div>
                    <div>
                      <MDBCardTitle style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Monthly Revenue</MDBCardTitle>
                    </div>
                    <MDBCardText style={{ fontFamily: 'serif' }}>
                      This section provides a concise overview of the financial gains achieved within a specific month.
                    </MDBCardText>
                  </div>
                  <MDBBtn href='#' style={{ fontFamily: 'Courier New' }}>View Revenue</MDBBtn>
                </MDBCardBody>

                </MDBCard>
              </Col>
              <Col md={4}>
                <MDBCard
                  style={{ height: '400px' }}
                  onMouseEnter={() => handleCardHover(4)}
                  onMouseLeave={handleCardLeave}
                  className={hoveredCard === 4 ? 'hovered-card' : ''}
                >
                  <MDBCardImage src='https://media.istockphoto.com/id/1306314288/vector/monthly-financial-report-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=hFZfzotHine6telPBHeMxuONa63THVczLWQJgC4h9HQ=' position='top' alt='...' style={{ objectFit: 'cover', height: '50%' }} />
                  <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto'  }}>
                    <div>
                      <MDBCardTitle style={{ fontFamily: 'Courier New' }}>Monthly Revenue</MDBCardTitle>
                      <MDBCardText style={{ fontFamily: 'serif' }}>
                        This section provides a concise overview of the financial gains achieved within a specific month.
                      </MDBCardText>
                    </div>
                    <MDBBtn href='#' style={{ fontFamily: 'Courier New' }}>View Revenue</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default CardLayout;
