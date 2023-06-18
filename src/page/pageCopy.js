//Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./page.css";
import "../global/globals.css";
import principalImg from "../global/Hogwarts.jpg";
//import dbOperation from "../dbFiles/dbOperationPrueba";

//import Image from "next/image";
//Components
import Header from "../components/Header";
import MainCard from "../components/MainCard";
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

  const [videogame, setVideogame] = useState({});

  /*const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === "id" || name === "officialPrice" || name === "keyPrice") {
      setVideogame((prevState) => ({
        ...prevState,
        [name]: parseInt(value),
      }));
      return;
    }
    setVideogame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getData = async () => {
    console.log(videogame);
    const newData = await fetch("/api", {
      method: "POST", //POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: videogame.id,
      }),
    }).then((res) => res.json());
    console.log("DATOS");
    console.log(newData);
    setVideogame(newData["result"]);
  };*/

  // FUNCIONA A LA PERFECCIÓN
  const getAllVideogames = async () => {
    console.log(videogame);
    const newData = await fetch("/getAllVideogames", {
      method: "GET", //POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    setVideogame(newData["result"]);
  };

  useEffect(() => {
    getAllVideogames();
  }, []);

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
                  {videogame[0] && (
                    <MainCard
                      id={videogame[0].id}
                      title={videogame[0].title}
                      image={videogame[0].image}
                      releaseDate={videogame[0].releaseDate}
                      officialPrice={videogame[0].officialPrice}
                      keyPrice={videogame[0].keyPrice}
                    />
                  )}
                  {videogame[1] && (
                    <MainCard
                      id={videogame[1].id}
                      title={videogame[1].title}
                      image={videogame[1].image}
                      releaseDate={videogame[1].releaseDate}
                      officialPrice={videogame[1].officialPrice}
                      keyPrice={videogame[1].keyPrice}
                    />
                  )}
                  {videogame[2] && (
                    <MainCard
                      id={videogame[2].id}
                      title={videogame[2].title}
                      image={videogame[2].image}
                      releaseDate={videogame[2].releaseDate}
                      officialPrice={videogame[2].officialPrice}
                      keyPrice={videogame[2].keyPrice}
                    />
                  )}
                  {videogame[3] && (
                    <MainCard
                      id={videogame[3].id}
                      title={videogame[3].title}
                      image={videogame[3].image}
                      releaseDate={videogame[3].releaseDate}
                      officialPrice={videogame[3].officialPrice}
                      keyPrice={videogame[3].keyPrice}
                    />
                  )}
                </div>
                <div className="main-tendencies col px-5">
                  <h1 className="tendencies" id="nextGames">
                    Próximos lanzamientos
                  </h1>
                  {videogame[4] && (
                    <MainCard
                      id={videogame[4].id}
                      title={videogame[4].title}
                      image={videogame[4].image}
                      releaseDate={videogame[4].releaseDate}
                      officialPrice={videogame[4].officialPrice}
                      keyPrice={videogame[4].keyPrice}
                    />
                  )}
                  {videogame[5] && (
                    <MainCard
                      id={videogame[5].id}
                      title={videogame[5].title}
                      image={videogame[5].image}
                      releaseDate={videogame[5].releaseDate}
                      officialPrice={videogame[5].officialPrice}
                      keyPrice={videogame[5].keyPrice}
                    />
                  )}
                  {videogame[6] && (
                    <MainCard
                      id={videogame[6].id}
                      title={videogame[6].title}
                      image={videogame[6].image}
                      releaseDate={videogame[6].releaseDate}
                      officialPrice={videogame[6].officialPrice}
                      keyPrice={videogame[6].keyPrice}
                    />
                  )}
                  {videogame[7] && (
                    <MainCard
                      id={videogame[7].id}
                      title={videogame[7].title}
                      image={videogame[7].image}
                      releaseDate={videogame[7].releaseDate}
                      officialPrice={videogame[7].officialPrice}
                      keyPrice={videogame[7].keyPrice}
                    />
                  )}
                </div>
              </div>
              <div className="row mx-0 mt-5 mb-5">
                <div className="col p-0 d-flex justify-content-center">
                  {/*<button
                    type="button"
                    class="btn btn-light buttonSeeMore"
                    onClick={routeChangeMore}
                  >
                    Ver más
                  </button>*/}
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
