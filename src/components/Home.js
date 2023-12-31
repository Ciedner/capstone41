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
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {
          const response = await axios.get(
            `http://localhost:8000/user/${loggedInUser}`
          );

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

  const backgroundStyle = {
    backgroundColor: "#3b89ac", 
    backgroundPosition: "center",
    height: "100vh",
  };

  const navbarStyle = {
    backgroundColor: "#003851", 
  };

  const dashboardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 56px)",
  };

  const cardStyle = {
    width: "300px",
    backgroundColor: "#bfd2d9", 
  };

  const styles = {
    welcomeMessage: {
      position: "absolute",
      top: "10px",
      right: "10px",
      margin: "0",
      color: "#fff",
      fontFamily: "Rockwell, sans-serif",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    icon: {
      marginRight: "5px",
    },
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="homepage">
      <div style={backgroundStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              SpotWise Parking Management System
              <p style={styles.welcomeMessage}>
                <FaUserCircle style={styles.icon} /> {userData?.email || ""}
              </p>
            </Link>
          </div>
        </nav>
        <div style={dashboardStyle}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                  onClick={() => handleCardClick("/recommend")}
                >
                  <MDBCardImage
                    src="https://cdn-icons-png.flaticon.com/512/8/8206.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 style={{ fontSize: "15px" }}>Recommendation</h5>
                    <p style={{ fontSize: "20px", fontFamily: "Georgia", fontWeight: "bold", color:'' }}>
                      Parking alternative
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                  onClick={() => handleCardClick("/find")}
                >
                  <MDBCardImage
                    src="https://cdn.onlinewebfonts.com/svg/img_567369.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 style={{ fontSize: "15px" }}>Routes</h5>
                    <p style={{ fontSize: "20px", fontFamily: "Georgia", fontWeight: "bold" }}>
                      Direction Provider
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                  onClick={() => handleCardClick("/manage")}
                >
                  <MDBCardImage
                    src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_smart_guy-512.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 style={{ fontSize: "15px" }}>Profile</h5>
                    <p style={{ fontSize: "20px", fontFamily: "Georgia", fontWeight: "bold" }}>
                      My Profile
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBRow>
                  <MDBCol>
                    <MDBCard
                      style={cardStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-10px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                      onClick={() => handleCardClick("/transact")}
                    >
                      <MDBCardImage
                        src="https://cdn-icons-png.flaticon.com/512/4222/4222025.png"
                        alt="Card image"
                        top
                      />
                      <MDBCardBody>
                        <h5 style={{ fontSize: "15px" }}>Payment</h5>
                        <p style={{ fontSize: "20px", fontFamily: "Georgia", fontWeight: "bold" }}>
                          Choose Payment
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}

export default Home;
