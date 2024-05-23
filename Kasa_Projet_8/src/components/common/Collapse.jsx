import React, { useState } from "react";
import Chevron from "../../assets/images/vectorBas.svg";

//Réduire affichera/masquera le contenu
export const Collapse = (props) => {

  //déstructurer les propriétés pour une meilleure lisibilité
  const {title, content} = props;
  //state to follow the open/close status
  const [isOpen, setIsOpen] = useState(false);

  //méthodes pour configurer le contenu ouvert/fermé
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse ${isOpen ? "collapse__visible" : ""}`}>
      {/* en-tête avec le titre et le chevron */}
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        {/* Chevron rotatif  */}
        <span className={`chevron ${isOpen ? "rotated" : ""}`}>
          <img src={Chevron} alt="chevron" aria-label="Carrousel chevron"/>
        </span>
      </div>
      {/* afficher le contenu si isOpen  */}
      {isOpen && <div className={`collapse-content ${!isOpen ? "collapse__hidden" : ""}`}>{content}</div>}
    </div>
  );
};