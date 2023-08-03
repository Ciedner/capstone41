import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    function handleAdmin(event) {
        navigate("/adminRegister");
      }
    function handleForgot(event) {
        navigate("/forgot");
      }
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            navigate("/home", { state: { id: loggedInUser } });
        }
    }, []);

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/", {
                email,
                password
            });

            if (response.data === "exist") {
                localStorage.setItem('user', email);
                navigate("/home", { state: { id: email } });
            } else if (response.data === "notexist") {
                alert("Wrong password");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: "#3b89ac",
    };

    const backgroundPage ={
        width: "700px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#bfd2d9", 
    };

    const textStyle = {
        fontWeight: 'bold',
        color: 'black'
    };

    return (
        <div style={backgroundStyle}>
            <div style={backgroundPage}>
                <nav  className="navbar navbar-expand-lg navbar-dark"
                        style={{ backgroundColor: "#003851" }}>
                    <div className="container">
                        <Link className="navbar-brand" to="/" align="center">
                            SpotWise Parking Management System
                        </Link>
                    </div>
                </nav>

                <MDBContainer className="p-3 my-5 d-flex flex-column w-50 back" color="#bfd2d9">
                    <form>
                    <MDBInput
                        style={{
                            fontFamily: "Courier New",
                            backgroundImage: `url("/email.jpg")`,
                            backgroundPosition: "left 5px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "20px 20px", 
                            paddingLeft: "30px",
                        }}
                        wrapperClass="mb-4"
                        id="form1"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                        <MDBInput
                           style={{
                            fontFamily: "Courier New",
                            backgroundImage: `url("/pass.png")`,
                            backgroundPosition: "left 5px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "20px 20px", 
                            paddingLeft: "30px",
                        }}
                        wrapperClass="mb-4"
                        id="form2"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        />

                        <div className="d-flex justify-content-between mx-3 mb-4" style={{marginTop:"50px",fontFamily:"Courier New", fontSize:"16px"}}>
                            <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheckDefault"
                                label="Remember me"
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <MDBBtn className="mb-4" size="sm" color="danger" style={{fontFamily:"Courier New", fontSize:"12px"}} onClick={handleForgot}>
                            Forgot Password
                        </MDBBtn>
                        </div>  
                        <MDBBtn className="mb-4" size="sm" color="success" style={{fontFamily:"Courier New", fontSize:"15px"}} onClick={submit}>
                            Sign in
                        </MDBBtn>
                        <div className="text-center">
                            <p style={{fontFamily: "Courier New", fontSize:"15px"}}>
                                    <Link to="signup">Sign up as a member</Link>
                            </p>
                            <div>
                        <p style={{fontFamily: "Courier New", fontSize:"15px"}}>
                        <Link to="adminRegister">Sign up as an Admin</Link>
                        </p>
                        </div>

                            <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="facebook-f" size="sm" />
                                </MDBBtn>

                                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="twitter" size="sm" />
                                </MDBBtn>

                                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="google" size="sm" />
                                </MDBBtn>

                                <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="github" size="sm" />
                                </MDBBtn>
                            </div>
                        </div>
                    </form>
                </MDBContainer>
            </div>
        </div>
    );
}

export default Login;