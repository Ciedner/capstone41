import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container, Table } from "react-bootstrap";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import { useNavigate, useLocation, Link } from "react-router-dom";

const CardLayout = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [showUserDetail, setShowUserDetail] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleViewRevenue = () => {
    setShowTable(true);
    setShowUserDetail(false);
    setShowReservation(false);
  };

  const handleViewUserDetail = () => {
    setShowUserDetail(true);
    setShowTable(false);
    setShowReservation(false);
  };

  const handleViewReservation = () => {
    setShowReservation(true);
    setShowTable(false);
    setShowUserDetail(false);
  };

  return (
    <div style={{ backgroundColor: '#3b89ac', minHeight: "100vh" }}>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003851" }}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              SpotWise Parking Management System
            </Link>
          </div>
        </nav>
        <Row style={{ marginTop: '20px' }}>
          <Col md={5}>
            <Container>
              <Row>
                <Col md={6}>
                  <MDBCard
                    style={{ height: '400px' }}
                    onMouseEnter={() => handleCardHover(1)}
                    onMouseLeave={handleCardLeave}
                    className={hoveredCard === 1 ? 'hovered-card' : ''}
                  >
                    <MDBCardImage src='https://media.istockphoto.com/id/1306314288/vector/monthly-financial-report-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=hFZfzotHine6telPBHeMxuONa63THVczLWQJgC4h9HQ=' style={{ objectFit: 'cover', height: '50%' }} />
                    <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
                      <div>
                        <MDBCardTitle style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Revenue</MDBCardTitle>
                        <MDBCardText style={{ fontFamily: 'serif' }}>
                          This section provides a concise overview of the financial gains achieved.
                        </MDBCardText>
                      </div>
                      <MDBBtn onClick={handleViewRevenue} style={{ fontFamily: 'Courier New' }}>View Revenue</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </Col>
                <Col md={6}>
                  <MDBCard
                    style={{ height: '400px' }}
                    onMouseEnter={() => handleCardHover(2)}
                    onMouseLeave={handleCardLeave}
                    className={hoveredCard === 2 ? 'hovered-card' : ''}
                  >
                    <MDBCardImage src='https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' style={{ objectFit: 'cover', height: '50%' }} />
                    <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
                      <div>
                        <MDBCardTitle style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Users</MDBCardTitle>
                        <MDBCardText style={{ fontFamily: 'serif' }}>
                          This section offers a brief summary of the user base.
                        </MDBCardText>
                      </div>
                      <MDBBtn onClick={handleViewUserDetail} style={{ fontFamily: 'Courier New' }}>View User Detail</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </Col>
              </Row>
              <Row style={{ marginTop: '10px' }}>
                <Col md={6}>
                  <MDBCard
                    style={{ height: '400px' }}
                    onMouseEnter={() => handleCardHover(3)}
                    onMouseLeave={handleCardLeave}
                    className={hoveredCard === 3 ? 'hovered-card' : ''}
                  >
                    <MDBCardImage src='https://icon-library.com/images/reservation-icon-png/reservation-icon-png-29.jpg' style={{ objectFit: 'cover', height: '50%' }} />
                    <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
                      <div>
                        <MDBCardTitle style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Reservation</MDBCardTitle>
                      </div>
                      <MDBCardText style={{ fontFamily: 'serif' }}>
                        This section provides information about reservation.
                      </MDBCardText>
                      <MDBBtn onClick={handleViewReservation} style={{ fontFamily: 'Courier New' }}>View Reservation</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </Col>
                <Col md={6}>
                  <MDBCard
                    style={{ height: '400px' }}
                    onMouseEnter={() => handleCardHover(4)}
                    onMouseLeave={handleCardLeave}
                    className={hoveredCard === 4 ? 'hovered-card' : ''}
                  >
                    <MDBCardImage src='https://media.istockphoto.com/id/1306314288/vector/monthly-financial-report-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=hFZfzotHine6telPBHeMxuONa63THVczLWQJgC4h9HQ=' position='top' alt='...' style={{ objectFit: 'cover', height: '50%' }} />
                    <MDBCardBody style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
                      <div>
                        <MDBCardTitle style={{ fontFamily: 'Courier New' }}>Monthly Revenue</MDBCardTitle>
                        <MDBCardText style={{ fontFamily: 'serif' }}>
                          This section provides a concise overview of the financial gains achieved.
                        </MDBCardText>
                      </div>
                      <MDBBtn href='#' style={{ fontFamily: 'Courier New' }}>View Revenue</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={7}>
            <Container style={{ backgroundColor: '#fff', padding: '20px', marginTop: '20px', height: '600px' }}>
              {showTable ? (
                <>
                  <h3 style={{ fontFamily: 'Courier New', fontWeight: 'bold', textAlign: 'center' }}>INCOME DETAIL</h3>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2023-07-01</td>
                        <td>$500</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2023-07-02</td>
                        <td>$750</td>
                      </tr>
                    </tbody>
                  </Table>
                </>
              ) : showUserDetail ? (
                <>
                  <h3 style={{ fontFamily: 'Courier New', fontWeight: 'bold', textAlign: 'center' }}>USER DETAIL</h3>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Junas Nazarito Gutib</td>
                        <td>wakwak@gmail.com</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Gilbert Canete</td>
                        <td>gilbertcanete@gmail.com</td>
                      </tr>
                    </tbody>
                  </Table>
                </>
              ) : showReservation ? (
                <>
                  <h3 style={{ fontFamily: 'Courier New', fontWeight: 'bold', textAlign: 'center' }}>RESERVATION DETAIL</h3>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Email</th>
                        <th>Plate Number</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2023-07-01</td>
                        <td>10:00 AM</td>
                        <td>gilbertcanete@gmail.com</td>
                        <td>ABC-123</td>
                        <td>Ok</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2023-07-02</td>
                        <td>2:30 PM</td>
                        <td>wakwak@gmail.com</td>
                        <td>DEF-456</td>
                        <td>Cancelled</td>
                      </tr>
                    </tbody>
                  </Table>
                </>
              ) : (
                <>
                  <h3>Additional Information</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec posuere mauris, eget posuere dui. Nam suscipit urna at mauris aliquam, ac mattis justo pellentesque.</p>
                  <p>Morbi laoreet lectus auctor felis aliquet, in lacinia leo varius. Vestibulum mollis nulla arcu, sit amet gravida erat efficitur sed.</p>
                </>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardLayout;
