import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contactame</h1>
              <p className="hire__text white">
                Puedes contactarme por celular o redes sociales.
              </p>
              <p className="hire__text white">
                <strong>(+54)11-6162-6871</strong> o email{" "}
                <strong>tincho20012017@gmail.com</strong>
              </p>
            </div>
          </div>
          <div>
            <a
              class="btn btn-primary"
              style={{ "background-color": "#55acee" }}
              href="https://twitter.com/eltincho_ok"
              role="button"
            >
              <i class="fab fa-twitter">Twitter</i>
            </a>

            <a
              class="btn btn-primary"
              style={{"background-color": "#ac2bac"}}
              href="https://www.instagram.com/eltincho.ok/"
              role="button"
            >
              <i class="fab fa-instagram"> Instagram </i>
            </a>

            <a
              class="btn btn-primary"
              style={{"background-color": "#0082ca"}}
              href="https://www.linkedin.com/in/martin-morlio-full-stack/"
              role="button"
            >
              <i class="fab fa-linkedin-in">Linkedin</i>
            </a>
          </div>
        </div>
        <div className="col__2">
          {/* <img src={contactImg} alt="" className="contact__img" /> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
