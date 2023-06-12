//Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import globalStyles from "../global/globals.css";
import principalImg from "../global/Hogwarts.jpg";

//import Image from "next/image";
//Components
import { Link } from "react-scroll";
import Login from "../components/Login";
import Header from "../components/Header";
import Footer from "../components/Footer";

//to="test1" spy={true} smooth={true} offset={50} duration={500}

// React modules
import { useNavigate } from "react-router-dom";

export default function Page() {
  // Moverse en la pestaña

  // Navegar entre pestañas

  return (
    <>
      <div className="container-fluid px-0">
        <Header />

        <Login />
        {/*FOOTER*/}
        <Footer />
      </div>
    </>
  );
}
