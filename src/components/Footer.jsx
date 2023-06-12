import React from "react";
import reviews from "../global/TrustBuenoBlanco.png";
//import Image from "next/image";

const MyComponent = () => {
  return (
    <div className="footer">
      <div className="globalFooter">
        <div className="col">
          <div className="row">
            <div className="col-4">
              <img src={reviews} className="reviews" alt="reviews" />
            </div>
            <div className="col align-middle">
              <div className="row d-flex m-0" style={{ height: "100%" }}>
                <div className="col footerDiv p-0">
                  <p className="footerText m-0">Política de privacidad</p>
                </div>
                <div className="col footerDiv p-0">
                  <p className="footerText m-0">Términos y condiciones</p>
                </div>
                <div className="col footerDiv p-0">
                  <a href="https://www.instagram.com/grabberoficial/">
                    <i
                      class="bi bi-instagram text-light"
                      style={{ fontSize: "5rem" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-4">
            <p className="footerText m-0">
              ​Copyright © 2023 Grabber - All rights reserved
            </p>
          </div>
        </div>

        {/* FIN GLOBAL FOOTER*/}
      </div>
      {/* FIN FOOTER*/}
    </div>
  );
};

export default MyComponent;
