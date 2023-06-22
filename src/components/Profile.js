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

function UpdateUserForm() {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Profile Settings</h1>
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
    maxWidth: "600px", // Adjust the width here
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
