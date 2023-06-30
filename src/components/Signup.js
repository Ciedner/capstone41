import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Login() {
    const backgroundStyle = {
        backgroundColor: "#5885AF",
        backgroundPosition: "center",
      };
      const styles = {
        back: {
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
      
    const history = useNavigate();
    const navigate = useNavigate();

    function handleHome(event) {
        navigate("/");
      }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [plate, setPlate] = useState('');
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBday] = useState('');
    const [contact, setContact] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                email,
                password,
                vehicle,
                plate,
                fName,
                lName,
                address,
                birthday,
                contact,
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                    history("/home", { state: { id: email } });
                    alert("User registered successfully");
                }
            })
            .catch(e => {
                alert("Wrong details. Please try again.");
                console.log(e);
            });
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div style={backgroundStyle}>
            <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#274472" }}
        >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        SpotWise Parking Management System
                        <p style={styles.back} onClick ={handleHome}>
                            Log in
                        </p>
                    </Link>
                </div>
            </nav>
            <MDBContainer fluid>
                <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">General Information</p>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="First Name"
                                        id="form1"
                                        type="text"
                                        value={fName}
                                        onChange={(e) => setFname(e.target.value)}
                                        />
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Last Name"
                                        id="form2"
                                        type="text"
                                        value={lName}
                                        onChange={(e) => setLname(e.target.value)}
                                        />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Password"
                                        id="form3"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Address"
                                        id="form5"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        />
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Contact"
                                        id="form5"
                                        type="text"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        />
                                </div>

                                <div className="d-flex flex-row align-items-center">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Birthday"
                                        id="form5"
                                        type="date"
                                        value={birthday}
                                        onChange={(e) => setBday(e.target.value)}
                                    />
                                </div>
                                
                                <br></br>
                                <div className="mb-4">
                                    <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Accept terms and conditions" />
                                </div>
                                <MDBBtn className="mb-4" size="lg" onClick={submit}>
                                    Register
                                </MDBBtn>
                            </MDBCol>
                            
                            <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
                            <div className="d-flex flex-column align-items-center mb-4"> <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Other Information</p>
                            <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Your Email"
                                        id="form6"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Vehicle"
                                        id="form7"
                                        type="text"
                                        value={vehicle}
                                        onChange={(e) => setVehicle(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon size="lg" />
                                    <MDBInput
                                        label="Plate Number"
                                        id="form6"
                                        type="text"
                                        value={plate}
                                        onChange={(e) => setPlate(e.target.value)}
                                    />
                                </div>
                            </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
        </div>
    );
}

export default Login;
