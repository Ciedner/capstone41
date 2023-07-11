import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCoins, faUser, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

function ViewReport() {
  const [data, setData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
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


  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#274472" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            SpotWise Parking Management System
          </Link>
        </div>
      </nav>
      <div className="container text-center" style={{ marginTop: '30px' }}>
        <p>Welcome your Parking Management System</p>
      </div>
      <div className="row mt-4">
        <div className="col-md-3 text">
          <Card> 
            <Card.Body>
              <Card.Title> <FontAwesomeIcon icon={faCar} color="green" /> Parking Availability</Card.Title>
              <Card.Text>Card 1 description</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faCoins} color="red"/> Total Revenues</Card.Title>
              <Card.Text>Card 2 description</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faUser} color="blue" /> Total Users</Card.Title>
              <Card.Text>{totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faFileInvoiceDollar} color="orange"/> Parking Payment</Card.Title>
              <Card.Text>Card 3 description</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default ViewReport;
