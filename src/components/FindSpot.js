import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const backgroundStyle = {
  backgroundImage: 'url("https://i.nextmedia.com.au/News/crn-14_carpark_iStock-177136206.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  backgroundColor: "yellow",
};

function FindSpot() {
  const handleButtonClick = () => {
    // Handle logout functionality
  };

  const handleDelete = () => {
    // Handle delete functionality
  };

  const handleUpdate = () => {
    // Handle update functionality
  };

  return (
    <div className="homepage">
      <div style={backgroundStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              SpotWise Parking Management System
            </Link>
            <button className="btn btn-primary my-2 mx-2" onClick={handleButtonClick}>
              Logout
            </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default FindSpot;
