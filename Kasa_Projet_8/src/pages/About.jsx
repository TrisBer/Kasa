//import React from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { ImageBanner } from "../components/ImageBanner";
import "./about.scss";

function About() {
  return (
    <>
      <ImageBanner />
      <div className="about__container">
        <DescriptionPanel title="Fiabilité" content="Les annocnes postées sur Kasa garantissent une fiabillité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <DescriptionPanel title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comme le comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DescriptionPanel title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrînera une exclusion de notre plateforme." />
        <DescriptionPanel title="Responsabilité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité étalis apr nos sevices. 
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifié que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </>
  );
}

export default About;
