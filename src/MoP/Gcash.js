import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

function Gcash() {
  const navigate = useNavigate();

  const handlePay = () => {
    navigate("/gcash");
  };

  const handleHome = () => {
    navigate("/home");
  };

 

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "white",
  };

  const cardStyle = {
    width: "300px",
    borderRadius: "15px",
  };

  return (
    <div className="homepage">
      <div style={backgroundStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Gcash Payment Form
            </Link>
          </div>
        </nav>
        <section className="gradient-custom">
          <div className="container my-5 py-5">
            <div className="row d-flex justify-content-center py-5">
              <div className="col-md-7 col-lg-5 col-xl-4">
                <div className="card" style={cardStyle}>
                  <div className="card-body p-4">
                    <form>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            size="17"
                            placeholder="Gcash Number"
                            minLength="19"
                            maxLength="19"
                          />
                        </div>
                        <img
                          src="data:image/png;base64,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"
                          alt="gcash"
                          width="80px"
                        />
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg"
                            size="17"
                            placeholder="Gcash Name"
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center pb-2">
  <div className="form-outline">
    <input
      type="text"
      id="typeExp"
      className="form-control form-control-lg"
      placeholder="Amount"
      size="7"
      minLength="7"
      maxLength="7"
    />
  </div>
  <MDBBtn
  onClick={() => {
    handlePay();
    alert('Payment success!');
  }}
  className="btn btn-sm btn-light mb-4"
  style={{ minWidth: "120px" }}
>
 Pay
</MDBBtn>

</div>
<div>
<MDBBtn
                        onClick={handleHome}
                        className="btn btn-light btn-block mb-4"
                      >
                       Home
                      </MDBBtn>
</div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gcash;
