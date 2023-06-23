import { useLocation, useNavigate, Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function UpdateUserForm() {
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
  const [userData, setUserData] = useState(null);

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
        <section className="vh-100" style={styles.section}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4 gradient-custom text-center text-white"
                      style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                      <h5>{userData?.name}</h5>
                      <p>{userData?.designation}</p>
                      <i className="far fa-edit mb-5"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{location.state?.email || ""}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Phone</h6>
                            <p className="text-muted">{userData?.phone}</p>
                          </div>
                        </div>
                        <h6>Projects</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Recent</h6>
                            <p className="text-muted">{userData?.recentProject}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Most Viewed</h6>
                            <p className="text-muted">{userData?.mostViewedProject}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                          <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                          <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <form>
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
        </form>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundImage: "url('https://i.pinimg.com/564x/7a/2f/0a/7a2f0a165bb0c1be11d2ad458f0edd51.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  section: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f4f5f7",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#5b5853",
    color: "white",
    cursor: "pointer",
  },
};

export default UpdateUserForm;
