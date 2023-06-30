import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBProgress,
  MDBProgressBar,
  MDBListGroupItem,
  MDBCardImage,
  MDBListGroup,
  MDBBreadcrumbItem,
  MDBBreadcrumb,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';


function Manage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = localStorage.getItem('user');

        if (loggedInUser) {
          const response = await axios.get(`http://localhost:8000/user/${loggedInUser}`);

          if (response.data) {
            setUserData(response.data);
          }
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      navigate("/");
    }
  }, []);

  function handleHome(event) {
    navigate("/home");
  }
  function handleFNameChange(event) {
    setFname(event.target.value);
  }
  function handleLNameChange(event) {
    setFname(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleVehicleChange(event) {
    setVehicle(event.target.value);
  }

  function handlePlateNumberChange(event) {
    setPlateNumber(event.target.value);
  }

  function handleEditProfile() {
    setIsEditing(true);
  }
  function handleAddressChange() {
    setIsEditing(true);
  }

  function handleContactChange() {
    setIsEditing(true);
  }
  function handleBirthdayChange() {
    setIsEditing(true);
  }
  async function handleSaveProfile() {
    const updatedUserData = {
      fName: fName,
      lName: lName,
      email: email,
      vehicle: vehicle,
      plate: plateNumber,
      address: address,
      birthday: birthday,
      contact: contact,
    };

    try {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
        await axios.put(`http://localhost:8000/user/${loggedInUser}`, updatedUserData);
        setUserData(updatedUserData);
        setIsEditing(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate("/");
  };

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
              <p onClick={handleHome}> Back </p>
             
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <div className="d-flex justify-content-center mb-2">
                  {isEditing ? (
                    <MDBBtn onClick={handleSaveProfile}>Save Profile</MDBBtn>
                  ) : (
                    <MDBBtn onClick={handleEditProfile}>Edit Profile</MDBBtn>
                  )}
                  <MDBBtn outline className="ms-1">
                    Message
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
            <p>General Information</p>
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="fa-solid fa-user" />
                    <MDBCardText>{userData?.fName || ""} {userData?.lName || ""}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={fName}
                        onChange={handleFNameChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{fName}</MDBCardText>
                    )}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={lName}
                        onChange={handleLNameChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{lName}</MDBCardText>
                    )}
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="envelope" style={{ color: '#333333' }} />
                    <MDBCardText> {userData?.email || ""}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{email}</MDBCardText>
                    )}
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="map-marker" style={{ color: '#333333' }} />
                    <MDBCardText>{userData?.address || ""}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{address}</MDBCardText>
                    )}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="phone" style={{ color: '#333333' }} />
                    <MDBCardText>{userData?.contact || ""}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={contact}
                        onChange={handleContactChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{contact}</MDBCardText>
                    )}
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="calendar" style={{ color: '#333333' }} />
                    <MDBCardText>{userData?.birthday || ""}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={birthday}
                        onChange={handleBirthdayChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{birthday}</MDBCardText>
                    )}
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="car" style={{ color: '#333333' }} />
                    <MDBCardText>{userData?.vehicle || ""}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={vehicle}
                        onChange={handleVehicleChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{vehicle}</MDBCardText>
                    )}
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="list-ol" style={{ color: '#333333' }} />
                    <MDBCardText>{userData?.plate || ""}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={plateNumber}
                        onChange={handlePlateNumberChange}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{plateNumber}</MDBCardText>
                    )}
                    </MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
            <MDBCol
              className="text-danger"
              style={{ cursor: 'pointer', transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.target.style.color = 'black')}
              onMouseLeave={(e) => (e.target.style.color = 'red')}
              onClick={handleLogOut}
            >
              Log Out
            </MDBCol>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Parking Information</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                   
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
              </MDBCard>
            </MDBCol>



            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">Parking</span> Place
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Country Mall Parking</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>University of Cebu</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>BTC Parking Space</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Gaisano Mandaue City</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ayala Block</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">Duration</span> Hours/Week
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>17 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>15 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>20 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>11 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>14 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Manage;
