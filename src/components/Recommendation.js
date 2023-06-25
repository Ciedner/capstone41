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
    backgroundImage: "url('https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')",
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

  const containerStyle = {
    position: "relative",
    display: "inline-block",
    padding: "40px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleLeftStyle = {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "left",
  };

  const titleCenterStyle = {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
  };

  const textareaStyle = {
    width: "100%",
    height: "120px",
    padding: "10px",
    resize: "none",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SpotWise Parking Management System
          </Link>
        </div>
      </nav>

      <div style={parentContainerStyle}>
        <div style={searchContainerStyle}>
          <input type="text" placeholder="Search..." style={searchInputStyle} />
          <button type="button">Search</button>
        </div>

        <div style={containerStyle}>
          <div className="container">
            <form style={formStyle}>
              <h2 style={titleLeftStyle}>Alternative Parking 1</h2>
              <textarea
                name="postContent"
                defaultValue="Location: Banilad - Cebu
Fee: 20 Every consecutive hours
Free Hours: 1 hr"
                style={textareaStyle}
                readOnly
              />
              <button style={buttonStyle}>Reserve Now</button>
            </form>
          </div>
        </div>

        <div style={containerStyle}>
          <div className="container">
            <form style={formStyle}>
              <h2 style={titleCenterStyle}>Alternative Parking 2</h2>
              <textarea
                name="postContent"
                defaultValue="Location: Ayala - Cebu
Fee: 30 Every consecutive hours
Free Hours: 2 hrs"
                style={textareaStyle}
                readOnly
              />
              <button style={buttonStyle}>Reserve Now</button>
            </form>
          </div>
        </div>
        <a href="#" className="text-muted" onClick={() => navigate("/home")}>
          Go back
        </a>
      </div>
    </div>
  );
};

export default FormWithImage;
