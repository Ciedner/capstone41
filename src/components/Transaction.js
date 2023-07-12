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
import { FaUserCircle, FaArrowLeft } from "react-icons/fa";

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


  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const backgroundStyle = {
    backgroundColor: "#3b89ac",
    backgroundPosition: "center",
    height: "100vh",
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
    arrowIcon: {
      marginLeft: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div className="homepage">
      <div style={backgroundStyle}>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#003851" }}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <FaArrowLeft
                style={styles.arrowIcon}
                onClick={handleGoBack}
              />
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
                  onClick={() => handleCardClick("/gcash")}
                >
                  <MDBCardImage
                    src="https://1000logos.net/wp-content/uploads/2023/05/GCash-Logo.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 className="card-title">Gcash</h5>
                    <p className="card-text">Pay through Gcash App</p>
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
                  onClick={() => handleCardClick("/paypal")}
                >
                  <MDBCardImage
                    src="https://parspng.com/wp-content/uploads/2022/10/Paypalpng.parspng.com-2.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 className="card-title">PayPal</h5>
                    <p className="card-text">Pay through Paypal App</p>
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
                  onClick={() => handleCardClick("/cash")}
                >
                  <MDBCardImage
                    src="https://cdn-icons-png.flaticon.com/512/4305/4305512.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 className="card-title">Cash</h5>
                    <p className="card-text">Pay through Cash</p>
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

export default Home;
