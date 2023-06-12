import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer fluid>
      <MDBRow
        className="d-flex justify-content-center align-items-center h-100"
        style={{ backgroundColor: "#474747" }}
      >
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <button
                class="btn"
                style={{
                  backgroundColor: "#474747",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Login
              </button>

              <hr className="my-4" />

              <button
                class="btn"
                style={{
                  backgroundColor: "#04da8d",
                  fontSize: "20px",
                  color: "white",
                  width: "100%",
                }}
              >
                Sign in with google
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
