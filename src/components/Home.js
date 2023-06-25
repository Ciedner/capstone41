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

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleDelete = () => {
    navigate("/delete");
  };

  const handleUpdate = () => {
    navigate("/change");
  };

  const handleFind = () => {
    navigate("/find");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleTransaction = () => {
    navigate("/transact");
  };

  const handleRecommend = () => {
    navigate("/recommend");
  };

  const backgroundStyle = {
    backgroundImage:
      'url("https://i.nextmedia.com.au/News/crn-14_carpark_iStock-177136206.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "yellow",
  };

  const dashboardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 56px)",
  };

  const cardStyle = {
    width: "300px",
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

  return (
    <div className="homepage">
      <div style={backgroundStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                    <MDBCard style={cardStyle}>
                      <MDBCardImage
                        src="https://cdn-icons-png.flaticon.com/512/8/8206.png"
                        alt="Card image"
                        top
                      />
                      <MDBCardBody>
                        <h5 className="card-title">Recommendation</h5>
                        <p className="card-text">Parking alternative</p>
                        <MDBBtn color="primary" onClick={handleRecommend}>
                          Go
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
              <MDBCol>
                <MDBCard style={cardStyle}>
                  <MDBCardImage
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHA0shn2z9SzmuROBAE2TsrGGEkgq2FciYhA&usqp=CAU"
                    alt="Card image"
                    top
                  />
                <MDBCardBody>
                   <h5 className="card-title">Routes</h5>
                   <p className="card-text">Direction Provider</p>
                    <MDBBtn color="primary" onClick={handleFind}>
                      Go
                   </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
             </MDBCol>
              <MDBCol>
                <MDBCard style={cardStyle}>
                  <MDBCardImage
                    src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_smart_guy-512.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">Modify profile</p>
                    <MDBBtn color="primary" onClick={handleProfile}>
                      Go
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBRow>
                  <MDBCol>
                    <MDBCard style={cardStyle}>
                      <MDBCardImage
                        src="https://cdn-icons-png.flaticon.com/512/4222/4222025.png"
                        alt="Card image"
                        top
                      />
                      <MDBCardBody>
                        <h5 className="card-title">Payment</h5>
                        <p className="card-text">Choose Payment</p>
                        <MDBBtn color="primary" onClick={handleTransaction}>
                          Go
                        </MDBBtn>
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
