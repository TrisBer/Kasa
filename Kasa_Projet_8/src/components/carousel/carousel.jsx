import React, { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

//composant carrousel pour afficher les images de la maison
export const Carousel = ({ slides }) => {

  //état pour suivre l'index actuel du carrousel
  const [currentSlide, setCurrentIndex] = useState(0);

  //méthode pour passer à la diapositive suivante ou précédente
  const goToSlide = (index) => {
    setCurrentIndex((prevIndex) => (prevIndex + index + slides.length) % slides.length);
  };

  //vérifiez s'il y a plus d'une diapositive
  const multipleSlides = slides.length > 1;

  return (
    <div className="carousel-container">
          {/*Toujours afficher la première diapositive/la diapositive actuelle  */}
          <img src={slides[currentSlide]} alt={`Diapositive ${currentSlide + 1}`} className="carousel-slides" />

        {/* afficher les flèches des diapositives (gauche et droite)  */}
          {multipleSlides && (
            <>
              <img
                src={left}
                alt="Flèche gauche"
                onClick={() => goToSlide(-1)}
                className="leftArrow"
                aria-label="Flèche gauche"
              />
              <img
                src={right}
                alt="Flèche droite"
                onClick={() => goToSlide(1)}
                className="rightArrow"
                aria-label="Flèche droite"
              />
            {/* afficher le compteur d'images s'il y a plus de 1 diapositives  */}
            <div className="image-count">{`${currentSlide + 1} / ${slides.length}`}</div>
            </>
          )}         
        </div>
   );
};