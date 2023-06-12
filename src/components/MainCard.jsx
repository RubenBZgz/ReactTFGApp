import React from "react";
import styles from "./MainCard.css";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  let navigate = useNavigate();
  const routeChangeVideogame = () => {
    let path = `videogame`;
    navigate(path);
  };
  return (
    <div
      className="main-card"
      onClick={routeChangeVideogame}
      style={{ cursor: "pointer" }}
    >
      <div>
        <img src="https://img.gg.deals/9b/75/151098779ccb080d94ee39feeb25e83d1d2d_249xr143.jpg" />
      </div>
      <div className="m-3">
        <h1>Diablo IV</h1>
        <p>66.99€</p>
      </div>
    </div>
  );
};

export default MyComponent;
