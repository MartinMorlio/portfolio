import React from "react";
import "./About.css";
import aboutImg from "./img/img-cv.jpg";
function About() {
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Acerca de mi</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Fui, por mucho tiempo, medio oficial de albañil. Me gustaba mucho. Luego, me di cuenta que no era lo que quería hacer toda mi vida.
              </p>
              <p className="about__text p__color">
              Empecé a investigar y encontré lo que realmente me apasiona, la programación. Decidí adentrarme en este maravilloso mundo de la tecnología hace un año y cada día me apasiona más. 
              </p>
              <p className="about__text p__color">
              Mi próximo objetivo es seguir aprendiendo, poner en práctica mis conocimientos en alguna empresa y más adelante poder seguir especializándome en ciberseguridad, otro tema que me súper apasiona.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="src\img\MartinMorlioCV.pdf" download="CV-Martín-Morlio.pdf">
                  <button className="about btn pointer">Descargar Cv</button>
                </a>
                <a href="contact#Contact">
                  <button className="about btn pointer">Contáctame</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
