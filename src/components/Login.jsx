import React, { useState, useEffect } from "react";
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
  // GET INFO FROM INPUTS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    //setMessage(event.target.value);
    //console.log("id is: ", event.target.id);
    if (event.target.id === "email") {
      setEmail(event.target.value);
      console.log("Email: ", event.target.value);
    } else {
      setPassword(event.target.value);
      console.log("Password: ", event.target.value);
    }
    //console.log("value is: ", event.target.value);
  };

  const [user, setUser] = useState({});
  const getUser = async () => {
    const newData = await fetch(
      `/getUser?email=${email}&password=${password}`,
      {
        method: "GET", //POST, PUT, DELETE
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((res) => res.json());
    setUser(newData["result"]);
    if (newData["result"].length === 1) {
      alert("Te has LOGEADO correctamente");
    } else {
      alert("ERROR. Credenciales inválidos");
    }
  };

  const insertUser = async () => {
    const newData = await fetch(
      `/insertUser?email=${email}&password=${password}`,
      {
        method: "PUT", //POST, PUT, DELETE
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((res) => res.json());
    if (newData["result"]) {
      alert("Te has REGISTRADO correctamente");
    } else {
      alert("ERROR. Este email ya está registrado");
    }

    // setUser(newData["result"]);
    /*if (newData["result"].length === 1) {
      alert("Te has logeado correctamente");
    } else {
      alert("Credenciales inválidos");
    }*/
  };

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
                id="email"
                type="email"
                size="lg"
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="password"
                type="password"
                size="lg"
                onChange={handleChange}
              />

              <div className="row">
                <div className="col d-flex justify-content-center;">
                  <button
                    class="btn"
                    style={{
                      backgroundColor: "#474747",
                      fontSize: "20px",
                      color: "white",
                      width: "100%",
                    }}
                    onClick={getUser}
                  >
                    Login
                  </button>
                </div>
                <div className="col d-flex justify-content-center;">
                  <button
                    class="btn"
                    style={{
                      backgroundColor: "#474747",
                      fontSize: "20px",
                      color: "white",
                      width: "100%",
                    }}
                    onClick={insertUser}
                  >
                    Register
                  </button>
                </div>
              </div>
              {/*<button
                class="btn"
                style={{
                  backgroundColor: "#474747",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Login
              </button>*/}

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
