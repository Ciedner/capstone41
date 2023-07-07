import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function ResponsiveExample() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/user/${searchInput}`);
      if (response.ok) {
        const user = await response.json();
        setData([user]);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error(error);
      setData([]);
    }
  };

  useEffect(() => {
    // Reset data when the search input is cleared
    if (searchInput === '') {
      setData([]);
    }
  }, [searchInput]);

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
        <div style={{ marginRight: '20px' }}>
          <Form onSubmit={handleSearchSubmit}>
            <Form.Control type="text" placeholder="Search .." value={searchInput} onChange={handleSearchInputChange} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button className="button" style={{ marginRight: '20px', backgroundColor: '#86FF33' }} type="submit">
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
        </div>
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
                <td>{row.fName}</td>
                <td>{row.vehicle}</td>
                <td>{row.plate}</td>
                <td>{row.timeIn}</td>
                <td>{row.timeOut}</td>
                <td>{row.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default ResponsiveExample;
