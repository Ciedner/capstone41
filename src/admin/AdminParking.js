import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ViewParking() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [foundUser, setFoundUser] = useState(null);
  const [idCounter, setIdCounter] = useState(1);
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/user/${searchInput}`);
      if (response.ok) {
        const user = await response.json();
        setFoundUser(user);
      } else {
        setFoundUser(null);
      }
    } catch (error) {
      console.error(error);
      setFoundUser(null);
    }
  };

  const handleInVehicleClick = () => {
    if (foundUser) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newRow = {
        id: idCounter,
        name: `${foundUser.fName} ${foundUser.lName}`,
        vehicle: foundUser.vehicle,
        plateNo: foundUser.plate,
        timeIn: currentTime,
        timeOut: '---',
        paymentStatus: 'Pending',
        paymentStatusColor: 'red',
      };
      setData((prevData) => [...prevData, newRow]);
      setIdCounter((prevCounter) => prevCounter + 1);
      navigate("/adminParking", { state: { user: foundUser } });
    }
  };
  
  const handleOutVehicleClick = () => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newRow = {
      timeOut: currentTime,
      paymentStatus: 'Paid',
      paymentStatusColor: 'green',
    };
    if (foundUser) {
      setData((prevData) => {
        const updatedData = prevData.map((row) => {
          if (row.name === `${foundUser.fName} ${foundUser.lName}`) {
            return {
              ...row,
              ...newRow,
            };
          }
          return row;
        });
        return updatedData;
      });
      setFoundUser(null);
    }
  };
  
  
  
  
  

  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#274472" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            SpotWise Parking Management System
          </Link>
        </div>
      </nav>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px', marginTop: '20px'  }}>
          <Form onSubmit={handleSearchSubmit}>
            <Form.Control type="text" placeholder="Search .." value={searchInput} onChange={handleSearchInputChange} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button className="button" style={{ marginRight: '20px', backgroundColor: '#86FF33'}} type="submit">
                Search
              </button>
              <button
                className="button"
                style={{ marginRight: '20px', backgroundColor: '#FF6433' }}
                onClick={() => setSearchInput('')}
              >
                Clear
              </button>
            </div>
          </Form>
          {foundUser && (
            <div>
              <h4>User Information:</h4>
              <p>First Name: {foundUser.fName}</p>
              <p>Last Name: {foundUser.lName}</p>
              <p>Vehicle: {foundUser.vehicle}</p>
              <p>Plate No: {foundUser.plate}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                  className="button"
                  style={{ marginRight: '20px', backgroundColor: '#86FF33' }}
                  onClick={handleInVehicleClick}
                >
                  In Vehicle
                </button>
                <button
                  className="button"
                  style={{ marginRight: '20px', backgroundColor: '#FF6433' }}
                  onClick={handleOutVehicleClick}
                >
                  Vehicle Out
                </button>
              </div>
            </div>
          )}
        </div>
        <div style={{ marginTop: '20px'}}>
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Plate No</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.vehicle}</td>
                <td>{row.plateNo}</td>
                <td>{row.timeIn}</td>
                <td>{row.timeOut}</td>
                <td style={{ color: row.paymentStatusColor }}>{row.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      </div>
    </Container>
  );
}

export default ViewParking;
