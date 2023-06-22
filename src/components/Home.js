import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Profile from "./Profile";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleDelete = () => {
    navigate("/delete");
  };

  const handleUpdate = () => {
    navigate("/change");
  };
  
  const handleFind = () => {
    navigate ("/find");
  };

  const handleProfile = () => {
    navigate ("/profile");
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://i.nextmedia.com.au/News/crn-14_carpark_iStock-177136206.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "yellow",
  };

  const dashboardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 56px)", // Adjust height to account for navbar height
  };

  const cardStyle = {
    width: "300px",
  };

  return (
    <div className="homepage">
      <div style={backgroundStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              SpotWise Parking Management System
            </Link>
          
          </div>
        </nav>
        <div style={dashboardStyle}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard style={cardStyle}>
                  <MDBCardImage
                    src="https://www.citypng.com/public/uploads/preview/download-google-map-locator-location-icon-png-11639597978ecvi7huvpt.png"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 className="card-title">Find</h5>
                    <p className="card-text">Find parking space nearby</p>
                    <MDBBtn color="primary" onClick={handleFind}>
                      Go
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard style={cardStyle}>
                  <MDBCardImage
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8jHyAAAAAgHB0GAAAcGBkaFRYYExQfGhsTDQ8XERP6+voLAAQFAAAQCQscFxjp6emsq6uTkpL09PRBPj/S0tKhoKA7ODnZ2dnr6+taV1hnZWYqJideXF0vKyzh4eG5uLhzcnKDgoLDwsKysbKamZlMSkszMDE9Ojt1dHRFQkONjIzLyspqaWl0cnNKSEgwbFPtAAAH6ElEQVR4nO2daZOiMBCGhyTciAqCByIO3uf8/3+3MOqMB6OCadJu5anaT7uzlbcS+kh3ej4+JBKJRCKRSCQSiUQikUgkEokEE/627e3nC2oyky7me6+99UUviSP9adohhLmWSilVsj+q5TJCOum0L3ppPGiFA0ZMQ7nFMEljELZEL/A17ElkMq1A3QmNmdHEFr3MytjtdUOnd/TlUJ2s22+qsb1g6gN5B1S2aItebAWCJSn6+IoxyDIQveCS+Cvy3P797CPZv5X72A7dUvpy3OFW9LKfxytxQH8xiCd64U/ix6SCvhwSv8VJbXXNigIVxey+QQDQG97z8I/Qhj3RAh7RU5ovCFSyn0YusWe8JjCTqKKW2BqW84JFqEPE36Lf0V8WqCj6Eq9Fjcv7+SLMWLSQv/Cq+sFrsLr+LS+BmUSUAZw9qhKqFWOMMGaMKZ+P8ICbipZzS8A4ClSUBr58cf5KsHaLNhct6JoxPzNzgIxFS7rEXr8arV3TXOMyNty3EN0mznlvYbaJqL5Ejs7+F1Ru/9MCUGh9ipb1iw+xhdkm4skxpny9/Qk2FS3sh5ivtz+hocmibJhDmh1TLC5xAqZwIlrakU31C9L7mBvR0o50+CWGlxgd0dKONIAEZjmUaGkHeoAKcdydTgAV4jA1oQOm0AlFi/smhTKlmTHFcV0TwUQ0OVokWtw389drFX+h4sgRwdwhGofYBVTYFS3uG6nw/RWuARWuRYv7BuCe7QSS+7aIR+G3GB2HP/z/Y5o2YFyKoyvz/88tEkCFiWhxB9xHnc5Voa5oaUfAQm8kgffHx4xnBf8cdyZa2hGQylMOnuoTmELRwn7YQRTXFMXaiRb2A0CNOwdRndtuQvgL2sRSmPkACk2RBKUHeiB1fBwX3kcAaqR46qPfAJQQ0RQPjwx4b6I2EC3pii3vZgWGJp45EfH1+oi8/Ynk4WvRMlAdSWZ4zoznOWVYsooL1vzSxCaOe9JrEo69+gjPaM6U23sLPO1eV6R8PkWGKSC9gsuzIBdXuHaJP389yTC/8DRdFtDqvOr4rQ7ix3k5reVrEq0lcoEfH/3OKwfV7LzBQBd7Xt2isjmii4s7pKRaiEoJYjdxyVSrUjTVNbSO/pZkwMpuI2UDpKHaH4RqOYNjqjia9EqQfJLnLzY0sn+vDTwQDJ7UqJEBvveUzxHExHw4J8ok8fvoG3ev15psdGL93VFkWMTaXJ/PoDuuab1laQ1Ik9zai8lq5Dq6cb2X1NAdZ7i6vRQNSXZqUYZubZY7QRIVhF1BGC0pabiWruXoltsgdBmFBaezH+VptN7A0WZyTis6BjKmMi76ezsJpl66i+JBHO1SbxokhfHZWDk4GUpiZNs4Gf64P0qiqpY/2f3Ge+ZwzHOBr7Jh59bEMrwqSazvGedRgsGwvAnKTmB8lU1QdxSWTRLscHTdl8OwDMZqjW4DNOrQWRmN9iz7iZv/xRyh+BgDp/AmmDpk9WyJs5eSAn1KPlERQTAwKV7b9xaQdfjY6CRhh/wZpVNHeBVxfLepTXXI3Av+/pr8wJuT4jNwxHDG9YkpYvz3Dh5pukSJN9Ne61Kn3+pNN7FC3Ect1FSsxDtH9HyRmtkgSmewW228WTjzNqvdoKOQhqk99dMiD+q2RCZPjaZuma7ruK5p6c2bOPXOT4orByeVRlyWxxBVivJpPQIziVSI67fnMP16RVhC7lFXcC36tzir+gW2oZpKiyG1J4y9pyw9P6hWc5eb/QX3NLYY7aveT3EDM6/lHvWmi0G9H+EBUmeewXFE4vMYo/oEcm1/ep76GqX6Is5oDqmrQLyvL5i5pK7pX0GdwcwlTj3GJoZ7FfsIvZZmIu7dwGWoJVUUuIX1bKIQZ/9LDW5fmCE9AG9OWw+LurBQE/oa3BPnKg44wNPM7YWIiPQcYwGbRYE9iH0e4KezK7F2JscCvbIBm3JZBtCJmEDPYcsB+nhWsDM8YO0BFZbuOISAMjiBgiO2E4CRG+CExDIATlPk/lC0GoDPS0sU/SChBpTAHtQMk7K4UDf8Y5HZ/TlsDKQQbOZzWcBmRCMxNICmBnBAYjmgxin2hzhMaWZMhzCX3z0MQekBC8aYbuHmspWlAZMFo0idDgAlUEii0hygyNTDEtJkQQ3MhRvgFM+yAA1YQnALdQLoNupTZEnmEh3mbn+PSCHMVQ3Ir62qBlB95v+3NG0s6WGWIML08QnsULgGqGPBHqHJLaB+1SyaDxFsoiLIdMQqwE1UBJrEWhYTbpZbv+LAC75QyPY2brOuXgF2TlYqXiL0AJSdaLfPoAcq2jvBPVE7+Ib2qvN1eFDTjJ42gfsVVvdR63pX0usKqXZT1q3vVYln1e/7LQu43+uSJGL1Zvw6qzypoSrbmNSnUSexiHek2+jxfB0eUJNEot7JJqkDblebxElFzpCypw/e079G/p5/KnwMXytcuwzgNSLVmLsOUQzGyE5rOx4xl6NKqrlsFLdRTTjzA28wIo6uviqTqrpDRgNvi2RyywX9INx/ZZbhuVkJRTtnOqT5tQ8DzCM+7UxmGi8IYa6pPdlDRQ3NdBkhizjNxAk3LE/h94PpLI2XOslgjmvqmmrQnFxQjqFquuk6LP8H+jJOZ9Ogj/FcPsL2k+24HXrpLp53FsP8GLL8EA8XnXm8S72wPd4m/nvsmkQikUgkEolEIpFIJBKJRCL53/kHGAmXE9Jr0bAAAAAASUVORK5CYII="
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">Modify profile</p>
                    <MDBBtn color="primary" onClick={handleProfile}>
                      Go
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard style={cardStyle}>
                  <MDBCardImage
                    src="https://via.placeholder.com/300"
                    alt="Card image"
                    top
                  />
                  <MDBCardBody>
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Some quick example text.</p>
                    <MDBBtn color="primary" onClick={() => { /* Action for Button 3 */ }}>
                      Go somewhere
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}

export default Home;
