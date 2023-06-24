import { useLocation, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBTypography,
  MDBIcon
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function UpdateUserForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate("/home");
  };

  const handleDelete = () => {
    navigate("/delete");
  };

  const handleUpdate = () => {
    navigate("/change");
  };

  const handleLogOut = () => {
    navigate("/");
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${location.state?.email}`);
        console.log("Response:", response);
  
        if (response.data) {
          setUserData(response.data);
          console.log("User Data:", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUserData();
  }, [location.state?.email]);
  
  
  

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Profile Settings</h1>
        <div className="text-center">
          <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="12" xl="6"> 
                <MDBCard style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle"
                        fluid
                        style={{ width: '150px' }} 
                      />
                    </div>
                      <>
                      <MDBTypography tag="h4">{userData?.username || ""}</MDBTypography>
<MDBCardText className="text-muted mb-4">{userData?.email || ""}</MDBCardText>

                      </>
                    <div className="mb-4 pb-2">
                      <MDBBtn outline floating>
                        <MDBIcon fab icon="facebook" size="lg" />
                      </MDBBtn>
                      <MDBBtn outline floating className="mx-1">
                        <MDBIcon fab icon="twitter" size="lg" />
                      </MDBBtn>
                      <MDBBtn outline floating>
                        <MDBIcon fab icon="skype" size="lg" />
                      </MDBBtn>
                    </div>
                    <MDBBtn rounded size="lg" onClick={togglePopup}>
                      Edit Profile
                    </MDBBtn>
                    {showPopup && (
                      <div className="popup">
                        <div className="popup-inner">
                          <h2>Edit Profile</h2>
                          <div style={styles.buttonContainer}>
                            <button style={styles.button} onClick={handleDelete}>
                              Delete All Users
                            </button>
                            <button style={styles.button} type="button" onClick={handleUpdate}>
                              Update User
                            </button>
                            <button style={styles.button} type="button" onClick={handleButtonClick}>
                              Home
                            </button>
                            <button style={styles.button} type="button" onClick={handleLogOut}>
                              Log Out
                            </button>
                            <button style={styles.button} onClick={togglePopup}>
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        <form></form>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: "#3C3131",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "750px", 
    margin: "0 auto",
    padding: "75px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "0 auto",
  },
  button: {
    display: "block",
    width: "100px", 
    padding: "0 auto",
    marginBottom: "5px",
    borderRadius: "0 auto",
    border: "none",
    backgroundColor: "#5b5853",
    color: "white",
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },  
};

export default UpdateUserForm;
