import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const FormWithImage = () => {
  const navigate = useNavigate();

  const parentContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#3b89ac",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const searchContainerStyle = {
    marginBottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const searchInputStyle = {
    padding: "8px",
    marginRight: "10px",
    width: "300px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const parkingContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    width: "400px",
  };

  const titleLeftStyle = {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "left",
    fontFamily:"Courier New",
    fontSize: "20px"
  };

  const textareaStyle = {
    width: "100%",
    height: "150px",
    padding: "10px",
    resize: "none",
    marginBottom: "20px",
    backgroundColor:"#bfd2d9",
    fontFamily: "Garamond",
    fontSize:"20px"
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "Courier New",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003851" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            SpotWise Parking Management System
          </Link>
        </div>
      </nav>

      <div style={parentContainerStyle}>
        <div style={searchContainerStyle}>
          <input type="text" placeholder="Search..." style={searchInputStyle} />
          <button type="button" style={{fontFamily:"Courier New"}}>Search</button>
        </div>

        <div style={parkingContainerStyle}>
          <div className="container">
            <form style={formStyle}>
              <h2 style={titleLeftStyle}>Alternative Parking 1</h2>
              <textarea
                name="postContent"
                defaultValue="Location: Banilad - Cebu
                  Fee: 20 Every consecutive hours
                  Free Hours: 1 hr
                  Parking Space Available: 105 spaces"
                style={textareaStyle}
                readOnly
              />
              <button style={buttonStyle}>Reserve Now</button>
            </form>
          </div>

          <div className="container">
            <form style={formStyle}>
              <h2 style={titleLeftStyle}>Alternative Parking 2</h2>
              <textarea
                name="postContent"
                defaultValue="Location: Ayala - Cebu
                  Fee: 30 Every consecutive hours
                  Free Hours: 2 hrs
                  Parking Space Available: 15 spaces"
                style={textareaStyle}
                readOnly
              />
              <button style={buttonStyle}>Reserve Now</button>
            </form>
          </div>
        </div>

        <a href="#" className="text-muted" onClick={() => navigate("/home")} style={{ marginTop: "20px", fontFamily:"Courier New"}}>
          Go back
        </a>
      </div>
    </div>
  );
};

export default FormWithImage;
