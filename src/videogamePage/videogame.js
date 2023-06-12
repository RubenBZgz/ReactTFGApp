//Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import globalStyles from "../global/globals.css";
import styles from "./videogame.css";

//import Image from "next/image";
//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Provider from "../components/Provider";
import Provider2 from "../components/Provider2";

//to="test1" spy={true} smooth={true} offset={50} duration={500}

// React modules
import { useNavigate } from "react-router-dom";

export default function Videogame() {
  // Moverse en la pestaña

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
                <img src="https://img.gg.deals/9b/75/151098779ccb080d94ee39feeb25e83d1d2d_307xr176.jpg" />
                <div className="col px-5">
                  <div className="row mb-2">
                    <h1 className="" style={{ fontSize: "2vw" }}>
                      Diablo IV
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

        <Provider />
        <Provider2 />

        {/*FOOTER*/}
        <Footer />
      </div>
    </>
  );
}
