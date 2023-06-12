import React from "react";
import userIcon from "../global/UserIcon.png";

//import Image from "next/image";
//Components
import { Link } from "react-scroll";

// React modules
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  // Moverse en la pestaña

  // Navegar entre pestañas
  let navigate = useNavigate();
  const routeChangeHome = () => {
    let path = `/`;
    navigate(path);
  };
  const routeChangeLogin = () => {
    let path = `login`;
    navigate(path);
  };

  return (
    <header className="header">
      <div className="row d-flex py-3 m-0 w-100 align-items-center">
        <div className="col-2 p-0" style={{ color: "white" }}></div>

        <div className="col m-0 p-0">
          <p
            className="m-0 p-0"
            style={{ color: "white", cursor: "pointer", fontSize: "20px" }}
            onClick={routeChangeHome}
          >
            Home
          </p>
        </div>

        {/*<p
          className="col m-0 p-0"
          style={{ color: "white", cursor: "pointer", fontSize: "20px" }}
          onClick={routeChangeHome}
        >
          Tendencias
        </p> */}
        <Link
          to="tendencies"
          spy={true}
          smooth={true}
          offset={-39}
          duration={500}
          className="col m-0 p-0"
          style={{
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            textDecoration: "None",
          }}
        >
          Tendencias
        </Link>
        <Link
          to="nextGames"
          spy={true}
          smooth={true}
          offset={-39}
          duration={500}
          className="col m-0 p-0"
          style={{
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            textDecoration: "None",
          }}
        >
          Próximos Lanzamientos
        </Link>
        <img
          src={userIcon}
          alt="LoginUsuario"
          style={{ width: "70px", cursor: "pointer" }}
          onClick={routeChangeLogin}
        />
        <div className="col-2 p-0" style={{ color: "white" }}></div>
      </div>
    </header>
  );
};

export default MyComponent;
