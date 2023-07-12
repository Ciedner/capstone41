import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faCoins, faBars, faCar, faClock, faUser, faBarsProgress} from '@fortawesome/free-solid-svg-icons';

const image = {
  flex: '0 0 150px', 
  marginRight: '20px', 
};
const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  transition: "background-color 0.3s ease",
  cursor: "pointer",
};

const listItemHoverStyle = {
  backgroundColor: "#CECECE",
};

const AdminDashboard = ({recentAddedUser }) => {
  const location = useLocation();
  const navigate = useNavigate();


  

  const handleButtonClick = () => {
    navigate("/report");
  };

  return (  
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <p>Administrator</p>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '70px' }}
                  fluid
                />
                <p className="text-muted mb-1">Marky Parking Management</p>
                <p className="text-muted mb-4">Talamban, Cebu</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}
                  >
                    <FontAwesomeIcon icon={faBars} />
                    <MDBCardText>Dashboard</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}
                  >
                    <FontAwesomeIcon icon={faCar} />
                    <MDBCardText>View Parking</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem  style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}
                  >
                  <FontAwesomeIcon icon={faComputer} />
                    <MDBCardText onClick={() => handleButtonClick()}>Operator Information</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}
                  >
                    <FontAwesomeIcon icon={faCoins} />
                    <MDBCardText>View Revenues</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <MDBCardText>Total Users</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> 
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                
                <MDBCardText className="mb-4"  > <FontAwesomeIcon icon={faClock} /> <span className="text-primary font-italic me-1"> Recent Added Vehicle</span></MDBCardText>
                <MDBRow>
                <MDBCol md="4">
                    <MDBCard>
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.dofiS1lbDbvM7eFL_9AMQAHaEE&pid=Api&P=0&h=180"
                        className="img-fluid"
                        alt="img"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Parking Information</MDBCardTitle>
                        <MDBCardText>Vehicle: </MDBCardText>
                        <MDBCardText>Vehicle Plate: </MDBCardText>
                        <MDBCardText>Time in: </MDBCardText>
                        <MDBCardText>Time out: </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                  <MDBCol md="4">
                  {recentAddedUser && (
                    <MDBCard>
                      <img
                        src="http://www.pngmart.com/files/4/Car-PNG-Photo.png"
                        className="img-fluid"
                        alt="Another Vehicle"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Parking Information</MDBCardTitle>
                        <MDBCardText>Vehicle: {recentAddedUser.vehicle}</MDBCardText>
                        <MDBCardText>Vehicle Plate: {recentAddedUser.plate}</MDBCardText>
                        <MDBCardText>Time in: {recentAddedUser.timeIn}</MDBCardText>
                        <MDBCardText>Time out: {recentAddedUser.timeOut}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  )}
                  </MDBCol>
                  <MDBCol md="4">
                  {recentAddedUser && (
                    <MDBCard>
                      <img
                        src="http://www.pngmart.com/files/4/Car-PNG-Picture.png"
                        className="img-fluid"
                        alt="Another Vehicle"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Parking Information</MDBCardTitle>
                        <MDBCardText>Vehicle: {recentAddedUser.vehicle}</MDBCardText>
                        <MDBCardText>Vehicle Plate: {recentAddedUser.plate}</MDBCardText>
                        <MDBCardText>Time in: {recentAddedUser.timeIn}</MDBCardText>
                        <MDBCardText>Time out: {recentAddedUser.timeOut}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                     )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"  > <FontAwesomeIcon icon={faUser} /> <span className="text-primary font-italic me-1"> Recent Parking User</span></MDBCardText>
                    <MDBCol md="12">
                      <MDBCard>
                        <MDBCardBody className="d-flex">
                          <div style={{ ...image }} className="image">
                            <img
                              src="https://www.pngplay.com/wp-content/uploads/5/Mark-Zuckerberg-Transparent-Images.png"
                              className="img-fluid"
                              alt="Another Vehicle"
                            />
                          </div>
                          <div>
                            <MDBCardText>First Name: Mark</MDBCardText>
                            <MDBCardText>Last Name: Zuckerberg</MDBCardText>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBCard>
                          <MDBCardBody className="d-flex">
                            <div style={{ ...image }} className="image">
                              <img
                                src="https://pngimg.com/uploads/conor_mcgregor/conor_mcgregor_PNG46.png"
                                className="img-fluid"
                                alt="Another Vehicle"
                              />
                            </div>
                            <div>
                              <MDBCardText>First Name: Conor</MDBCardText>
                              <MDBCardText>Last Name: McGregor</MDBCardText>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBCard>
                          <MDBCardBody className="d-flex">
                            <div style={{ ...image }} className="image">
                              <img
                                src="https://www.techtrends.bg/wp-content/uploads/2019/07/Elon-Musk-Quote.png"
                                className="img-fluid"
                                alt="Another Vehicle"
                              />
                            </div>
                            <div>
                              <MDBCardText>First Name: Elon</MDBCardText>
                              <MDBCardText>Last Name: Musk</MDBCardText>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"  > <FontAwesomeIcon icon={faBarsProgress} /> <span className="text-primary font-italic me-1"> Management Information</span></MDBCardText>
                    <MDBCard>
                      <button className="card-button" color="">
                        <img src="https://www.freeiconspng.com/thumbs/reservation-icon/reservation-icon-14.png" style={{ height: '80px' }} alt="Card 1" className="card-image" />
                        <p>Reservation</p>
                      </button>

                      <button className="card-button" color="">
                        <img src="https://www.pngmart.com/files/7/Graph-PNG-Transparent-Image.png" style={{ height: '80px' }} alt="Card 1" className="card-image" />
                        <p>View Parking Revenue Graph</p>
                      </button>

                      <button className="card-button" color="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve4v7bfNT-wW9I1k9nskn3UFXnZuVGlgsjF2qjq0&s" style={{ height: '80px' }} alt="Card 1" className="card-image" />
                        <p>Feedback</p>
                      </button>
                    </MDBCard>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default AdminDashboard;