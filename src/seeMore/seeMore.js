//Styles
import "bootstrap-icons/font/bootstrap-icons.css";
//import styles from "./seeMore.css";
import globalStyles from "../global/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import principalImg from "../global/Hogwarts.jpg";
import reviews from "../global/TrustBuenoBlanco.png";

//Components
import MainCard from "../components/MainCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  boxSizing: "content-box",
};

export default function SeeMore() {
  return (
    <>
      <div className="container-fluid px-0">
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
            <div className="main-titles">
              <div className="main-tendencies">
                <h1 className="tendencies">Tendencias</h1>
              </div>
              <div className="main-tendencies">
                <h1 className="tendencies">Próximos lanzamientos</h1>

                <MainCard />
                <MainCard />
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
