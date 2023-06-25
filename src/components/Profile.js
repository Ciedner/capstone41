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
  const [profileImage, setProfileImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

  
  const handleSave = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);
  
      axios
        .post('http://localhost:8000/upload-avatar', formData)
        .then((response) => {
          // Handle the response from the server, which should contain the URL or file path for the uploaded file
          const avatarUrl = response.data.avatarUrl;
  
          // Update the user's profile with the new avatar URL
          const updatedUserData = { ...userData, avatar: avatarUrl };
  
          // Store the updated user data in local storage
          localStorage.setItem('user', JSON.stringify(updatedUserData));
  
          // Perform the update logic (e.g., using axios)
          axios
            .put(`http://localhost:8000/user/${userData.id}`, updatedUserData)
            .then(() => {
              // Once the update is successful, update the profile image state
              setProfileImage(avatarUrl);
              setShowPopup(false); // Close the popup after saving
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('No avatar selected');
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate("/");
  };
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = localStorage.getItem('user');
        
        if (loggedInUser) {
          const user = JSON.parse(loggedInUser);
          const response = await axios.get(`http://localhost:8000/user/${user.id}`);
          
          if (response.data) {
            setUserData(response.data);
            setProfileImage(response.data.avatar); // Fetch avatar from user data
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
  src={profileImage ? profileImage : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"}
  className="rounded-circle"
  fluid
  style={{ width: '150px' }}
/>
                    </div>
                    <>
                      <MDBCardText className="text-muted mb-4">Email: {userData?.email || ""}</MDBCardText>
                      <MDBCardText className="text-muted mb-4">Vehicle: {userData?.vehicle || ""}</MDBCardText>
                      <MDBCardText className="text-muted mb-4">Vehicle plate: {userData?.plate || ""}</MDBCardText>
                    </>
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
        <form>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
              setProfileImage(URL.createObjectURL(e.target.files[0])); // Update profileImage with the selected file URL
            }}
          />
        </form>
        <div style={styles.buttonContainer}>
          <MDBBtn rounded size="lg" onClick={handleSave}>
            Save
          </MDBBtn>
        </div>
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