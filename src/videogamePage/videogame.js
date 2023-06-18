//Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import globalStyles from "../global/globals.css";
import styles from "./videogame.css";

//import Image from "next/image";
//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProviderPrueba from "../components/ProviderPrueba";

//to="test1" spy={true} smooth={true} offset={50} duration={500}

// React modules
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function providers(videogame) {
  console.log("providers");
  if (videogame) {
    const options = [];
    for (let i = 0; i < videogame.length; i++) {
      options.push(
        <ProviderPrueba
          idProvider={videogame[i].idProvider}
          videogameTitle={videogame[i].videogameTitle}
          title={videogame[i].title}
          image={videogame[i].image}
          price={videogame[i].price}
          link={videogame[i].link}
        />
      );
    }
    return options;
  } else {
    return null;
  }
}

export default function Videogame() {
  const { state } = useLocation();
  const [videogame, setVideogame] = useState({});
  console.log(state);
  // Moverse en la pestaña
  const getVideogame = async () => {
    console.log("estoy");
    const newData = await fetch(
      `/getVideogameProviders?videogameTitle=${state.title}`,
      {
        method: "GET", //POST, PUT, DELETE
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((res) => res.json());
    console.log("resultado");
    console.log(newData["result"]);
    setVideogame(newData["result"]);
  };

  useEffect(() => {
    getVideogame();
  }, []);

  // Navegar entre pestañas

  return (
    <>
      <div
        className="container-fluid px-0"
        style={{ backgroundColor: "#EAE9EC" }}
      >
        {/* HEADER */}
        <Header />
        <div className="col">
          <div className="row m-5 p-5 d-flex justify-content-center">
            <div className="col-8 " style={{ backgroundColor: "white" }}>
              <div className="cardGame d-flex flex-direction-row">
                {/*<img src="https://img.gg.deals/9b/75/151098779ccb080d94ee39feeb25e83d1d2d_307xr176.jpg" />*/}
                <img style={{ height: "12vw" }} src={state["image"]} />
                <div className="col px-5">
                  <div className="row mb-2">
                    <h1 className="" style={{ fontSize: "2vw" }}>
                      {state["title"]}
                    </h1>
                  </div>

                  <div className="row">
                    <p className="col">
                      Compare prices with Game Graber to find the cheapest cd
                      key for Diablo IV PC. Head over to one of the trusted game
                      stores from our price comparison and buy cd key at the
                      best price. Use the indicated client to activate key and
                      download and play your game.
                    </p>
                  </div>
                </div>
              </div>

              {/*<img
              src="https://img.gg.deals/9b/75/151098779ccb080d94ee39feeb25e83d1d2d_307xr176.jpg"
              style={{ height: "250px" }}
            />*/}
            </div>
          </div>
        </div>
        <div className="row mx-5 px-5 d-flex justify-content-center">
          <div className="col-8 mb-3 ps-4" style={{ fontSize: "1.4vw" }}>
            <div className="row">
              <div className="col">Proveedores</div>
              <div className="col px-5">
                <p className=" m-0">Plataformas</p>
              </div>
            </div>
          </div>
        </div>

        {videogame && providers(videogame)}
        {/*FOOTER*/}
        <Footer />
      </div>
    </>
  );
}
