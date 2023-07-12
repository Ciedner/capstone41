import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";

const CardLayout = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const getCardStyle = (cardIndex) => {
    if (hoveredCard === cardIndex) {
      return {
        marginTop: '20px',
        marginRight: '20px',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-5px)',
      };
    }
    return {
      marginTop: '20px',
      marginRight: '20px',
    };
  };

  return (
    <Container fluid style={{ backgroundColor: "#5885AF", minHeight: "100vh" }}>
      <h1 style={{ marginTop: '75px', fontFamily: 'Courier New' }}>Overview</h1>
      <Row>
        <Col md={9}>
          <Container>
            <Row>
              <Col md={4}>
                <Card
                  style={getCardStyle(1)}
                  onMouseEnter={() => handleCardHover(1)}
                  onMouseLeave={handleCardLeave}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "15px" }}>
                      Monthly Revenue
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: 'Copperplate',
                        marginTop: '15px'
                      }}
                    >
                      Php: 10,512.00
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  style={getCardStyle(2)}
                  onMouseEnter={() => handleCardHover(2)}
                  onMouseLeave={handleCardLeave}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "15px" }}>
                      Monthly Revenue
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: 'Copperplate',
                        marginTop: '15px'
                      }}
                    >
                      Php: 10,512.00
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  style={getCardStyle(3)}
                  onMouseEnter={() => handleCardHover(3)}
                  onMouseLeave={handleCardLeave}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "15px" }}>
                      Average Users
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: 'Copperplate',
                        marginTop: '15px'
                      }}
                    >
                      258
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Card
                  style={getCardStyle(4)}
                  onMouseEnter={() => handleCardHover(4)}
                  onMouseLeave={handleCardLeave}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "15px" }}>
                      Additional Card
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: 'Copperplate',
                        marginTop: '15px'
                      }}
                    >
                      This is an additional card on the right side.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={8}>
                <Container style={{ marginTop: '30px' }}>
                  <Card>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "15px" }}>
                        Container Title
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "20px",
                          fontWeight: 'bold',
                          fontFamily: 'Copperplate',
                          marginTop: '15px'
                        }}
                      >
                        Content of the container goes here.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CardLayout;
