import React from "react";
import styles from "./MainCard.css";
import { useNavigate } from "react-router-dom";

// IGUAL LA SOLUCIÓN ES HACERLO COMO SI FUERA UNA PÁGINA WEB CON EL FUNCTION
function MyComponent(props) {
  let navigate = useNavigate();
  const routeChangeVideogame = () => {
    let path = `videogame`;
    navigate(path, {
      state: props,
    });
  };
  return (
    <div
      className="main-card "
      onClick={routeChangeVideogame}
      style={{ cursor: "pointer" }}
    >
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div className="m-3">
        <h1 className=" ">{props.title}</h1>
        <p>{props.officialPrice}€</p>
      </div>
    </div>
  );
}

export default MyComponent;
