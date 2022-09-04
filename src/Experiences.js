import React from "react";
import "./Experiences.css";

function Experiences() {
  return (
    <div className="experiences" id="Experience">
      <h1 className="heading">Mi Experiencia</h1>
      <div className="experiences-container">
        <div className="experiences-subcontainer-one">
          <img
            alt="Logo"
            src="https://www.nauty360.com/static/media/main-logo.bc82198a.svg"
          />
          <div className="experiences-subcontainer-two">
            <h4 className="experiences-details">
              He trabajado como Full Stack Developer en Nauty360, promoviendo el
              trabajo en equipo, hallando soluciones a los distintos problemas
              que se presentan dentro de la app. Siendo parte importante del
              inicio de desarrollo de la v2 de la app.
              Aprendiendo y trabajando con tecnologías como Python, FastAPI y Docker, 
              teniendo un diploma en cada uno de esas tecnologías.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
