import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';

function Registration() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);
  const [showTextBox2, setShowTextBox2] = useState(false);
  const [selectOption2, setSelectedOption2] = useState('');
  const [numberOfFloors, setNumberOfFloors] = useState(0);
  const [textBoxValue, setTextBoxValue] = useState('');
  const [floorValues, setFloorValues] = useState([]);
  const [parkingName, setParkingName] = useState('');
  const [hrsPay, setHoursPay] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [free, setFree] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  

  const handleNumberOfFloorsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfFloors(value);
    setFloorValues(Array.from({ length: value }, () => ''));
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    if (option === 'Open Parking') {
      setShowTextBox(false);
      setShowTextBox2(true);
    } else {
      setShowTextBox2(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'By floor') {
      setShowTextBox(true);
      setShowTextBox2(false);
    } else {
      setShowTextBox(false);
    }
  };

  const handleFloorValueChange = (index, value) => {
    const updatedFloorValues = [...floorValues];
    updatedFloorValues[index] = value;
    setFloorValues(updatedFloorValues);
  };

  const submit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/registration", {
        email,
        password,
        parkingName,
        hrsPay,
        contact,
        address,
        free,
        numberOfFloors,
        floorValues,
        selectOption2,
        selectedOption
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        navigate("/home", { state: { id: email } });
        alert("User registered successfully");
      }
    } catch (e) {
      alert("Wrong details. Please try again.");
      console.log(e);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <MDBRow>
              <MDBCol md='6'>
                <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <MDBInput wrapperClass='mb-4' placeholder='Parking Management Name'
                  id="form1"
                  type="text"
                  value={parkingName}
                  onChange={(e) => setParkingName(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' placeholder='Password'
                  id="form1"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' placeholder='Parking Hours Fee'
                  id="form1"
                  type="text"
                  value={hrsPay}
                  onChange={(e) => setHoursPay(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' placeholder='Contact Number'
                  id="form1"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' placeholder='Email'
                  id="form1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' placeholder='Address'
                  id="form1"
                  type="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' placeholder='Hours Free'
                  id="form1"
                  type="address"
                  value={free}
                  onChange={(e) => setFree(e.target.value)}
                />
              </MDBCol>
              <MDBCol md='6'>
                <MDBRow className='justify-content-center'>
                  <MDBCol md='10' className='mt-4'>
                    <MDBDropdown className="mb-4">
                      <MDBDropdownToggle    size="sm"
                            color="info">
                        Parking Type
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="static-menu">
                        <MDBDropdownItem
                          onClick={() => {
                            handleOptionSelect2('Open Parking');
                          }}
                        >
                          Open Parking
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={() => {
                            handleOptionSelect('By floor');
                          }}
                        >
                          By floor
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBCol>
                  <MDBCol md='10' className='mt-4'>
                    {showTextBox2 && (
                      <MDBInput
                        label="Number of Parking Spaces"
                        id="textBox"
                        type="text"
                        value={textBoxValue}
                        onChange={(e) => setTextBoxValue(e.target.value)}
                      />
                    )}
                    {showTextBox && (
                      <div>
                        <MDBInput
                          label="Number of Floors"
                          id="numberOfFloors"
                          type="number"
                          value={numberOfFloors}
                          onChange={handleNumberOfFloorsChange}
                        />
                        {numberOfFloors > 0 && (
                          <div>
                            {floorValues.map((value, index) => (
                              <MDBInput
                                key={index}
                                label={`Number of Spaces on Floor ${index + 1}`}
                                id={`floor${index + 1}`}
                                type="number"
                                value={value}
                                onChange={(e) =>
                                  handleFloorValueChange(index, e.target.value)
                                }
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow className='justify-content-center mt-5'>
              <MDBCol md='4'>
                <MDBBtn
                  color='success'
                  size='md'
                  onClick={submit}
                >
                  Submit
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Registration;