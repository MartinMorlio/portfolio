import React from "react";
import "./Project.css";
import Project1 from "./img/project-1.png";
import Project2 from "./img/project-2.png";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Mis Proyectos</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">VSClothes App</h5>
                {/* <h4 className="project__text"> </h4> */}
                <a
                  href="https://github.com/molucax/LocalHost-app"
                  className="project__btn"
                >
                  Ver Detalles
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Countries App</h5>
                {/* <h4 className="project__text"></h4> */}
                <a
                  href="https://github.com/MartinMorlio/PI-Countries"
                  className="project__btn"
                >
                  Ver detalles
                </a>
              </div>
            </div>
          </div>

          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30"></div>
        </div>
      </div>
    </div>
  );
}

export default Project;
