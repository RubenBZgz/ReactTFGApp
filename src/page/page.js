//Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./page.css";
import globalStyles from "../global/globals.css";
import principalImg from "../global/Hogwarts.jpg";
//import dbOperation from "../dbFiles/dbOperationPrueba";

//import Image from "next/image";
//Components
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import MainCard2 from "../components/MainCard2";
import Footer from "../components/Footer";

//to="test1" spy={true} smooth={true} offset={50} duration={500}

// React modules
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Page() {
  // Moverse en la pestaña

  // Navegar entre pestañas
  let navigate = useNavigate();
  const routeChangeMore = () => {
    let path = `more`;
    navigate(path);
  };

  const [videogame, setVideogame] = useState({
    id: 0,
    title: "",
    image: "",
    releaseDate: "",
    officialPrice: 0,
    keyPrice: 0,
  });

  const getAllVideogames = async () => {
    console.log(videogame);
    const newData = await fetch("/getAllVideogames", {
      method: "GET", //POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log("DATOS");
    console.log(newData);
    //console.log(videogame["result"].length);
    setVideogame(newData["result"]);
  };

  return (
    <>
      <div className="container-fluid px-0">
        {/* HEADER */}
        <Header />

        <div className="">
          <div className="">
            <img
              className="principal_image"
              src={principalImg}
              alt="ImagenPrincipal"
            />
          </div>
          <div className="main-games">
            <div className="main-titles2">
              <div className="row m-0">
                <div className="main-tendencies col px-5">
                  <h1 className="tendencies" id="tendencies">
                    Tendencias
                  </h1>
                  <div className="main-card" style={{ cursor: "pointer" }}>
                    <div>
                      <img src="https://img.gg.deals/6a/1d/3524ae25e5d9db366028046d0798c677e317_249xr143.jpg" />
                    </div>
                    <div className="m-3">
                      <h1>Street Fighter 6</h1>
                      <p>44.33€</p>
                    </div>
                  </div>
                  <div className="main-card" style={{ cursor: "pointer" }}>
                    <div>
                      <img src="https://img.gg.deals/c2/b3/c5538bfb764f878acb66076a68b20728782e_249xr143.jpg" />
                    </div>
                    <div className="m-3">
                      <h1 style={{ fontSize: "1vw", wordWrap: "break-word" }}>
                        Halo: The Master Chief Collection
                      </h1>
                      <p>9.99€</p>
                    </div>
                  </div>
                  <div className="main-card" style={{ cursor: "pointer" }}>
                    <div>
                      <img src="https://img.gg.deals/b3/ad/0bfc095bea5ffdbc0aa71536c83fdb60b60a_249xr143.jpg" />
                    </div>
                    <div className="m-3">
                      <h1>Ghostwire: Tokyo</h1>
                      <p>9.99€</p>
                    </div>
                  </div>
                  <div className="main-card" style={{ cursor: "pointer" }}>
                    <div>
                      <img src="https://img.gg.deals/e2/26/80244912375b89b14eb7f53406c5909abefc_249xr143.jpg" />
                    </div>
                    <div className="m-3">
                      <h1>Grime</h1>
                      <p>9.99€</p>
                    </div>
                  </div>
                </div>
                <div className="main-tendencies col px-5">
                  <h1 className="tendencies" id="nextGames">
                    Próximos lanzamientos
                  </h1>
                  <MainCard />
                  <MainCard2 />
                  <div className="main-card" style={{ cursor: "pointer" }}>
                    <div>
                      <img src="https://img.gg.deals/81/51/25bfcb1f77f67aca6863df4273b4f4b55600_249xr143.jpg" />
                    </div>
                    <div className="m-3">
                      <h1 style={{ fontSize: "1vw" }}>
                        Curse of the Dead Gods
                      </h1>
                      <p>7.99€</p>
                    </div>
                  </div>
                  <div className="main-card" style={{ cursor: "pointer" }}>
                    <div>
                      <img src="https://img.gg.deals/07/cb/db211697b140a4a4d4239a08fe9e58f3c992_249xr143.jpg" />
                    </div>
                    <div className="m-3">
                      <h1>Honey, I Joined a Cult</h1>
                      <p>9.99€</p>
                    </div>
                  </div>
                  <div className="main-card" style={{ cursor: "pointer" }}>
                    <div>
                      <img src="https://img.gg.deals/f6/d4/3e62216028714eb08335764c21655ea7d301_249xr143.jpg" />
                    </div>
                    <div className="m-3">
                      <h1>Field of Glory II</h1>
                      <p>2.77€</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 mt-5 mb-5">
                <div className="col p-0 d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-light buttonSeeMore"
                    onClick={routeChangeMore}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*FOOTER*/}
        <Footer />
      </div>
    </>
  );
}
