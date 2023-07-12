import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faEnvelope, faListOl, faMoneyBill, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";

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

  const handleGoBack = () => {
    navigate("/");
  };

  const handleButtonClick = () => {
    navigate("/home");
  };

  const handleDelete = () => {
    navigate("/delete");
  };

  const handleUpdate = () => {
    navigate("/change");
  };

  const handleManage = () => {
    navigate("/manage");
  };

  const handleSave = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      axios
        .post("http://localhost:8000/upload-avatar", formData)
        .then((response) => {
          const avatarUrl = response.data.avatarUrl;
          const updatedUserData = { ...userData, avatar: avatarUrl };

          localStorage.setItem("user", JSON.stringify(updatedUserData));

          axios
            .put(`http://localhost:8000/user/${userData.id}`, updatedUserData)
            .then(() => {
              setProfileImage(avatarUrl);
              setShowPopup(false);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No avatar selected");
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {
          const user = JSON.parse(loggedInUser);
          const response = await axios.get(`http://localhost:8000/user/${user.id}`);

          if (response.data) {
            setUserData(response.data);
            setProfileImage(response.data.avatar);
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
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      navigate("/");
    }
  }, []);

  return (
    <MDBContainer fluid style={{ backgroundColor: "#F7F6F5", minHeight: "100vh" }}>
      <div style={styles.pageContainer}>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#4D4D4D" }}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <FaArrowLeft style={styles.arrowIcon} onClick={handleGoBack} />
            </Link>
          </div>
        </nav>
        <div className="text-center">
          <div className="vh-100" style={{ backgroundColor: "#F7F6F5", height: "80vh" }}>
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="8" xl="6">
                <MDBCard style={{ borderRadius: "15px", maxWidth: "400px", margin: "auto" }}>
                  <p>My Profile</p>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <label htmlFor="avatar">
                        <img
                          src={
                            profileImage
                              ? profileImage
                              : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                          }
                          alt="Avatar"
                          className="rounded-circle"
                          style={{ width: "100px", cursor: "pointer" }}
                          onClick={() => document.getElementById("avatar").click()}
                        />
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id="avatar"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          setSelectedFile(e.target.files[0]);
                          setProfileImage(URL.createObjectURL(e.target.files[0]));
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                      <button
                        className="btn btn-outline-primary rounded-pill me-3"
                        style={{ backgroundColor: "#F0C8C9" }}
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        {userData?.email || ""}
                      </button>
                      <button
                        className="btn btn-outline-primary rounded-pill me-3"
                        style={{ backgroundColor: "#FFDBA5" }}
                      >
                        <FontAwesomeIcon icon={faCar} className="me-2" />
                        {userData?.vehicle || ""}
                      </button>
                      <button
                        className="btn btn-outline-primary rounded-pill"
                        style={{ backgroundColor: "#C3E0F1" }}
                      >
                        <FontAwesomeIcon icon={faListOl} className="me-2" />
                        {userData?.plate || ""}
                      </button>
                    </div>
                    <div>
                      <p>Dashboard</p>
                      <button
                        className="btn btn-outline-primary rounded-pill"
                        style={{ backgroundColor: "#FFF6CC" }}
                        onClick={() => navigate("/transact")}
                      >
                        <FontAwesomeIcon icon={faMoneyBill} /> Payment
                      </button>
                      <button
                        className="btn btn-outline-primary rounded-pill"
                        style={{ backgroundColor: "#FFF6CC", marginLeft: "20px" }}
                        onClick={handleManage}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile
                      </button>
                      {showPopup && (
                        <div className="popup">
                          <div className="popup-inner">
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
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <p onClick={handleLogOut} style={{ fontFamily: "Arial", color: "#FF0000" }}>
                        Log Out
                      </p>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        <div style={styles.buttonContainer}></div>
      </div>
    </MDBContainer>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: "#3C3131",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
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
    marginBottom: "10px",
  },
};

export default UpdateUserForm;
