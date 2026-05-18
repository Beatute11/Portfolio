import React from "react";
import Figure from "./Figure";
import '../styles/Component.css';

function About() {
  return (
    <div className="about-content container-fluid">
        <div className="row align-items-center justify-content-center">
        <div className="introduction1 col-12 col-lg-4 mb-4 mb-lg-0">
            <p>
                Esu Beata – pradedančioji puslapių programuotoja ir dizainerė. Šiuo metu studijuoju
                Multimediją ir Kompiuterinį dizainą VILNIUS TECH universitete, kur gilinu žinias apie 
                internetinių puslapių kūrimą.
            </p>
        </div>
        <div className="photo-frame-container col-12 col-lg-4 mb-4 mb-lg-0">
            <Figure top="0px" left="0px" rotation={0} />
            <Figure top="0px" left="277px" rotation={90} />
            <Figure top="250px" left="277px" rotation={180} />
            <Figure top="250px" left="0px" rotation={-90} />

            <img 
                src="/static/Aboutme.png" 
                alt="Profilis" 
                className="framed-photo"
            />
        </div>
        <div className="introduction2 col-12 col-lg-4 d-none d-lg-block">
            <p>
                Mane ypač domina front-end programavimas, vizualinis dizainas ir interaktyvių sprendimų kūrimas.
                Siekiu kurti estetiškus, funkcionalius ir vartotojui patogius sprendimus, kuriuose dera
                kūrybiškumas ir technologijos. 
            </p>
        </div>
        </div>
    </div>
  );
}

export default About;