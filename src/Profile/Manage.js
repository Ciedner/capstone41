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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLocationDot, faPhone, faCakeCandles, faCar, faListOl} from '@fortawesome/free-solid-svg-icons';

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

  
  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };
  
  const listItemHoverStyle = {
    backgroundColor: "#B7CEEC",
  };

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
    setLname(event.target.value);
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
    <div style={{ backgroundColor: '#3b89ac' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
         
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody style={{textAlign:'center', backgroundColor:'#bfd2d9'}}>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '100px' }}
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
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody style={{textAlign:'center', backgroundColor:'#bfd2d9'}}>
              <p style={{fontFamily:'Courier New', fontSize:'18px', textAlign:'center'}}>General Information</p>
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}>
                  <FontAwesomeIcon icon={faUser} />
                    <MDBCardText >{userData?.fName || ""} {userData?.lName || ""}
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
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}>
                  <FontAwesomeIcon icon={faEnvelope} />
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
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}>
                  <FontAwesomeIcon icon={faLocationDot} />
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
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}>
                  <FontAwesomeIcon icon={faPhone} />
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
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}>
                  <FontAwesomeIcon icon={faCakeCandles} />
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
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}>
                  <FontAwesomeIcon icon={faCar} />
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
                  <MDBListGroupItem style={listItemStyle}
                    hover
                    className="d-flex justify-content-between align-items-center p-3"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}>
                  <FontAwesomeIcon icon={faListOl} />
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
                  <MDBCol
                    className="text-danger"
                    style={{ cursor: 'pointer', transition: 'color 0.3s', fontFamily:'Garamond' }}
                    onMouseEnter={(e) => (e.target.style.color = 'black')}
                    onMouseLeave={(e) => (e.target.style.color = 'red')}
                    onClick={handleLogOut}
                  >
                  Log Out
                  </MDBCol>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody style={{textAlign:'center', backgroundColor:'#bfd2d9'}}>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{fontFamily:'Courier New', fontSize:'15px'}}>Parking Information</MDBCardText>
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
                  <MDBCardBody style={{backgroundColor:'#bfd2d9'}}>
                    <MDBCardText className="mb-4">
                      <span style={{fontFamily:'Courier New', fontSize:'15px'}}>Parking Place</span>
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>Country Mall Parking</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>University of Cebu</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>BTC Parking Space</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>Gaisano Mandaue City</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>Ayala Block</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody style={{backgroundColor:'#bfd2d9'}}>
                    <MDBCardText className="mb-4">
                      <span style={{fontFamily:'Courier New', fontSize:'15px'}}>Duration / Hours</span>
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>17 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>15 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>20 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>11 hours in a week</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{fontFamily:'Garamond', fontSize:'15px'}}>14 hours in a week</MDBCardText>
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
    </div>
  );
}

export default Manage;
