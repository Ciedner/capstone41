import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCoins, faUser, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

function ViewReport() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [foundUser, setFoundUser] = useState(null);
  const [idCounter, setIdCounter] = useState(1);
  const [userOccupy, setOccupants] = useState(250);
  const [totalUsers, setTotalUsers] = useState(0);
    const [fixedPrice, setFixedPrice] = useState(30);
    const [totalRevenues, setTotalRevenues] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/parking');
        if (response.ok) {
          const parkingData = await response.json();
          setData(parkingData);
          setTotalUsers(location.state.totalUsers || 0);
        } else {
          console.error('Failed to fetch parking data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
      setOccupants((prevTotal) => prevTotal - 1); 
      setTotalUsers((prevTotal) => prevTotal + 1);
      navigate("/report", { state: { user: foundUser } })
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
      setOccupants((prevTotal) => prevTotal + 1);
      setTotalRevenues((prevTotal) => prevTotal + fixedPrice);
    }
  };



  return (
    <div style={{ backgroundColor: '#B0E0E6', minHeight: "100vh"}}>
    <Container>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#274472" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            SpotWise Parking Management System
          </Link>
        </div>
      </nav>
      <div className="container text-center" style={{ marginTop: '30px', fontFamily: 'Courier New', fontSize: '30px'}}>
        <p>Welcome to your Parking Management System</p>
      </div>
      <div className="row mt-4 ">
        <div className="col-md-3">
          <Card> 
            <Card.Body>
              <Card.Title style={{fontFamily:'Courier New', textAlign:'center'}}> <FontAwesomeIcon icon={faCar} color="green"/> Parking Availability</Card.Title>
              <Card.Text style={{ textAlign: 'center', margin: '0 auto', fontFamily:'Copperplate', fontSize:'20px' }}>{userOccupy}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title style={{fontFamily:'Courier New', textAlign:'center'}}><FontAwesomeIcon icon={faCoins} color="red"/> Total Revenues</Card.Title>
              <Card.Text style={{ textAlign: 'center', margin: '0 auto', fontFamily:'Copperplate', fontSize:'20px' }}>{totalRevenues}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title style={{fontFamily:'Courier New', textAlign:'center'}}><FontAwesomeIcon icon={faUser} color="blue" /> Total Users today</Card.Title>
              <Card.Text style={{ textAlign: 'center', margin: '0 auto', fontFamily:'Copperplate', fontSize:'20px' }}>{totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title style={{fontFamily:'Courier New', textAlign:'center'}}><FontAwesomeIcon icon={faFileInvoiceDollar} color="orange"/> Parking Payment</Card.Title>
              <Card.Text style={{ textAlign: 'center', margin: '0 auto', fontFamily:'Copperplate', fontSize:'20px' }}>{fixedPrice}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px', marginTop: '20px'  }}>
          <Form onSubmit={handleSearchSubmit}>
            <Form.Control type="text" placeholder="Search .." value={searchInput} onChange={handleSearchInputChange} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button className="button" style={{ marginRight: '20px', backgroundColor: '#86FF33', fontFamily:'Garamond'}} type="submit">
                Search
              </button>
              <button
                className="button"
                style={{ marginRight: '20px', backgroundColor: '#FF6433', fontFamily:'Garamond'}}
                onClick={() => setSearchInput('')}
              >
                Clear
              </button>
            </div>
          </Form>
          {foundUser && (
            <div>
              <h4 style={{fontFamily:'Courier New'}}>User Information:</h4>
              <p style={{fontFamily:'Copperplate'}}>First Name: {foundUser.fName}</p>
              <p style={{fontFamily:'Copperplate'}}>Last Name: {foundUser.lName}</p>
              <p style={{fontFamily:'Copperplate'}}>Vehicle: {foundUser.vehicle}</p>
              <p style={{fontFamily:'Copperplate'}}>Plate No: {foundUser.plate}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                  className="button"
                  style={{ marginRight: '20px', backgroundColor: '#86FF33', fontFamily:'Garamond' }}
                  onClick={handleInVehicleClick}
                >
                  In Vehicle
                </button>
                <button
                  className="button"
                  style={{ marginRight: '20px', backgroundColor: '#FF6433', fontFamily:'Garamond' }}
                  onClick={handleOutVehicleClick}
                >
                  Vehicle Out
                </button>
              </div>
            </div>
          )}
        </div>
        <div style={{marginLeft:'100px', marginTop: '20px', textAlign: 'center', justifyContent: 'center' }}>
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
    </div>
  );
}

export default ViewReport;
